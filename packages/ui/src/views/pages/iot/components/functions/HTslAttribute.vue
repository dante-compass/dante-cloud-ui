<template>
  <q-card> </q-card>
</template>

<script setup lang="ts">
import type { Argument, Specs } from "@herodotus/api";

defineOptions({
  name: "IotDeviceInvoke",
});

const props = defineProps({
  argument: { type: Object as PropType<Argument<Specs>> },
});

const emit = defineEmits(["update:modelValue"]);
</script>
