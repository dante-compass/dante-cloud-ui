<template>
  <div>
    <h-divider label="重试策略"></h-divider>
    <h-text-field v-model.number="editedItem.maxAttempts" label="排序值" placeholder="请输入排序值" type="number" />
    <h-label text="重试间隔"></h-label>
    <h-duration v-model="editedItem.retryInterval"></h-duration>
    <h-dictionary-toggle v-model="editedItem.backoff" dictionary="Backoff" default-value="FIXED"></h-dictionary-toggle>
    <template v-if="isExponential">
      <h-label text="最大重试间隔"></h-label>
      <h-duration v-model="editedItem.maxInterval"></h-duration>
    </template>
  </div>
</template>

<script setup lang="ts">
import type { TaskDefinitionEntity } from '@herodotus/api';

defineOptions({ name: 'HRetryPolicyPanel' });

const editedItem = defineModel<TaskDefinitionEntity>({
  default: () => ({}) as TaskDefinitionEntity,
});

const isExponential = computed(() => {
  return editedItem.value.backoff === 'EXPONENTIAL';
});
</script>
