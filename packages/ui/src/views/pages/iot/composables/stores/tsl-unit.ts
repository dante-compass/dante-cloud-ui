import type { TslUnitEntity } from "@herodotus/api";

import { defineStore } from "pinia";
import { isEmpty } from "lodash-es";

import { API } from "@/configurations";

export const useIotTslUnitStore = defineStore("IotTslUnit", {
  state: () => ({
    items: [] as TslUnitEntity[],
  }),

  getters: {
    // 获取所有图标
    getAllItems(): TslUnitEntity[] {
      return this.items;
    },
  },

  actions: {
    // 初始化物模型单位数据
    fetchAllUnit() {
      if (isEmpty(this.items)) {
        API.core
          .iotTslUnit()
          .fetchAll()
          .then((result) => {
            this.items = result.data;
          });
      }
    },

    // 搜索图标
    search(query: string): TslUnitEntity[] {
      if (isEmpty(query.trim())) {
        return this.items;
      }

      return this.items.filter((v) => v.name.match(query));
    },
  },
});
