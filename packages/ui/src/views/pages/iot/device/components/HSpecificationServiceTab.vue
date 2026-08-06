<template>
  <div>
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
      <template #item.actions="{ item }">
        <h-action-button tooltip="调用服务" icon="mdi-function" @click="invoke(item)"></h-action-button>
      </template>
    </h-data-table>
    <h-device-service-dialog
      v-model="openDialog"
      :product-key="productKey"
      :device-name="deviceName"
      :identifier="identifier"
      :arguments="entities"
    ></h-device-service-dialog>
  </div>
</template>

<script setup lang="ts">
import type { TslFunctionEntity, TslFunctionProps, TslArgumentEntity } from '@herodotus/api';
import type { VDataTableHeaders } from '@/composables/declarations';

import { useTslFunctionTable } from '../../composables/hooks';

import HDeviceServiceDialog from './HDeviceServiceDialog.vue';

defineOptions({ name: 'HSpecificationPropertyTab', components: { HDeviceServiceDialog } });

interface Props {
  productId: string;
  productKey: string;
  deviceName: string;
}

const props = defineProps<Props>();

const { loading, pageNumber, pageSize, tableRows, totalPages, totalItems, findServicesByPage } = useTslFunctionTable();

const headers = ref([
  { key: 'identifier', align: 'center', title: '服务标识符' },
  { key: 'name', align: 'center', title: '服务名称' },
  { key: 'actions', align: 'center', title: '操作' },
]) as Ref<Array<VDataTableHeaders>>;

const rowKey: TslFunctionProps = 'id';

const entities = ref([]) as Ref<TslArgumentEntity[]>;
const identifier = shallowRef('');
const openDialog = shallowRef(false);

watch(
  () => props.productId,
  (newValue) => {
    findServicesByPage(newValue);
  },
);

const fetchItems = () => {
  findServicesByPage(props.productId);
};

const invoke = (item: TslFunctionEntity) => {
  entities.value = item.arguments.serviceInputData;
  identifier.value = item.identifier;
  openDialog.value = true;
};
</script>
