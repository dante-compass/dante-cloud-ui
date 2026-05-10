<template>
  <div>
    <h-field-label text="取值范围"></h-field-label>
    <h-container mode="three" :offset="-3" wider="center">
      <template #left>
        <h-text-field v-model="entity.dataType.specs.min" dense placeholder="请输入最小值" />
      </template>
      <h-label class="q-mt-xs" text="~"></h-label>
      <template #right>
        <h-text-field v-model="entity.dataType.specs.max" dense placeholder="请输入最大值" />
      </template>
    </h-container>
    <h-field-label text="步长"></h-field-label>
    <h-text-field v-model="entity.dataType.specs.step" dense placeholder="请输入步长" />
    <h-field-label text="单位"></h-field-label>
    <h-unit-select v-model="unit" dense></h-unit-select>
  </div>
</template>

<script setup lang="ts">
import type { Specification, IntegerSpecs, FloatSpecs, DoubleSpecs, TslUnitEntity } from "@herodotus/api";

import { isEmpty } from "lodash-es";

import { HDictionarySelect } from "@/components";
import HUnitSelect from "./HUnitSelect.vue";

defineOptions({
  name: "HNumberPanel",
  components: {
    HDictionarySelect,
    HUnitSelect,
  },
});

const entity = defineModel<Specification<IntegerSpecs | FloatSpecs | DoubleSpecs>>({
  default: () => ({}),
});

const unit = ref<TslUnitEntity | null>(null);

watch(unit, (newValue) => {
  if (!isEmpty(newValue)) {
    entity.value.dataType.specs.unit = newValue.symbol;
    entity.value.dataType.specs.unitName = newValue.name;
  }
});
</script>
