<template>
  <div>
    <h-field-label text="布尔值" required></h-field-label>
    <h-text-field v-model="entity.dataType.specs['0']" dense placeholder="如：关">
      <template v-slot:before>
        <div class="text-subtitle1">{{ "0 - " }}</div>
      </template>
    </h-text-field>
    <h-text-field v-model="entity.dataType.specs['1']" dense placeholder="如：开">
      <template v-slot:before>
        <div class="text-subtitle1">{{ "1 - " }}</div>
      </template>
    </h-text-field>
  </div>
</template>

<script setup lang="ts">
import type { Specification, BoolSpecs } from "@herodotus/api";

import { HDictionarySelect } from "@/components";

defineOptions({
  name: "HBoolPanel",
  components: {
    HDictionarySelect,
  },
});

const entity = defineModel<Specification<BoolSpecs>>({
  default: () => ({}),
});
</script>
