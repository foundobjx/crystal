import type { GraphQLInputType } from "graphql";
import {
  isEnumType,
  isInputObjectType,
  isListType,
  isNonNullType,
  isScalarType,
} from "graphql";

import type { AnyInputStep, UnbatchedExecutionExtra } from "../interfaces.js";
import type { ExecutableStep } from "../step.js";
import { UnbatchedExecutableStep } from "../step.js";

let currentModifiers: Modifier<any>[] = [];

export class ApplyInputStep<TArg = any> extends UnbatchedExecutableStep<
  (arg: TArg) => void
> {
  static $$export = {
    moduleName: "grafast",
    exportName: "ApplyInputStep",
  };

  valueDepId: 0;
  constructor(
    private inputType: GraphQLInputType,
    $value: AnyInputStep,
  ) {
    super();
    this.valueDepId = this.addUnaryDependency($value) as 0;
  }

  unbatchedExecute(extra: UnbatchedExecutionExtra, value: unknown) {
    return (parentThing: TArg) =>
      inputArgsApply(this.inputType, parentThing, value);
  }
}

export function inputArgsApply<TArg>(
  inputType: GraphQLInputType,
  target: TArg,
  inputValue: unknown,
): void {
  if (currentModifiers.length !== 0) {
    throw new Error("Previous modifiers weren't cleaned up!");
  }
  try {
    _inputArgsApply(inputType, target, inputValue);
    for (let i = currentModifiers.length - 1; i >= 0; i--) {
      currentModifiers[i].apply();
    }
  } finally {
    currentModifiers = [];
  }
}

export function applyInput<TArg = any>(
  inputType: GraphQLInputType,
  $value: AnyInputStep,
) {
  return new ApplyInputStep<TArg>(inputType, $value);
}

/*
const defaultInputObjectTypeInputPlanResolver: InputObjectTypeInputPlanResolver =
  (input, info) => {
    const fields = info.type.getFields();
    const obj: { [key: string]: ExecutableStep } = Object.create(null);
    for (const fieldName in fields) {
      obj[fieldName] = input.get(fieldName);
    }
    return object(obj);
  };
*/

function _inputArgsApply<TArg>(
  inputType: GraphQLInputType,
  target: TArg,
  inputValue: unknown,
): void {
  if (inputValue === undefined) {
    return;
  }
  if (isNonNullType(inputType)) {
    if (inputValue === null) {
      throw new Error(`null value found in non-null position`);
    }
    _inputArgsApply(inputType.ofType, target, inputValue);
  } else if (isListType(inputType)) {
    if (inputValue == null) return;
    if (!Array.isArray(inputValue)) {
      throw new Error(`Expected list in list position`);
    }
    for (const val of inputValue) {
      _inputArgsApply(inputType.ofType, target, val);
    }
  } else if (isInputObjectType(inputType)) {
  } else if (isScalarType(inputType)) {
  } else if (isEnumType(inputType)) {
  } else {
    const never: never = inputType;
    throw new Error(`Input type expected, but found ${never}`);
  }
}

/**
 * Modifier plans modify their parent plan (which may be another ModifierStep
 * or an ExecutableStep). First they gather all the requirements from their
 * children (if any) being applied to them, then they apply themselves to their
 * parent plan. This application is done through the `apply()` method.
 *
 * Modifier plans do not use dependencies.
 */
export abstract class Modifier<TParent> {
  // Explicitly we do not add $$export here because we want children to set it
  static $$export: any;

  constructor(protected readonly parent: TParent) {
    currentModifiers.push(this);
  }

  /**
   * In this method, you should apply the changes to your `this.parent` plan
   */
  abstract apply(): void;
}

export function isModifier<TParent>(plan: any): plan is Modifier<TParent> {
  return plan instanceof Modifier;
}

export function assertModifier<TParent>(
  plan: any,
  pathDescription: string,
): asserts plan is Modifier<TParent> {
  if (!isModifier(plan)) {
    throw new Error(
      `The plan returned from '${pathDescription}' should be a modifier plan, but it does not implement the 'apply' method.`,
    );
  }
}

/*
type ApplyAfterMode = "autoApplyAfterParentApply" | "autoApplyAfterParentInput";

function processAfter(
  rootFieldArgs: InputValue,
  path: ReadonlyArray<string | number>,
  result: Modifier | null | undefined | void,
  fields: Record<string, GraphQLInputField>,
  applyAfterMode: ApplyAfterMode,
) {
  if (result != null) {
    if (applyAfterMode === "autoApplyAfterParentApplyPlan" && result != null) {
      // `applyPlan` returned a step, so auto-apply every subfield to it
      for (const name of Object.keys(fields)) {
        rootFieldArgs.apply(result, [...path, name]);
      }
    } else {
      for (const [name, spec] of Object.entries(fields)) {
        const autoApply =
          applyAfterMode === "autoApplyAfterParentInputPlan"
            ? (spec as GraphQLInputField).extensions.grafast
                ?.autoApplyAfterParentInputPlan
            : applyAfterMode === "autoApplyAfterParentApplyPlan"
            ? (spec as GraphQLInputField).extensions.grafast
                ?.autoApplyAfterParentApplyPlan
            : null;
        if (autoApply) {
          rootFieldArgs.apply(result, [...path, name]);
        }
      }
    }
  }
}
*/

export type InputObjectFieldBakedResolver<TParent = any> = (
  parent: TParent,
  val: unknown,
) => any;
export type InputObjectFieldApplyResolver<TParent = any> = (
  parent: TParent,
  val: unknown,
) => void;
export type InputObjectTypeInputResolver = (val: unknown) => any;

export type ApplyableExecutableStep<
  TArg = any,
  TData = any,
> = ExecutableStep<TData> & {
  apply($apply: ExecutableStep<(arg: TArg) => void>): void;
};

export function isApplyableStep<TArg = any, TData = any>(
  s: ExecutableStep<TData>,
): s is ApplyableExecutableStep<TArg, TData> {
  return typeof (s as any).apply === "function";
}
