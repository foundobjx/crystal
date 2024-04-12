import type { GrafastError } from "../error.js";
import { newGrafastError, SafeError } from "../error.js";
import { inspect } from "../inspect.js";
import type {
  AddDependencyOptions,
  ExecutionDetails,
  ExecutionEntryFlags,
  GrafastResultsList,
} from "../interfaces.js";
import {
  $$deepDepSkip,
  $$inhibit,
  ALL_FLAGS,
  DEFAULT_ACCEPT_FLAGS,
  DEFAULT_FORBIDDEN_FLAGS,
  FLAG_ERROR,
  FLAG_INHIBITED,
  FLAG_NULL,
  NO_FLAGS,
  TRAPPABLE_FLAGS,
} from "../interfaces.js";
import type { ListCapableStep } from "../step.js";
import { ExecutableStep } from "../step.js";
import type { __ItemStep } from "./__item.js";

// PUBLIC FLAGS
export const TRAP_ERROR = FLAG_ERROR as ExecutionEntryFlags;
export const TRAP_INHIBITED = FLAG_INHIBITED as ExecutionEntryFlags;
export const TRAP_ERROR_OR_INHIBITED = (FLAG_ERROR |
  FLAG_INHIBITED) as ExecutionEntryFlags;

function digestAcceptFlags(acceptFlags: ExecutionEntryFlags) {
  const parts: string[] = [];
  if ((acceptFlags & FLAG_NULL) === 0) {
    parts.push("rejectNull");
  }
  if ((acceptFlags & FLAG_ERROR) !== 0) {
    parts.push("trapError");
  }
  if ((acceptFlags & FLAG_INHIBITED) !== 0) {
    parts.push("trapInhibited");
  }
  return parts.join("&");
}

const TRAP_VALUES = [
  "NULL",
  "EMPTY_LIST",
  "PASS_THROUGH",
  // "UNDEFINED", // waiting for a need
] as const;
/** @defaultValue {'PASS_THROUGH'} */
export type TrapValue = (typeof TRAP_VALUES)[number];
/** `false` means pass-through; all others are literal */
export type ResolvedTrapValue = false | null | undefined | readonly never[];
export interface FlagStepOptions {
  acceptFlags?: ExecutionEntryFlags;
  onReject?: GrafastError | null;
  if?: ExecutableStep<boolean>;
  // Trapping an error might want to result in a null or an empty list.
  valueForInhibited?: TrapValue;
  valueForError?: TrapValue;
}

const EMPTY_LIST = Object.freeze([]);

function trim(string: string, length = 15): string {
  if (string.length > length) {
    return string.substring(0, length - 2) + "…";
  } else {
    return string;
  }
}

function resolveTrapValue(tv: TrapValue): ResolvedTrapValue {
  switch (tv) {
    case "NULL":
      return null;
    case "EMPTY_LIST":
      return EMPTY_LIST;
    case "PASS_THROUGH":
      return false;
    default: {
      const never: never = tv;
      throw new Error(
        `TrapValue '${never}' not understood; please use one of: ${TRAP_VALUES.join(
          ", ",
        )}`,
      );
    }
  }
}

export class __FlagStep<TData> extends ExecutableStep<TData> {
  static $$export = {
    moduleName: "grafast",
    exportName: "__FlagStep",
  };

  isSyncAndSafe = false;
  private ifDep: number | null = null;
  private forbiddenFlags: ExecutionEntryFlags;
  private onRejectReturnValue: GrafastError | typeof $$inhibit;
  private valueForInhibited: ResolvedTrapValue;
  private valueForError: ResolvedTrapValue;
  private canBeInlined: boolean;
  constructor(step: ExecutableStep, options: FlagStepOptions) {
    super();
    const {
      acceptFlags = DEFAULT_ACCEPT_FLAGS,
      onReject,
      if: $cond,
      valueForInhibited = "PASS_THROUGH",
      valueForError = "PASS_THROUGH",
    } = options;
    this.forbiddenFlags = ALL_FLAGS & ~acceptFlags;
    this.onRejectReturnValue = onReject == null ? $$inhibit : onReject;
    this.valueForInhibited = resolveTrapValue(valueForInhibited);
    this.valueForError = resolveTrapValue(valueForError);
    this.canBeInlined =
      !$cond &&
      this.valueForInhibited === false &&
      this.valueForError === false;
    if (!this.canBeInlined) {
      this.addDependency({ step, acceptFlags: TRAPPABLE_FLAGS });
      if ($cond) {
        this.ifDep = this.addDependency($cond);
      }
    } else {
      this.addDependency({ step, acceptFlags, onReject });
    }
  }
  public toStringMeta(): string | null {
    const acceptFlags = ALL_FLAGS & ~this.forbiddenFlags;
    const rej =
      this.onRejectReturnValue === $$inhibit
        ? `INHIBIT`
        : this.onRejectReturnValue
        ? trim(String(this.onRejectReturnValue))
        : inspect(this.onRejectReturnValue);
    const $if =
      this.ifDep !== null ? this.getDepOptions(this.ifDep).step : null;
    return `${$if ? `if(${$if.id}): ` : ``}${digestAcceptFlags(
      acceptFlags,
    )}, onReject: ${rej}`;
  }
  [$$deepDepSkip](): ExecutableStep {
    return this.getDepOptions(0).step;
  }
  listItem($item: __ItemStep<this>) {
    const $dep = this.getDepOptions(0).step as
      | ExecutableStep<any>
      | ListCapableStep<any>;
    return "listItem" in $dep && typeof $dep.listItem === "function"
      ? $dep.listItem($item)
      : $item;
  }
  /** Return inlining instructions if we can be inlined. @internal */
  inline(
    options: Omit<AddDependencyOptions, "step">,
  ): AddDependencyOptions | null {
    if (!this.canBeInlined) {
      return null;
    }
    const step = this.dependencies[0];
    const forbiddenFlags = this.dependencyForbiddenFlags[0];
    const onReject = this.dependencyOnReject[0];
    const acceptFlags = ALL_FLAGS & ~forbiddenFlags;
    if (
      // TODO: this logic could be improved so that more flag checks were
      // inlined, e.g. `trap(inhibitOnNull($foo), TRAP_INHIBIT)` should just
      // become `$foo`.
      //
      // However, we must be careful that we don't optimize away flags, e.g.
      // `trap(inhibitOnNull($foo), TRAP_INHIBIT, { if: $cond })` needs to see
      // the inhibit flag to know what to do, so in this case we shouldn't be
      // inlined. This may only apply to __FlagStep and might be something we
      // want to optimize later.
      options.onReject === undefined ||
      options.onReject === onReject
    ) {
      if (
        options.acceptFlags === undefined ||
        options.acceptFlags === DEFAULT_ACCEPT_FLAGS ||
        options.acceptFlags === acceptFlags ||
        false
      ) {
        return { step, acceptFlags, onReject };
      }
    }
    return null;
  }
  execute(
    _details: ExecutionDetails<[data: TData, cond?: boolean]>,
  ): GrafastResultsList<TData> {
    throw new Error(`${this} not finalized?`);
  }
  finalize() {
    if (this.ifDep !== null) {
      this.execute = this.fancyExecute;
    } else {
      this.execute = this.passThroughExecute;
    }
    super.finalize();
  }
  private fancyExecute(
    details: ExecutionDetails<[data: TData, cond?: boolean]>,
  ): any {
    const dataEv = details.values[0]!;
    const condEv =
      this.ifDep === null ? null : details.values[this.ifDep as 1]!;
    const {
      forbiddenFlags: thisForbiddenFlags,
      onRejectReturnValue,
      valueForError,
      valueForInhibited,
    } = this;
    return details.indexMap((i) => {
      const cond = condEv ? condEv.at(i) : true;
      const forbiddenFlags = cond
        ? thisForbiddenFlags
        : DEFAULT_FORBIDDEN_FLAGS;
      const flags = dataEv._flagsAt(i);
      if ((forbiddenFlags & flags) === NO_FLAGS) {
        if (flags & FLAG_ERROR && this.valueForError !== false) {
          // Trapped an error
          return valueForError;
        }
        if (flags & FLAG_INHIBITED && this.valueForInhibited !== false) {
          // Trapped an inhibit
          return valueForInhibited;
        }
        // Else, assume pass-through
        return dataEv.at(i);
      } else {
        return onRejectReturnValue;
      }
    });
  }

  // Checks already performed via addDependency, just pass everything through. Should have been inlined!
  private passThroughExecute(
    details: ExecutionDetails<[data: TData, cond?: boolean]>,
  ): any {
    const ev = details.values[0];
    if (ev.isBatch) {
      return ev.entries;
    } else {
      const val = ev.value;
      return details.indexMap(() => val);
    }
  }
}

/**
 * Example use case: get user by id, but id is null: no need to fetch the user
 * since we know they won't exist.
 */
export function inhibitOnNull<T>($step: ExecutableStep<T>) {
  return new __FlagStep<T>($step, {
    acceptFlags: DEFAULT_ACCEPT_FLAGS & ~FLAG_NULL,
  });
}

/**
 * Example use case: expecting a node ID that represents a User, but get one
 * that represents a Post instead: throw error to tell user they've sent invalid
 * data.
 */
export function assertNotNull<T>(
  $step: ExecutableStep<T>,
  message: string,
  options?: { if?: FlagStepOptions["if"] },
) {
  return new __FlagStep<T>($step, {
    ...options,
    acceptFlags: DEFAULT_ACCEPT_FLAGS & ~FLAG_NULL,
    onReject: newGrafastError(new SafeError(message), $step.id),
  });
}

export function trap<T>(
  $step: ExecutableStep<T>,
  acceptFlags: ExecutionEntryFlags,
  options?: {
    valueForInhibited?: FlagStepOptions["valueForInhibited"];
    valueForError?: FlagStepOptions["valueForError"];
  },
) {
  return new __FlagStep<T>($step, {
    ...options,
    acceptFlags: (acceptFlags & TRAPPABLE_FLAGS) | FLAG_NULL,
  });
}

// Have to overwrite the getDep method due to circular dependency
(ExecutableStep.prototype as any).getDep = function (
  this: ExecutableStep,
  depId: number,
) {
  const { step, acceptFlags, onReject } = this.getDepOptions(depId);
  if (acceptFlags === DEFAULT_ACCEPT_FLAGS && onReject == null) {
    return step;
  } else {
    // Return a __FlagStep around options.step so that all the options are preserved.
    return new __FlagStep(step, { acceptFlags, onReject });
  }
};
