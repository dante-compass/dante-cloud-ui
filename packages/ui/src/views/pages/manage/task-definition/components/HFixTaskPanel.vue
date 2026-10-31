<template>
  <div>
    <h-label text="任务执行间隔："></h-label>
    <h-duration v-model="editedItem.interval"></h-duration>
    <h-label text="延迟执行时间："></h-label>
    <h-duration v-model="editedItem.initialDelay"></h-duration>
    <h-label text="最大执行时间："></h-label>
    <h-duration v-model="editedItem.timeout"></h-duration>
    <h-retry-policy-panel v-model="editedItem"></h-retry-policy-panel>
  </div>
</template>

<script setup lang="ts">
import type { TaskDefinitionEntity } from '@herodotus/api';

import HRetryPolicyPanel from './HRetryPolicyPanel.vue';

defineOptions({ name: 'HFixTaskPanel', components: { HRetryPolicyPanel } });

const editedItem = defineModel<TaskDefinitionEntity>({
  default: () => ({}) as TaskDefinitionEntity,
});
</script>
