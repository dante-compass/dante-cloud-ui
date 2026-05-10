import { defineStore } from "pinia";

import type { TslFunctionEntity, TslArgumentEntity } from "@herodotus/api";

import { isEmpty } from "lodash-es";

/**
 * Pinia Store 响应式
 *
 * 1. 直接访问使用 state 中的属性，例如：useStore.attr方式，就是响应式
 * 2. 使用 storeToRefs 包裹后，进行解构会具备响应式
 * 3. 使用 {XXX，XXX} = useStore，会丢失响应式
 */
export const useTslStore = defineStore("IotTsl", {
  state: () => ({
    functionEntity: {} as TslFunctionEntity,
    propertyAttribute: {} as TslArgumentEntity,
    dimension: "properties",
    output: {} as Record<string, TslArgumentEntity>,
    input: {} as Record<string, TslArgumentEntity>,
  }),

  actions: {
    setEntity(entity: TslFunctionEntity) {
      this.functionEntity = entity;
      if (!isEmpty(this.functionEntity.arguments)) {
        if (this.dimension === "properties") {
          this.propertyAttribute = this.functionEntity.arguments[0];
        } else {
          this.functionEntity.arguments.forEach((item) => {
            if (item.output) {
              this.output[item.id] = item;
            } else {
              this.input[item.id] = item;
            }
          });
        }
      }
    },
  },
});
