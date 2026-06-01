<template>
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
    @request="findItems"
  >
    <template #body-cell-actions="props">
      <q-td key="actions" :props="props">
        <h-delete-button @click="deleteItemById(props.row[deleteKey])"></h-delete-button>
      </q-td>
    </template>
  </h-table>
</template>

<script setup lang="ts">
import type {
  OAuth2PersistentTokenEntity,
  OAuth2PersistentTokenConditions,
  OAuth2PersistentTokenProps,
} from "@herodotus/api";
import type { QTableColumnProps } from "@/composables/declarations";

import { CONSTANTS, API } from "@/configurations";
import { useTable } from "@/composables/hooks";
import { moment } from "@herodotus/core";

import { HDeleteButton, HTable } from "@/components";

defineOptions({
  name: CONSTANTS.ComponentName.OAUTH2_PERSISTENT,

  components: {
    HDeleteButton,
    HTable,
  },
});

const { tableRows, totalPages, pagination, loading, findItems, deleteItemById } = useTable<
  OAuth2PersistentTokenConditions,
  OAuth2PersistentTokenEntity
>(API.core.oauth2PersistentToken(), CONSTANTS.ComponentName.OAUTH2_PERSISTENT, false, {
  direction: "DESC",
  properties: ["lastUsed"],
});

const selected = ref([]);
const rowKey: OAuth2PersistentTokenProps = "series";
const deleteKey: OAuth2PersistentTokenProps = "username";

const dateFormat = (date: string) => {
  if (date) {
    return moment(date).format("YYYY-MM-DD HH:mm:ss");
  } else {
    return "";
  }
};

const columns: QTableColumnProps = [
  { name: "series", field: "series", align: "center", label: "Remember Me ID" },
  { name: "username", field: "username", align: "center", label: "用户名" },
  { name: "token", field: "token", align: "center", label: "Token 值" },
  { name: "lastUsed", field: "lastUsed", align: "center", label: "上次使用时间", format: (value) => dateFormat(value) },
  { name: "actions", field: "actions", align: "center", label: "操作" },
];

onMounted(() => {
  pagination.value.sortBy = "accessTokenIssuedAt";
});
</script>
