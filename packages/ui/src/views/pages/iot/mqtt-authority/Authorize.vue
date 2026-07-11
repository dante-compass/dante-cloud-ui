<template>
  <h-authorize-layout :title="title" :overlay="overlay">
    <q-table
      :rows="tableRows"
      :columns="columns"
      :row-key="rowKey"
      selection="multiple"
      v-model:selected="selectedItems"
      v-model:pagination="pagination"
      :rows-per-page-options="[0]"
      :loading="loading"
      class="q-mr-md"
    ></q-table>

    <template #right>
      <h-authorize-list
        v-model="selectedItems"
        prepend-title="name"
        append-title="action"
        :row-key="rowKey"
        class="q-ml-md"
        @save="onSave()"
      ></h-authorize-list>
    </template>
  </h-authorize-layout>
</template>

<script setup lang="ts">
import type {
  MqttAuthorityEntity,
  MqttCategoryEntity,
  MqttCategoryConditions,
  MqttCategoryProps,
} from "@herodotus/api";
import type { QTableColumnProps } from "@/composables/declarations";

import { useTableItem, useTable } from "@/composables/hooks";
import { API, CONSTANTS } from "@/configurations";

defineOptions({ name: "ThingsMqttAuthorityAuthorize" });

const { editedItem, overlay, title, assign } = useTableItem<MqttAuthorityEntity>(API.core.iotMqttAuthority());
const { tableRows, totalPages, pagination, loading } = useTable<MqttCategoryConditions, MqttCategoryEntity>(
  API.core.iotMqttCategory(),
  ComponentName.THINGS_MQTT_CATEGORY,
  true,
);

const selectedItems = ref([]) as Ref<Array<MqttCategoryEntity>>;
const rowKey: MqttCategoryProps = "id";

const columns: QTableColumnProps = [
  { name: "name", field: "name", align: "center", label: "主题类别名称" },
  { name: "area", field: "area", align: "center", label: "主题使用区域" },
  { name: "action", field: "action", align: "center", label: "主题操作类型" },
  { name: "purpose", field: "purpose", align: "center", label: "主题用途" },
];

onMounted(() => {
  selectedItems.value = editedItem.value.categories;
});

const onSave = () => {
  let id = editedItem.value.id;
  let categories = selectedItems.value.map((item) => item[rowKey]);
  assign({ id: id, categories: categories });
};
</script>
