<template>
  <div>
    <h-field-label text="时间格式"></h-field-label>
    <h-text-field v-model="format" filled dense disable readonly></h-text-field>
  </div>
</template>

<script setup lang="ts">
import type { Specification, DateSpecs } from "@herodotus/api";
import { shallowRef } from "vue";

defineOptions({
  name: "HTextPanel",
});

const entity = defineModel<Specification<DateSpecs>>({
  default: () => ({}),
});

const format = shallowRef("String类型的UTC时间戳(毫秒)");
</script>
