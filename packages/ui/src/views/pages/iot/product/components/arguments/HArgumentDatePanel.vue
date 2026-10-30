<template>
  <div>
    <h-field-label text="时间格式"></h-field-label>
    <h-text-field v-model="format" filled dense disable readonly></h-text-field>
  </div>
</template>

<script setup lang="ts">
import type { TslStatus } from '@herodotus/api';

defineOptions({ name: 'HArgumentTextPanel' });

const format = shallowRef('String类型的UTC时间戳(毫秒)');

interface Props {
  status?: TslStatus;
}

const props = withDefaults(defineProps<Props>(), {
  status: 'create',
});
</script>
