<template>
  <div class="q-gutter-y-md">
    <search v-model:conditions="conditions"></search>
    <h-table
      :rows="tableRows"
      :columns="columns"
      :row-key="rowKey"
      selection="single"
      v-model:selected="selected"
      v-model:pagination="pagination"
      v-model:pageNumber="pagination.page"
      :totalPages="totalPages"
      :loading="loading"
      status
      reserved
      @request="findItems"
    >
      <template #top-left>
        <h-button color="primary" label="新建主题类别" @click="toCreate" />
      </template>

      <template #body-cell-area="props">
        <q-td key="area" :props="props">
          {{ getDictionaryItemDisplay("Area", props.row.area) }}
        </q-td>
      </template>

      <template #body-cell-action="props">
        <q-td key="action" :props="props">
          {{ getDictionaryItemDisplay("Action", props.row.action) }}
        </q-td>
      </template>

      <template #body-cell-purpose="props">
        <q-td key="purpose" :props="props">
          {{ getDictionaryItemDisplay("Purpose", props.row.purpose) }}
        </q-td>
      </template>

      <template #body-cell-actions="props">
        <q-td key="actions" :props="props">
          <h-edit-button @click="toEdit(props.row)"></h-edit-button>
          <h-delete-button v-if="!props.row.reserved" @click="deleteItemById(props.row[rowKey])"></h-delete-button>
        </q-td>
      </template>
    </h-table>
  </div>
</template>

<script setup lang="ts">
import type { MqttCategoryEntity, MqttCategoryConditions, MqttCategoryProps } from "@herodotus/api";
import type { QTableColumnProps } from "@/composables/declarations";

import { useTable, useDateTime, useDictionary } from "@/composables/hooks";
import { API, CONSTANTS } from "@/configurations";

import Search from "./Search.vue";

defineOptions({ name: CONSTANTS.ComponentName.THINGS_MQTT_CATEGORY, components: { Search } });

const columns: QTableColumnProps = [
  { name: "name", field: "name", align: "center", label: "主题类别名称" },
  { name: "area", field: "area", align: "center", label: "主题使用区域" },
  { name: "action", field: "action", align: "center", label: "主题操作类型" },
  { name: "purpose", field: "purpose", align: "center", label: "主题用途" },
  { name: "description", field: "description", align: "center", label: "备注" },
  { name: "updateBy", field: "updateBy", align: "center", label: "最后修改人" },
  {
    name: "updateTime",
    field: "updateTime",
    align: "center",
    label: "修改时间",
    format: (item) => defaultFormat(item.updateTime),
  },
  { name: "reserved", field: "reserved", align: "center", label: "保留数据" },
  { name: "status", field: "status", align: "center", label: "状态" },
  { name: "actions", field: "actions", align: "center", label: "操作" },
];

const selected = ref([]);
const rowKey: MqttCategoryProps = "id";

const { defaultFormat } = useDateTime();
const {
  tableRows,
  totalPages,
  pagination,
  loading,
  conditions,
  toEdit,
  toCreate,
  toAuthorize,
  findItems,
  deleteItemById,
} = useTable<MqttCategoryConditions, MqttCategoryEntity>(
  API.core.iotMqttCategory(),
  CONSTANTS.ComponentName.THINGS_MQTT_CATEGORY,
);
const { getDictionaryItemDisplay } = useDictionary("Area", "Action", "Purpose");
</script>
