<template>
  <div>
    <h-divider label="错误触发（Misfire）："></h-divider>

    <h-switch v-model="enabled" :label="enabled ? '已开启错误触发' : '已关闭错误触发'"></h-switch>
    <template v-if="enabled">
      <h-label text="错误触发策略："></h-label>
      <h-dictionary-toggle
        v-model="editedItem.misfire"
        dictionary="Misfire"
        default-value="FIRE_ONCE"
      ></h-dictionary-toggle>
      <h-label text="错误触发阈值："></h-label>
      <h-duration v-model="editedItem.threshold"></h-duration>
    </template>
  </div>
</template>

<script setup lang="ts">
import type { TaskDefinitionEntity } from '@herodotus/api';

defineOptions({ name: 'HMisfirePolicyPanel' });

const editedItem = defineModel<TaskDefinitionEntity>({
  default: () => ({}) as TaskDefinitionEntity,
});

const enabled = shallowRef(false);

watch(enabled, (newValue) => {
  if (!newValue) {
    editedItem.value.misfire = null;
    editedItem.value.threshold = null;
  }
});

onMounted(() => {
  if (editedItem.value.misfire && editedItem.value.threshold) {
    enabled.value = true;
  }
});
</script>
