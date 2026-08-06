<template>
  <v-text-field
    v-model="model"
    :counter="counter"
    density="compact"
    hide-details="auto"
    class="my-2"
    :rules="[(v: string) => !!v || '不能输入空值']"
  ></v-text-field>
</template>

<script setup lang="ts">
import type { Specification, TextSpecs } from '@herodotus/api';

import { useTslEntity } from '../../../composables/hooks';

defineOptions({ name: 'HTextControl' });

interface Props {
  specs: Specification<TextSpecs>;
}

const props = defineProps<Props>();

const model = defineModel<string>();

const { isSpecificationNotEmpty } = useTslEntity();

const counter = shallowRef<string | number | boolean>(false);

watch(
  () => props.specs,
  (newValue) => {
    if (isSpecificationNotEmpty(newValue)) {
      counter.value = getCounter(newValue);
    }
  },
);

const getCounter = (specs: Specification<TextSpecs>) => {
  return specs.dataType.specs.length;
};
</script>
