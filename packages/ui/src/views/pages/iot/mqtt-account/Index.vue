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
        <h-button color="primary" label="新建角色" @click="toCreate" />
      </template>

      <template #body-cell-superUser="props">
        <q-td key="superUser" :props="props">
          <h-boolean-column :value="props.row.superUser"></h-boolean-column>
        </q-td>
      </template>

      <template #body-cell-actions="props">
        <q-td key="actions" :props="props">
          <h-dense-icon-button
            color="brown"
            icon="mdi-shield-key"
            tooltip="配置权限"
            @click="toAuthorize(props.row)"
          ></h-dense-icon-button>
        </q-td>
      </template>
    </h-table>
  </div>
</template>

<script setup lang="ts">
import type { MqttAccountEntity, MqttAccountConditions, MqttAccountProps } from "@herodotus/api";
import type { QTableColumnProps } from "@/composables/declarations";

import { useTable, useDateTime } from "@/composables/hooks";
import { API, PAGE_NAME } from "@/configurations";

import Search from "./Search.vue";

defineOptions({ name: PAGE_NAME.THINGS_MQTT_ACCOUNT, components: { Search } });

const columns: QTableColumnProps = [
  { name: "clientId", field: "clientId", align: "center", label: "Mqtt客户端ID" },
  { name: "username", field: "username", align: "center", label: "Mqtt用户名" },
  { name: "superUser", field: "superUser", align: "center", label: "是否为超级用户" },
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
const rowKey: MqttAccountProps = "id";

const { defaultFormat } = useDateTime();
const { tableRows, totalPages, pagination, loading, conditions, toCreate, toAuthorize, findItems } = useTable<
  MqttAccountConditions,
  MqttAccountEntity
>(API.core.iotMqttAccount(), PAGE_NAME.THINGS_MQTT_ACCOUNT);
</script>
