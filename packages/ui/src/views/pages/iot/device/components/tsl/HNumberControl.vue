<template>
  <q-input
    v-model.number="model"
    type="number"
    :max="max"
    :min="min"
    :step="step"
    :precision="precision"
    dense
    hide-details="auto"
    class="my-2"
  ></q-input>
</template>

<script setup lang="ts">
import type { Specification, IntegerSpecs, FloatSpecs, DoubleSpecs } from '@herodotus/api';

import { useTslEntity } from '../../../composables/hooks';

defineOptions({ name: 'HNumberControl' });

interface Props {
  specs: Specification<IntegerSpecs | FloatSpecs | DoubleSpecs>;
}

const props = defineProps<Props>();

const model = defineModel<number>();

const { isSpecificationNotEmpty } = useTslEntity();

const min = shallowRef();
const max = shallowRef();
const step = shallowRef();
const precision = shallowRef(0);

const getMin = (specs: Specification<IntegerSpecs | FloatSpecs | DoubleSpecs>) => {
  if (specs.dataType.specs.min) {
    if (specs.dataType.type === 'int') {
      return Number.parseInt(specs.dataType.specs.min);
    } else {
      return Number.parseFloat(specs.dataType.specs.min);
    }
  }
  return undefined;
};

const getMax = (specs: Specification<IntegerSpecs | FloatSpecs | DoubleSpecs>) => {
  if (specs.dataType.specs.max) {
    if (specs.dataType.type === 'int') {
      return Number.parseInt(specs.dataType.specs.max);
    } else {
      return Number.parseFloat(specs.dataType.specs.max);
    }
  }
  return undefined;
};

const getStep = (specs: Specification<IntegerSpecs | FloatSpecs | DoubleSpecs>) => {
  if (specs.dataType.specs.step) {
    if (specs.dataType.type === 'int') {
      return Number.parseInt(specs.dataType.specs.step);
    } else {
      return Number.parseFloat(specs.dataType.specs.step);
    }
  }
  return undefined;
};

const getPrecision = (specs: Specification<IntegerSpecs | FloatSpecs | DoubleSpecs>) => {
  switch (specs.dataType.type) {
    case 'float':
      return 1;
    case 'double':
      return 2;
    default:
      return 0;
  }
};

watch(
  () => props.specs,
  (newValue) => {
    if (isSpecificationNotEmpty(newValue)) {
      min.value = getMin(newValue);
      max.value = getMax(newValue);
      step.value = getStep(newValue);
      precision.value = getPrecision(newValue);
      model.value = min.value;
    }
  },
  { immediate: true, deep: true },
);
</script>
