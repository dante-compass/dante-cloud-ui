<template>
  <q-list>
    <q-expansion-item label="查询条件：" default-opened>
      <q-card>
        <q-card-section>
          <h-row align="center" gutter="md" horizontal>
            <h-column :cols="2">
              <h-text-field
                v-model="conditions.serviceId"
                label="服务ID"
                debounce="1000"
                dense
                class="q-pb-none"
              ></h-text-field>
            </h-column>
            <h-column :cols="2">
              <h-text-field
                v-model="conditions.executionId"
                label="执行历史ID"
                debounce="1000"
                dense
                class="q-pb-none"
              ></h-text-field>
            </h-column>
            <h-column :cols="2">
              <h-text-field
                v-model="conditions.taskId"
                label="任务ID"
                debounce="1000"
                dense
                class="q-pb-none"
              ></h-text-field>
            </h-column>
            <h-column :cols="2">
              <h-text-field
                v-model="conditions.taskName"
                label="任务名称"
                debounce="1000"
                dense
                class="q-pb-none"
              ></h-text-field>
            </h-column>
            <h-column :cols="2">
              <h-dictionary-select
                v-model="conditions.taskType"
                dictionary="TaskType"
                label="任务类型"
                dense
                class="q-pb-none"
              ></h-dictionary-select>
            </h-column>
            <h-column auto>
              <h-button color="red" icon="mdi-broom" tooltip="清空" @click.stop="onClear()"></h-button>
            </h-column>
          </h-row>
        </q-card-section>
      </q-card>
    </q-expansion-item>
  </q-list>
</template>

<script setup lang="ts">
import type { TaskExecutionHistoryConditions } from '@herodotus/api';

defineOptions({ name: 'TaskExecutionHistoryCondition' });

const conditions = defineModel<TaskExecutionHistoryConditions>({
  default: () => ({}) as TaskExecutionHistoryConditions,
  required: true,
});

const onClear = () => {
  conditions.value = {} as TaskExecutionHistoryConditions;
};
</script>
