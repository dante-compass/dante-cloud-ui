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

    <template #item.superUser="{ value }">
      <h-column-boolean :value="value"></h-column-boolean>
    </template>

    <template #item.actions="{ item }">
      <h-action-authorize-button tooltip="配置权限" @click="toAuthorize(item)"></h-action-authorize-button>
      <h-action-delete-button v-if="!item.reserved" @click="deleteItemById(item[rowKey])"></h-action-delete-button>
    </template>
  </h-data-table>
</template>

<script setup lang="ts">
import type { MqttAccountEntity, MqttAccountConditions, MqttAccountProps } from "@herodotus/api";
import type { VDataTableHeaders } from "@/composables/declarations";

import { useTable, useDateTime } from "@/composables/hooks";
import { API, PAGE_NAME } from "@/configurations";

import Search from "./Search.vue";

defineOptions({ name: PAGE_NAME.THINGS_MQTT_ACCOUNT, components: { Search } });

const headers = ref([
  { key: "clientId", align: "center", title: "Mqtt客户端ID" },
  { key: "username", align: "center", title: "Mqtt用户名" },
  { key: "superUser", align: "center", title: "是否为超级用户" },
  { key: "description", align: "center", title: "备注" },
  { key: "updateBy", align: "center", title: "最后修改人" },
  { key: "updateTime", align: "center", title: "修改时间", value: (item) => defaultFormat(item.updateTime) },
  { key: "reserved", align: "center", title: "保留数据" },
  { key: "status", align: "center", title: "状态" },
  { key: "actions", align: "center", title: "操作" },
]) as Ref<Array<VDataTableHeaders>>;

const rowKey: MqttAccountProps = "id";

const { defaultFormat } = useDateTime();
const {
  loading,
  pageNumber,
  pageSize,
  tableRows,
  totalPages,
  totalItems,
  conditions,
  toAuthorize,
  deleteItemById,
  findItems,
} = useTable<MqttAccountConditions, MqttAccountEntity>(API.core.iotMqttAccount(), PAGE_NAME.THINGS_MQTT_ACCOUNT);
</script>
