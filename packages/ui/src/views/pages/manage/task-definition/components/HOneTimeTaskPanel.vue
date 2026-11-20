<template>
  <div>
    <h-label text="延迟执行时间："></h-label>
    <h-duration v-model="editedItem.initialDelay"></h-duration>
  </div>
</template>

<script setup lang="ts">
import type { TaskDefinitionEntity } from '@herodotus/api';

defineOptions({ name: 'HFixTaskPanel' });

const editedItem = defineModel<TaskDefinitionEntity>({
  default: () => ({}) as TaskDefinitionEntity,
});
</script>
