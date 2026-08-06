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
    :show-select="false"
    select-strategy="single"
    disable-sort
    @update:options="fetchItems"
  >
    <template #item.type="{ item }">
      <v-chip v-if="getPropertyType(item)" density="compact" rounded="lg" color="purple" label>
        {{ getPropertyType(item) }}
      </v-chip>
    </template>
  </h-data-table>
</template>

<script setup lang="ts">
import type { TslFunctionProps } from '@herodotus/api';
import type { VDataTableHeaders } from '@/composables/declarations';

import { useDateTime } from '@/composables/hooks';
import { useTslFunctionTable } from '../../composables/hooks';

defineOptions({ name: 'HSpecificationPropertyTab' });

interface Props {
  productId: string;
  productKey: string;
  deviceName: string;
}

const props = defineProps<Props>();

const { loading, pageNumber, pageSize, tableRows, totalPages, totalItems, findPropertiesByPage, getPropertyType } =
  useTslFunctionTable();
const { defaultFormat } = useDateTime();

const headers = ref([
  { key: 'identifier', align: 'center', title: '属性标识符' },
  { key: 'name', align: 'center', title: '属性名称' },
  { key: 'type', align: 'center', title: '数据类型' },
  { key: 'updateTime', align: 'center', title: '更新时间', value: (item) => defaultFormat(item.updateTime) },
  { key: 'actions', align: 'center', title: '操作' },
]) as Ref<Array<VDataTableHeaders>>;

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
