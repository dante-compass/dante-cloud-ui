<template>HDeviceShadowTab</template>

<script setup lang="ts">
import type { DeviceEntity } from '@herodotus/api';

defineOptions({ name: 'HDeviceShadowTab' });

const entity = defineModel<DeviceEntity>({
  default: () => ({}) as DeviceEntity,
  required: true,
});
</script>
