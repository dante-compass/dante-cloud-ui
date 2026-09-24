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
      <h-button color="primary" icon="mdi-plus" label="新建资源" @click="toCreate" />
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
import type {
  OAuth2ResourceIndicatorEntity,
  OAuth2ResourceIndicatorConditions,
  OAuth2ResourceIndicatorProps,
} from '@herodotus/api';
import type { QTableColumnProps } from '@/composables/declarations';

import { PAGE_NAME, API } from '@/configurations';
import { useTable, useDateTime } from '@/composables/hooks';
import { HDeleteButton, HEditButton, HDenseIconButton, HTable } from '@/components';

defineOptions({
  name: PAGE_NAME.OAUTH2_RESOURCE_INDICATOR,
  components: { HDeleteButton, HEditButton, HDenseIconButton, HTable },
});

const columns: QTableColumnProps = [
  { name: 'indicatorName', field: 'indicatorName', align: 'center', label: '资源名称' },
  { name: 'indicatorValue', field: 'indicatorValue', align: 'center', label: '资源值' },
  { name: 'description', field: 'description', align: 'center', label: '备注' },
  {
    name: 'updateBy',
    field: 'updateBy',
    align: 'center',
    label: '最后修改人',
  },
  {
    name: 'updateTime',
    field: 'updateTime',
    align: 'center',
    label: '修改时间',
    format: (value) => defaultFormat(value),
  },
  { name: 'reserved', field: 'reserved', align: 'center', label: '保留数据' },
  { name: 'status', field: 'status', align: 'center', label: '状态' },
  { name: 'actions', field: 'actions', align: 'center', label: '操作' },
];

const rowKey: OAuth2ResourceIndicatorProps = 'indicatorId';

const selected = ref([]);

const { defaultFormat } = useDateTime();
const { tableRows, totalPages, pagination, loading, toEdit, toCreate, deleteItemById, findItems } = useTable<
  OAuth2ResourceIndicatorConditions,
  OAuth2ResourceIndicatorEntity
>(API.core.oauth2ResourceIndicator(), PAGE_NAME.OAUTH2_RESOURCE_INDICATOR);
</script>
