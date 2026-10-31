<template>
  <div>
    <h-divider label="重试策略"></h-divider>

    <h-switch v-model="enabled" :label="enabled ? '已开启重试策略' : '已关闭重试策略'"></h-switch>
    <template v-if="enabled">
      <h-text-field
        v-model.number="editedItem.maxAttempts"
        label="最大重试次数"
        placeholder="请输入最大重试次数"
        type="number"
      />
      <h-label text="重试间隔："></h-label>
      <h-duration v-model="editedItem.retryInterval"></h-duration>
      <h-dictionary-toggle
        v-model="editedItem.backoff"
        dictionary="Backoff"
        default-value="FIXED"
      ></h-dictionary-toggle>
      <template v-if="isExponential">
        <h-label text="最大重试间隔："></h-label>
        <h-duration v-model="editedItem.maxInterval"></h-duration>
      </template>
    </template>
  </div>
</template>

<script setup lang="ts">
import type { TaskDefinitionEntity } from '@herodotus/api';

defineOptions({ name: 'HRetryPolicyPanel' });

const editedItem = defineModel<TaskDefinitionEntity>({
  default: () => ({}) as TaskDefinitionEntity,
});

const enabled = shallowRef(false);

const isExponential = computed(() => {
  return editedItem.value.backoff === 'EXPONENTIAL';
});

watch(enabled, (newValue) => {
  if (!newValue) {
    editedItem.value.maxAttempts = null;
    editedItem.value.maxInterval = null;
    editedItem.value.backoff = null;
    editedItem.value.retryInterval = null;
  }
});

onMounted(() => {
  if (editedItem.value.maxAttempts || editedItem.value.retryInterval || editedItem.value.backoff) {
    enabled.value = true;
  }
});
</script>
