import type { LayerPlan } from "../LayerPlan";

let globalData_layerPlan: LayerPlan | null = null;
let globalData_polymorphicPaths: ReadonlySet<string> | null = null;

export function withGlobalLayerPlan<T>(
  layerPlan: LayerPlan,
  polymorphicPaths: ReadonlySet<string>,
  callback: () => T,
): T {
  const oldLayerPlan = globalData_layerPlan;
  globalData_layerPlan = layerPlan;
  const oldPolymorphicPaths = globalData_polymorphicPaths;
  globalData_polymorphicPaths = polymorphicPaths;
  try {
    return callback();
  } finally {
    globalData_layerPlan = oldLayerPlan;
    globalData_polymorphicPaths = oldPolymorphicPaths;
  }
}

export function currentLayerPlan(): LayerPlan {
  if (!globalData_layerPlan) {
    throw new Error(
      // Must only be called from inside `withGlobalLayerPlan`!
      "Now is not a valid time to call `currentLayerPlan`. This error typically occurs when you attempt to call a Grafast step function from outside of the planning lifecycle - it's important to note that Grafast plans must be resolved synchronously, so check for 'async' or 'setTimeout' or any location where a step function is called outside of a plan resolver. For more information, read about plan resolvers: https://grafast.org/grafast/plan-resolvers",
    );
  }
  return globalData_layerPlan;
}

export function currentPolymorphicPaths(): ReadonlySet<string> {
  if (!globalData_polymorphicPaths) {
    throw new Error(
      "GrafastInternalError<b0b05743-8b21-42c6-9b53-925013d88bd1>: currentPolymorphicPaths called out of turn; must only called within a withGlobalLayerPlan callback",
    );
  }
  return globalData_polymorphicPaths;
}
