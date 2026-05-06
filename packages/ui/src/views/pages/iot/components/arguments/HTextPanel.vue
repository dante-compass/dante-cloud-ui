<template>
  <div>
    <h-field-label text="数据长度" required></h-field-label>
    <h-text-field v-model="entity.dataType.specs.length" dense suffix="字节"></h-text-field>
  </div>
</template>

<script setup lang="ts">
import type { Specification, TextSpecs } from "@herodotus/api";

import { onMounted } from "vue";

defineOptions({
  name: "HTextPanel",
});

const entity = defineModel<Specification<TextSpecs>>({
  default: () => ({}),
});

onMounted(() => {
  if (!entity.value.dataType.specs.length) {
    entity.value.dataType.specs.length = "10240";
  }
});
</script>
