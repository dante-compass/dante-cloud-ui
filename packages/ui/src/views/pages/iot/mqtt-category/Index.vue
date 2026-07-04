<template>
  <h-data-table
    v-model:page-size="pageSize"
    v-model:page-number="pageNumber"
    v-model:total-pages="totalPages"
    v-model:total-items="totalItems"
    :headers="headers"
    :items="tableRows"
    :item-value="rowKey"
    :loading="loading"
    select-strategy="single"
    disable-sort
    @update:options="findItems"
  >
    <template #search>
      <search v-model="conditions"></search>
    </template>

    <template #control>
      <v-btn prepend-icon="mdi-plus" text="新建主题类别" @click="toCreate"></v-btn>
    </template>

    <template #item.area="{ value }">
      <v-chip v-if="value" density="compact" rounded="lg" color="orange" label>
        {{ getDictionaryItemDisplay("Area", value) }}
      </v-chip>
    </template>

    <template #item.action="{ value }">
      <v-chip v-if="value" density="compact" rounded="lg" color="cyan" label>
        {{ getDictionaryItemDisplay("Action", value) }}
      </v-chip>
    </template>

    <template #item.purpose="{ value }">
      <v-chip v-if="value" density="compact" rounded="lg" color="purple" label>
        {{ getDictionaryItemDisplay("Purpose", value) }}
      </v-chip>
    </template>

    <template #item.actions="{ item }">
      <h-action-edit-button @click="toEdit(item)"></h-action-edit-button>
      <h-action-delete-button v-if="!item.reserved" @click="deleteItemById(item[rowKey])"></h-action-delete-button>
    </template>
  </h-data-table>
</template>

<script setup lang="ts">
import type { MqttCategoryEntity, MqttCategoryConditions, MqttCategoryProps } from "@herodotus/api";
import type { VDataTableHeaders } from "@/composables/declarations";

import { useTable, useDateTime, useDictionary } from "@/composables/hooks";
import { API, PAGE_NAME } from "@/configurations";

import Search from "./Search.vue";

defineOptions({ name: PAGE_NAME.THINGS_MQTT_CATEGORY, components: { Search } });

const headers = ref([
  { key: "name", align: "center", title: "主题类别名称" },
  { key: "area", align: "center", title: "主题使用区域" },
  { key: "action", align: "center", title: "主题操作类型" },
  { key: "purpose", align: "center", title: "主题用途" },
  { key: "description", align: "center", title: "备注" },
  { key: "updateBy", align: "center", title: "最后修改人" },
  { key: "updateTime", align: "center", title: "修改时间", value: (item) => defaultFormat(item.updateTime) },
  { key: "reserved", align: "center", title: "保留数据" },
  { key: "status", align: "center", title: "状态" },
  { key: "actions", align: "center", title: "操作" },
]) as Ref<Array<VDataTableHeaders>>;

const rowKey: MqttCategoryProps = "id";

const { defaultFormat } = useDateTime();
const {
  loading,
  pageNumber,
  pageSize,
  tableRows,
  totalPages,
  totalItems,
  conditions,
  toEdit,
  toCreate,
  deleteItemById,
  findItems,
} = useTable<MqttCategoryConditions, MqttCategoryEntity>(API.core.iotMqttCategory(), PAGE_NAME.THINGS_MQTT_CATEGORY);
const { getDictionaryItemDisplay } = useDictionary("Area", "Action", "Purpose");
</script>
