<template>
  <h-authorize-form-layout :title="title" :overlay="overlay">
    <v-card rounded="lg">
      <v-data-table-server
        v-model="selectedItems"
        v-model:items-per-page="pageSize"
        v-model:page="pageNumber"
        :items-length="totalItems"
        :headers="headers"
        :items="tableRows"
        :item-value="rowKey"
        :item-selectable="rowKey"
        :loading="loading"
        show-select
        select-strategy="page"
        striped="even"
        hover
        hide-default-footer
        disable-sort
        return-object
        @update:options="findItems"
      ></v-data-table-server>
    </v-card>

    <template #right>
      <h-authorize-list
        v-model="selectedItems"
        prepend-title="name"
        append-title="action"
        :row-key="rowKey"
        @save="onSave()"
      ></h-authorize-list>
    </template>
  </h-authorize-form-layout>
</template>

<script setup lang="ts">
import type {
  MqttAuthorityEntity,
  MqttCategoryEntity,
  MqttCategoryConditions,
  MqttCategoryProps,
} from "@herodotus/api";
import type { VDataTableHeaders } from "@/composables/declarations";

import { useTableItem, useTable } from "@/composables/hooks";
import { API, PAGE_NAME } from "@/configurations";

defineOptions({ name: "ThingsMqttAuthorityAuthorize" });

const { editedItem, overlay, title, assign } = useTableItem<MqttAuthorityEntity>(API.core.iotMqttAuthority());
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
