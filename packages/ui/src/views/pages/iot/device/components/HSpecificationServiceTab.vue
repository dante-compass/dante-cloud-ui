<template>
  <div>
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
      <template #item.actions="{ item }">
        <h-action-button tooltip="调用服务" icon="mdi-function" @click="invoke(item)"></h-action-button>
      </template>
    </h-table>
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
import type { QTableColumnProps, HttpResult } from '@/composables/declarations';

import { useTslFunctionTable } from '../../composables/hooks';

import HDeviceServiceDialog from './HDeviceServiceDialog.vue';

defineOptions({ name: 'HSpecificationPropertyTab', components: { HDeviceServiceDialog } });

interface Props {
  productId: string;
  productKey: string;
  deviceName: string;
}

const props = defineProps<Props>();

const { tableRows, totalPages, pagination, loading, findServicesByPage } = useTslFunctionTable();

const headers: QTableColumnProps = [
  { name: 'identifier', field: 'identifier', align: 'center', label: '服务标识符' },
  { name: 'name', field: 'name', align: 'center', label: '服务名称' },
  { name: 'actions', field: 'actions', align: 'center', label: '操作' },
];

const selected = ref([]);
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
