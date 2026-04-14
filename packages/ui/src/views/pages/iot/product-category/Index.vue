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
    status
    reserved
    @request="findItems"
  >
    <template #top-left>
      <h-button color="primary" label="新建产品品类" @click="toCreate" />
    </template>

    <template #body-cell-actions="props">
      <q-td key="actions" :props="props">
        <h-edit-button @click="toEdit(props.row)"></h-edit-button>
        <h-delete-button v-if="!props.row.reserved" @click="deleteItemById(props.row[rowKey])"></h-delete-button>
      </q-td>
    </template>
  </h-table>
</template>

<script setup lang="ts">
import type { ProductCategoryEntity, ProductCategoryConditions, ProductCategoryProps } from "@herodotus/api";
import type { QTableColumnProps } from "@/composables/declarations";

import { useTable } from "@/composables/hooks";
import { CONSTANTS, API } from "@/configurations";
import { HDeleteButton, HEditButton, HTable } from "@/components";

defineOptions({
  name: CONSTANTS.ComponentName.IOT_PRODUCT_CATEGORY,
  components: {
    HDeleteButton,
    HEditButton,
    HTable,
  },
});

const { tableRows, totalPages, pagination, loading, toEdit, toCreate, findItems, deleteItemById } = useTable<
  ProductCategoryEntity,
  ProductCategoryConditions
>(API.core.iotProductCategory(), CONSTANTS.ComponentName.IOT_PRODUCT_CATEGORY);

const selected = ref([]);
const rowKey: ProductCategoryProps = "id";

const columns: QTableColumnProps = [
  { name: "id", field: "id", align: "center", label: "产品品类ID" },
  { name: "name", field: "name", align: "center", label: "产品品类名称" },
  { name: "reserved", field: "reserved", align: "center", label: "保留数据" },
  { name: "status", field: "status", align: "center", label: "状态" },
  { name: "actions", field: "actions", align: "center", label: "操作" },
];
</script>
