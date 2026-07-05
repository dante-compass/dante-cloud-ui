<template>
  <div class="q-gutter-y-md">
    <search v-model="conditions"></search>
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
        <h-button color="primary" label="新建主题权限" @click="toCreate" />
      </template>

      <template #body-cell-action="props">
        <q-td key="action" :props="props">
          {{ getDictionaryItemDisplay("Action", props.row.action) }}
        </q-td>
      </template>

      <template #body-cell-qos="props">
        <q-td key="qos" :props="props">
          {{ getDictionaryItemDisplay("Qos", props.row.qos) }}
        </q-td>
      </template>

      <template #body-cell-permission="props">
        <q-td key="permission" :props="props">
          {{ getDictionaryItemDisplay("Permission", props.row.permission) }}
        </q-td>
      </template>

      <template #body-cell-retain="props">
        <q-td key="retain" :props="props">
          {{ getDictionaryItemDisplay("Retain", props.row.retain) }}
        </q-td>
      </template>

      <template #body-cell-actions="props">
        <q-td key="actions" :props="props">
          <h-dense-icon-button
            color="brown"
            icon="mdi-shield-key"
            tooltip="配置类别"
            @click="toAuthorize(props.row)"
          ></h-dense-icon-button>
          <h-edit-button @click="toEdit(props.row)"></h-edit-button>
          <h-delete-button v-if="!props.row.reserved" @click="deleteItemById(props.row[rowKey])"></h-delete-button>
        </q-td>
      </template>
    </h-table>
  </div>
</template>

<script setup lang="ts">
import type { MqttAuthorityEntity, MqttAuthorityConditions, MqttAuthorityProps } from "@herodotus/api";
import type { QTableColumnProps } from "@/composables/declarations";

import { useTable, useDateTime, useDictionary } from "@/composables/hooks";
import { API, CONSTANTS } from "@/configurations";

import Search from "./Search.vue";

defineOptions({ name: CONSTANTS.ComponentName.THINGS_MQTT_AUTHORITY, components: { Search } });

const columns: QTableColumnProps = [
  { name: "topic", field: "topic", align: "center", label: "主题" },
  { name: "action", field: "action", align: "center", label: "操作类型" },
  { name: "permission", field: "permission", align: "center", label: "权限" },
  { name: "qos", field: "qos", align: "center", label: "Qos" },
  { name: "retain", field: "retain", align: "center", label: "是否为保留数据" },
  { name: "description", field: "description", align: "center", label: "备注" },
  { name: "updateBy", field: "updateBy", align: "center", label: "最后修改人" },
  {
    name: "updateTime",
    field: "updateTime",
    align: "center",
    label: "修改时间",
    format: (value) => defaultFormat(value),
  },
  { name: "reserved", field: "reserved", align: "center", label: "保留数据" },
  { name: "status", field: "status", align: "center", label: "状态" },
  { name: "actions", field: "actions", align: "center", label: "操作" },
];

const selected = ref([]);
const rowKey: MqttAuthorityProps = "id";

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
} = useTable<MqttAuthorityConditions, MqttAuthorityEntity>(
  API.core.iotMqttAuthority(),
  CONSTANTS.ComponentName.THINGS_MQTT_AUTHORITY,
);
const { getDictionaryItemDisplay } = useDictionary("Permission", "Action", "Qos", "Retain");
</script>
