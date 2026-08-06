<template>
  <q-btn-toggle v-model="model" rounded unelevated dense :options="options"> </q-btn-toggle>
</template>

<script setup lang="ts">
import type { Specification, EnumSpecs } from '@herodotus/api';

import { useTslEntity } from '../../../composables/hooks';

defineOptions({ name: 'HEnumControl' });

interface Props {
  specs: Specification<EnumSpecs>;
}

interface Option {
  label: string;
  value: number;
}

const props = defineProps<Props>();

const model = defineModel<number>({
  default: 0,
});

const { isSpecificationNotEmpty } = useTslEntity();

const options = ref([]) as Ref<Option[]>;

watch(
  () => props.specs,
  (newValue) => {
    if (isSpecificationNotEmpty(newValue)) {
      options.value = Object.entries(newValue.dataType.specs).map(([key, value]) => ({
        label: key,
        value: Number(value),
      }));
    }
  },
  { immediate: true, deep: true },
);
</script>
