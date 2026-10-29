<template>
  <div>
    <h-text-field
      v-model="editedItem.expression"
      label="CRON 表达式"
      placeholder="请输入 CRON 表达式"
      :rules="[
        (v: string) => !!v || 'CRON 表达式不能为空',
        (v: string) => (v && v.length >= 5) || 'CRON 表达式至少5个字符',
      ]"
    ></h-text-field>
    <v-text-field v-model="editedItem.timezone" label="指定时区" placeholder="请输入任务名称"></v-text-field>
    <h-label text="最大执行时间"></h-label>
    <h-duration v-model="editedItem.timeout"></h-duration>
    <h-retry-policy-panel v-model="editedItem"></h-retry-policy-panel>
  </div>
</template>

<script setup lang="ts">
import type { TaskDefinitionEntity } from '@herodotus/api';

import HRetryPolicyPanel from './HRetryPolicyPanel.vue';

defineOptions({ name: 'HCronTaskPanel', components: { HRetryPolicyPanel } });

const editedItem = defineModel<TaskDefinitionEntity>({
  default: () => ({}) as TaskDefinitionEntity,
});
</script>
