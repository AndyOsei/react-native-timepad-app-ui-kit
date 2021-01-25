import { createBox, createText } from "@shopify/restyle";

import { Theme } from "./Theme";

export { theme } from "./Theme";

export { default as Icon } from "./Icon";
export { default as LoadAsset } from "./LoadAssets";

export const Box = createBox<Theme>();
export const Text = createText<Theme>();
