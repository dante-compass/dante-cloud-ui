<template>
  <div><h-field-label text="布尔值" required></h-field-label></div>
</template>

<script setup lang="ts">
import type { TslArgumentEntity } from "@herodotus/api";

import { HDictionarySelect } from "@/components";

defineOptions({
  name: "HEnumPanel",
  components: {
    HDictionarySelect,
  },
});

const entity = defineModel<TslArgumentEntity>({
  default: () => ({}),
});
</script>
