<template>
  <h-table
    :rows="tableRows"
    :columns="headers"
    :row-key="rowKey"
    selection="single"
    v-model:selected="selected"
    v-model:pagination="pagination"
    v-model:pageNumber="pagination.page"
    :totalPages="totalPages"
    :loading="loading"
    status
    reserved
    @request="fetchItems"
  >
    <template #body-cell-identity="props">
      <q-td key="identity" :props="props">
        <q-chip v-if="props.row.identity" color="orange">
          {{ getDictionaryItemDisplay('EventType', props.row.identity) }}
        </q-chip>
      </q-td>
    </template>
  </h-table>
</template>

<script setup lang="ts">
import type { TslFunctionProps } from '@herodotus/api';
import type { QTableColumnProps, HttpResult } from '@/composables/declarations';

import { useDictionary } from '@/composables/hooks';
import { useTslFunctionTable } from '../../composables/hooks';

defineOptions({ name: 'HSpecificationEventTab' });

interface Props {
  productId: string;
  productKey: string;
  deviceName: string;
}

const props = defineProps<Props>();

const { tableRows, totalPages, pagination, loading, findEventsByPage } = useTslFunctionTable();
const { getDictionaryItemDisplay } = useDictionary('EventType');

const headers: QTableColumnProps = [
  { name: 'identifier', field: 'identifier', align: 'center', label: '事件标识符' },
  { name: 'name', field: 'name', align: 'center', label: '事件名称' },
  { name: 'eventType', field: 'eventType', align: 'center', label: '事件类型' },
  { name: 'actions', field: 'actions', align: 'center', label: '操作' },
];

const selected = ref([]);
const rowKey: TslFunctionProps = 'id';

watch(
  () => props.productId,
  (newValue) => {
    findEventsByPage(newValue);
  },
  { immediate: true },
);

const fetchItems = () => {
  findEventsByPage(props.productId);
};
</script>
