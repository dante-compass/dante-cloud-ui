<template>
  <q-select
    v-model="selectedValue"
    :options="options"
    :loading="loading"
    :option-label="(item) => (item === null ? 'Null value' : item.name + ' / ' + item.symbol)"
    outlined
    @virtual-scroll="onScroll"
    v-bind="$attrs"
  >
    <template v-slot:option="scope">
      <q-item v-bind="scope.itemProps">
        <q-item-section>
          <q-item-label>{{ scope.opt.name + " / " + scope.opt.symbol }}</q-item-label>
        </q-item-section>
      </q-item>
    </template>
  </q-select>
</template>

<script setup lang="ts">
import type { QSelect, QSelectProps } from "@/composables/declarations";
import type { Page } from "@herodotus/core";
import type { TslUnitEntity, TslUnitConditions } from "@herodotus/api";

import { useBaseTable } from "@/composables/hooks";
import { isEmpty } from "lodash-es";
import { CONSTANTS, API } from "@/configurations";

defineOptions({
  name: "HUnitSelect",
});

const selectedValue = defineModel<TslUnitEntity | null>();

const { loading, tableRows, totalPages, showLoading, hideLoading } = useBaseTable<TslUnitEntity, TslUnitConditions>(
  CONSTANTS.ComponentName.IOT_TSL_UNIT,
  "updateTime",
  false,
);

const options = ref<Array<TslUnitEntity>>([]);

const nextPage = ref<number>(2);

const setData = (data: Page<TslUnitEntity>) => {
  if (data) {
    tableRows.value = data.content;
    totalPages.value = data.totalPages;
  } else {
    tableRows.value = [];
    totalPages.value = 0;
  }
};

const findItemsByPage = (pageNumber = 1, pageSize = 10): Promise<void> => {
  return new Promise((resolve, reject) => {
    API.core
      .iotTslUnit()
      .fetchByPage(
        {
          pageNumber: pageNumber - 1,
          pageSize: pageSize,
        },
        {},
      )
      .then((result) => {
        const data = result.data as Page<TslUnitEntity>;
        setData(data);
        resolve();
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const onScroll: QSelectProps["onVirtualScroll"] = ({ index, from, to, ref }) => {
  const lastIndex = options.value.length - 1;

  if (loading.value !== true && nextPage.value <= totalPages.value && to === lastIndex) {
    showLoading();
    findItemsByPage(nextPage.value).then(() => {
      options.value.push(...tableRows.value);
      setTimeout(() => {
        nextPage.value++;
        nextTick(() => {
          ref.refresh();
          hideLoading();
        });
      }, 1000);
    });
  }
};

onBeforeMount(async () => {
  await findItemsByPage();
  nextTick(() => {
    if (isEmpty(options.value)) {
      options.value.push(...tableRows.value);
    }
  });
});
</script>
