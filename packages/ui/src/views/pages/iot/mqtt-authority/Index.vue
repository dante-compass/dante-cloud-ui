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
      <v-btn prepend-icon="mdi-plus" text="新建主题权限" @click="toCreate"></v-btn>
    </template>

    <template #item.action="{ value }">
      <v-chip v-if="value" density="compact" rounded="lg" color="cyan" label>
        {{ getDictionaryItemDisplay("Action", value) }}
      </v-chip>
    </template>

    <template #item.qos="{ value }">
      <v-chip v-if="value" density="compact" rounded="lg" color="purple" label>
        {{ getDictionaryItemDisplay("Qos", value) }}
      </v-chip>
    </template>

    <template #item.permission="{ value }">
      <v-chip v-if="value" density="compact" rounded="lg" color="teal" label>
        {{ getDictionaryItemDisplay("Permission", value) }}
      </v-chip>
    </template>

    <template #item.retain="{ value }">
      <v-chip v-if="value" density="compact" rounded="lg" color="orange" label>
        {{ getDictionaryItemDisplay("Retain", value) }}
      </v-chip>
    </template>

    <template #item.actions="{ item }">
      <h-action-authorize-button tooltip="配置权限" @click="toAuthorize(item)"></h-action-authorize-button>
      <h-action-edit-button @click="toEdit(item)"></h-action-edit-button>
      <h-action-delete-button v-if="!item.reserved" @click="deleteItemById(item[rowKey])"></h-action-delete-button>
    </template>
  </h-data-table>
</template>

<script setup lang="ts">
import type { MqttAuthorityEntity, MqttAuthorityConditions, MqttAuthorityProps } from "@herodotus/api";
import type { VDataTableHeaders } from "@/composables/declarations";

import { useTable, useDateTime, useDictionary } from "@/composables/hooks";
import { API, PAGE_NAME } from "@/configurations";

import Search from "./Search.vue";

defineOptions({ name: PAGE_NAME.THINGS_MQTT_AUTHORITY, components: { Search } });

const headers = ref([
  { key: "topic", align: "center", title: "主题" },
  { key: "action", align: "center", title: "操作类型" },
  { key: "permission", align: "center", title: "权限" },
  { key: "qos", align: "center", title: "Qos" },
  { key: "retain", align: "center", title: "是否为保留数据" },
  { key: "description", align: "center", title: "备注" },
  { key: "updateBy", align: "center", title: "最后修改人" },
  { key: "updateTime", align: "center", title: "修改时间", value: (item) => defaultFormat(item.updateTime) },
  { key: "reserved", align: "center", title: "保留数据" },
  { key: "status", align: "center", title: "状态" },
  { key: "actions", align: "center", title: "操作" },
]) as Ref<Array<VDataTableHeaders>>;

const rowKey: MqttAuthorityProps = "id";

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
  toAuthorize,
  deleteItemById,
  findItems,
} = useTable<MqttAuthorityConditions, MqttAuthorityEntity>(
  API.core.iotMqttAuthority(),
  PAGE_NAME.THINGS_MQTT_AUTHORITY,
);
const { getDictionaryItemDisplay } = useDictionary("Permission", "Action", "Qos", "Retain");
</script>
