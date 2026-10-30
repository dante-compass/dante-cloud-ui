<template>
  <q-select
    v-model="selectedValue"
    :options="options"
    :option-disable="disableOption"
    :name="dictionary"
    outlined
    use-chips
    clearable
    emit-value
    map-options
    transition-show="scale"
    transition-hide="scale"
    bottom-slots
    v-bind="$attrs"
  ></q-select>
</template>

<script setup lang="ts">
import type { Dictionary } from '@herodotus/core';

import { useDictionary } from '@/composables/hooks';

defineOptions({ name: 'HDictionarySelect' });

interface Props {
  dictionary: string;
  disableItems?: string[];
}

const props = withDefaults(defineProps<Props>(), {
  disableItems: undefined,
});

const selectedValue = defineModel();

const { options } = useDictionary(props.dictionary);

const disableOption = (option: Dictionary) => {
  if (props.disableItems && props.disableItems.includes(option.label)) {
    return true;
  } else {
    return false;
  }
};
</script>
