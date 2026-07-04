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
import type { MqttAccountEntity, MqttCategoryEntity, MqttCategoryConditions, MqttCategoryProps } from "@herodotus/api";
import type { QTableColumnProps } from "@/composables/declarations";

import { useTableItem, useTable } from "@/composables/hooks";
import { API, PAGE_NAME } from "@/configurations";

defineOptions({ name: "ThingsMqttAccountAuthorize" });

const { editedItem, overlay, title, assign } = useTableItem<MqttAccountEntity>(API.core.iotMqttAccount());
const { loading, pageNumber, pageSize, tableRows, totalItems, findItems } = useTable<
  MqttCategoryConditions,
  MqttCategoryEntity
>(API.core.iotMqttCategory(), PAGE_NAME.THINGS_MQTT_CATEGORY, true);

const selectedItems = ref([]) as Ref<Array<MqttCategoryEntity>>;
const rowKey: MqttCategoryProps = "id";

const headers = ref([
  { key: "name", align: "center", title: "主题类别名称" },
  { key: "area", align: "center", title: "主题使用区域" },
  { key: "action", align: "center", title: "主题操作类型" },
  { key: "purpose", align: "center", title: "主题用途" },
]) as Ref<Array<VDataTableHeaders>>;

onMounted(() => {
  selectedItems.value = editedItem.value.categories;
});

const onSave = () => {
  let id = editedItem.value.id;
  let categories = selectedItems.value.map((item) => item[rowKey]);
  assign({ id: id, categories: categories });
};
</script>
