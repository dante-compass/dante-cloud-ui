<template>
  <q-toggle
    v-model="model"
    :label="label"
    :true-value="1"
    :false-value="0"
    checked-icon="check"
    unchecked-icon="clear"
    dense
    class="my-2"
  ></q-toggle>
</template>

<script setup lang="ts">
import type { Specification, BoolSpecs } from '@herodotus/api';

import { useTslEntity } from '../../../composables/hooks';

defineOptions({ name: 'HBoolControl' });

interface Props {
  specs: Specification<BoolSpecs>;
}

const props = defineProps<Props>();

const model = defineModel<number>({
  default: 0,
});

const { isSpecificationNotEmpty } = useTslEntity();

const trueLabel = shallowRef();
const falseLabel = shallowRef();

watch(
  () => props.specs,
  (newValue) => {
    if (isSpecificationNotEmpty(newValue)) {
      trueLabel.value = newValue.dataType.specs['1'];
      falseLabel.value = newValue.dataType.specs['0'];
    }
  },
  { immediate: true, deep: true },
);

const label = computed(() => {
  if (trueLabel.value && falseLabel.value) {
    return model.value === 1 ? trueLabel.value : falseLabel.value;
  }

  return undefined;
});
</script>
