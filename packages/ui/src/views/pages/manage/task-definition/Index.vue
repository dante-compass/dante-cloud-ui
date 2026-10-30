<template>
  <div class="q-gutter-y-md">
    <search v-model="conditions"></search>
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
      @request="findItems"
    >
      <template #body-cell-taskType="props">
        <q-td key="taskType" :props="props">
          <q-chip v-if="props.row.taskType" color="teal">
            {{ getDictionaryItemDisplay('TaskType', props.row.taskType) }}
          </q-chip>
        </q-td>
      </template>

      <template #body-cell-backoff="props">
        <q-td key="backoff" :props="props">
          <q-chip v-if="props.row.backoff" color="cyan">
            {{ getDictionaryItemDisplay('Backoff', props.row.backoff) }}
          </q-chip>
        </q-td>
      </template>

      <template #body-cell-paused="props">
        <q-td key="paused" :props="props">
          <q-chip v-if="props.row.paused" color="error" dense outline>已暂停</q-chip>
          <q-chip v-else color="success" dense outline>已暂停</q-chip>
        </q-td>
      </template>

      <template #body-cell-actions="props">
        <q-td key="actions" :props="props">
          <h-action-button
            :color="props.row.paused ? 'mdi-play' : 'mdi-pause'"
            :icon="props.row.paused ? 'success' : 'error'"
            :tooltip="props.row.paused ? '恢复' : '暂停'"
            @click="toggle(props.row)"
          ></h-action-button>
          <h-action-edit-button @click="toEdit(props.row)"></h-action-edit-button>
          <h-action-delete-button
            v-if="!props.row.reserved"
            @click="deleteItemById(props.row[rowKey])"
          ></h-action-delete-button>
        </q-td>
      </template>
    </h-table>
  </div>
</template>

<script setup lang="ts">
import type { HttpResult } from '@herodotus/core';
import type { TaskDefinitionEntity, TaskDefinitionConditions, TaskDefinitionProps } from '@herodotus/api';
import type { QTableColumnProps } from '@/composables/declarations';

import { toast } from '@herodotus/core';
import { useTable, useDateTime, useDictionary } from '@/composables/hooks';
import { API, PAGE_NAME } from '@/configurations';

import Search from './Search.vue';

defineOptions({ name: PAGE_NAME.TASK_DEFINITION, components: { Search } });

const headers: QTableColumnProps = [
  { name: 'serviceId', field: 'serviceId', align: 'left', label: '服务ID' },
  { name: 'taskId', field: 'taskId', align: 'left', label: '任务ID' },
  { name: 'taskName', field: 'taskName', align: 'center', label: '任务名称' },
  { name: 'taskType', field: 'taskType', align: 'center', label: '任务类型' },
  { name: 'timezone', field: 'timezone', align: 'center', label: '指定时区' },
  {
    name: 'interval',
    field: 'interval',
    align: 'center',
    label: '执行间隔',
    format: (value) => humanize(value),
  },
  {
    name: 'initialDelay',
    field: 'initialDelay',
    align: 'center',
    label: '初始延迟',
    format: (value) => humanize(value),
  },
  {
    name: 'timeout',
    field: 'timeout',
    align: 'center',
    label: '超时时间',
    format: (value) => humanize(value),
  },
  { name: 'methodName', field: 'methodName', align: 'center', label: '方法名称' },
  {
    name: 'retryInterval',
    field: 'retryInterval',
    align: 'center',
    label: '重试间隔',
    format: (value) => humanize(value),
  },
  { name: 'backoff', field: 'backoff', align: 'center', label: '退避策略' },
  {
    name: 'maxInterval',
    field: 'maxInterval',
    align: 'center',
    label: '重试间隔',
    format: (value) => humanize(value),
  },
  { name: 'paused', field: 'paused', align: 'center', label: '是否暂停' },
  { name: 'updateBy', field: 'updateBy', align: 'center', label: '最后修改人' },
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

const selected = ref([]);
const rowKey: TaskDefinitionProps = 'taskId';

const { defaultFormat, humanize } = useDateTime();
const { getDictionaryItemDisplay } = useDictionary('TaskType', 'Backoff');
const {
  tableRows,
  totalPages,
  pagination,
  loading,
  conditions,
  toEdit,
  toCreate,
  toAuthorize,
  findItems,
  deleteItemById,
} = useTable<TaskDefinitionConditions, TaskDefinitionEntity>(API.core.taskDefinition(), PAGE_NAME.TASK_DEFINITION);

const toggle = (item: TaskDefinitionEntity) => {
  API.core
    .taskDefinition()
    .toggle(item)
    .then((response) => {
      const result = response as HttpResult<TaskDefinitionEntity>;
      if (result.message) {
        toast.success(result.message);
      } else {
        toast.success('操作成功');
      }
    })
    .catch((error) => {
      toast.error('操作失败');
    });
};
</script>
