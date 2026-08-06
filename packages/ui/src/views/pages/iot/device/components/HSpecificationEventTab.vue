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
    <template #item.identity="{ value }">
      <v-chip v-if="value" density="compact" rounded="lg" color="orange" label>
        {{ getDictionaryItemDisplay('EventType', value) }}
      </v-chip>
    </template>
  </h-data-table>
</template>

<script setup lang="ts">
import type { TslFunctionProps } from '@herodotus/api';
import type { VDataTableHeaders } from '@/composables/declarations';

import { useDictionary } from '@/composables/hooks';
import { useTslFunctionTable } from '../../composables/hooks';

defineOptions({ name: 'HSpecificationEventTab' });

interface Props {
  productId: string;
  productKey: string;
  deviceName: string;
}

const props = defineProps<Props>();

const { loading, pageNumber, pageSize, tableRows, totalPages, totalItems, findEventsByPage } = useTslFunctionTable();
const { getDictionaryItemDisplay } = useDictionary('EventType');

const headers = ref([
  { key: 'identifier', align: 'center', title: '事件标识符' },
  { key: 'name', align: 'center', title: '事件名称' },
  { key: 'eventType', align: 'center', title: '事件类型' },
  { key: 'actions', align: 'center', title: '操作' },
]) as Ref<Array<VDataTableHeaders>>;

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
