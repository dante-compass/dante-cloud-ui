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
    <template #item.type="{ item }">
      <v-chip v-if="getPropertyType(item)" density="compact" rounded="lg" color="purple" label>
        {{ getPropertyType(item) }}
      </v-chip>
    </template>
  </h-table>
</template>

<script setup lang="ts">
import type { TslFunctionProps } from '@herodotus/api';
import type { QTableColumnProps, HttpResult } from '@/composables/declarations';

import { useDateTime } from '@/composables/hooks';
import { useTslFunctionTable } from '../../composables/hooks';

defineOptions({ name: 'HSpecificationPropertyTab' });

interface Props {
  productId: string;
  productKey: string;
  deviceName: string;
}

const props = defineProps<Props>();

const { tableRows, totalPages, pagination, loading, findPropertiesByPage, getPropertyType } = useTslFunctionTable();
const { defaultFormat } = useDateTime();

const headers: QTableColumnProps = [
  { name: 'identifier', field: 'identifier', align: 'center', label: '属性标识符' },
  { name: 'name', field: 'name', align: 'center', label: '属性名称' },
  { name: 'type', field: 'type', align: 'center', label: '数据类型' },
  {
    name: 'updateTime',
    field: 'updateTime',
    align: 'center',
    label: '更新时间',
    format: (value) => defaultFormat(value),
  },
  { name: 'actions', field: 'actions', align: 'center', label: '操作' },
];

const selected = ref([]);
const rowKey: TslFunctionProps = 'id';

watch(
  () => props.productId,
  (newValue) => {
    findPropertiesByPage(newValue);
  },
  { immediate: true },
);

const fetchItems = () => {
  findPropertiesByPage(props.productId);
};
</script>
