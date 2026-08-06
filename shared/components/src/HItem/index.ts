import type { App } from "vue";

import HLabelItem from "./HLabelItem.vue";

HLabelItem.install = (app: App): void => {
  app.component(HLabelItem.name as string, HLabelItem);
};

export { HLabelItem };
