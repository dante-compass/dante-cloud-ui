<template>
  <div class="q-gutter-y-md">
    <search v-model="conditions"></search>
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
      <template #body-cell-taskType="props">
        <q-td key="taskType" :props="props">
          <q-chip v-if="props.row.taskType" color="teal">
            {{ getDictionaryItemDisplay('TaskType', props.row.taskType) }}
          </q-chip>
        </q-td>
      </template>

      <template #body-cell-succeeded="props">
        <q-td key="succeeded" :props="props">
          <h-column-boolean :value="props.row.succeeded"></h-column-boolean>
        </q-td>
      </template>

      <template #body-cell-actions="props">
        <q-td key="actions" :props="props">
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
import type {
  TaskExecutionHistoryEntity,
  TaskExecutionHistoryConditions,
  TaskExecutionHistoryProps,
} from '@herodotus/api';
import type { QTableColumnProps } from '@/composables/declarations';

import { useTable, useDateTime, useDictionary } from '@/composables/hooks';
import { API, PAGE_NAME } from '@/configurations';

import Search from './Search.vue';

defineOptions({ name: PAGE_NAME.TASK_EXECUTION_HISTORY, components: { Search } });

const columns: QTableColumnProps = [
  { name: 'serviceId', field: 'serviceId', align: 'left', label: '服务ID' },
  { name: 'taskId', field: 'taskId', align: 'left', label: '任务ID' },
  { name: 'taskName', field: 'taskName', align: 'center', label: '任务名称' },
  { name: 'taskType', field: 'taskType', align: 'center', label: '任务类型' },
  {
    name: 'startTime',
    field: 'startTime',
    align: 'center',
    label: '开始时间',
    format: (value) => defaultFormat(value),
  },
  { name: 'endTime', field: 'endTime', align: 'center', label: '结束时间', format: (value) => defaultFormat(value) },
  { name: 'duration', field: 'duration', align: 'center', label: '执行耗时', format: (value) => humanize(value) },
  { name: 'succeeded', field: 'succeeded', align: 'center', label: '是否成功' },
  { name: 'errorMessage', field: 'errorMessage', align: 'center', label: '错误信息' },
  {
    name: 'updateTime',
    field: 'updateTime',
    align: 'center',
    label: '修改时间',
  },
  { name: 'reserved', field: 'reserved', align: 'center', label: '保留数据' },
  { name: 'status', field: 'status', align: 'center', label: '状态' },
  { name: 'actions', field: 'actions', align: 'center', label: '操作' },
];

const selected = ref([]);
const rowKey: TaskExecutionHistoryProps = 'executionId';

const { defaultFormat, humanize } = useDateTime();
const { getDictionaryItemDisplay } = useDictionary('TaskType');
const { tableRows, totalPages, pagination, loading, conditions, findItems, deleteItemById } = useTable<
  TaskExecutionHistoryConditions,
  TaskExecutionHistoryEntity
>(API.core.taskExecutionHistory(), PAGE_NAME.TASK_EXECUTION_HISTORY);
</script>
