<template>
  <div class="q-gutter-y-md">
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
        <h-button color="primary" icon="mdi-plus" label="添加设备" @click="toCreate" />
      </template>

      <template #body-cell-product="props">
        <q-td key="product" :props="props">
          {{ props.row.product.productName }}
        </q-td>
      </template>

      <template #body-cell-connected="props">
        <q-td key="connected" :props="props">
          <h-dense-icon-button
            :color="props.row.connected ? 'positive' : 'warning'"
            :icon="props.row.connected ? 'mdi-access-point-network' : 'mdi-access-point-network-off'"
            :tooltip="props.row.connected ? '在线' : '离线'"
          ></h-dense-icon-button>
        </q-td>
      </template>

      <template #body-cell-activated="props">
        <q-td key="activated" :props="props">
          <q-chip
            square
            :icon="props.row.activated ? 'mdi-check-circle' : 'mdi-close-circle'"
            :color="props.row.activated ? 'positive' : 'red'"
            text-color="white"
            :label="props.row.activated ? '已激活' : '未激活'"
          ></q-chip>
        </q-td>
      </template>

      <template #body-cell-actions="props">
        <q-td key="actions" :props="props">
          <h-edit-button @click="toEdit(props.row)"></h-edit-button>
          <h-info-button @click="toInfo(props.row)"></h-info-button>
          <h-delete-button v-if="!props.row.reserved" @click="deleteItemById(props.row[rowKey])"></h-delete-button>
        </q-td>
      </template>
    </h-table>
  </div>
</template>

<script setup lang="ts">
import type { DeviceEntity, DeviceProps, DeviceConditions } from '@herodotus/api';
import type { QTableColumnProps } from '@/composables/declarations';

import { useTable, useDateTime } from '@/composables/hooks';
import { PAGE_NAME, API } from '@/configurations';

import { HDeleteButton, HEditButton, HTable, HDenseIconButton } from '@/components';

defineOptions({ name: PAGE_NAME.IOT_DEVICE, components: { HDeleteButton, HEditButton, HTable, HDenseIconButton } });

const {
  tableRows,
  totalPages,
  pagination,
  loading,
  toEdit,
  toCreate,
  toInfo,
  toAuthorize,
  findItems,
  deleteItemById,
  conditions,
} = useTable<DeviceConditions, DeviceEntity>(API.core.iotDevice(), PAGE_NAME.IOT_DEVICE);
const { defaultFormat } = useDateTime();

const selected = ref([]);
const rowKey: DeviceProps = 'id';

const columns: QTableColumnProps = [
  { name: 'deviceName', field: 'deviceName', align: 'center', label: '设备名称' },
  { name: 'product', field: 'product', align: 'center', label: '设备所属产品' },
  { name: 'clientId', field: 'clientId', align: 'center', label: 'Client ID' },
  { name: 'enabled', field: 'enabled', align: 'center', label: '启用/禁用' },
  { name: 'activated', field: 'activated', align: 'center', label: '是否激活' },
  { name: 'updateBy', field: 'updateBy', align: 'center', label: '最后修改人' },
  {
    name: 'updateTime',
    field: 'updateTime',
    align: 'center',
    label: '修改时间',
    format: (value) => defaultFormat(value),
  },
  { name: 'reserved', field: 'reserved', align: 'center', label: '保留数据' },
  { name: 'actions', field: 'actions', align: 'center', label: '操作' },
];
</script>
