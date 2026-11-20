<template>
  <q-btn-toggle v-if="isShow" v-model="selectedValue" :options="options" v-bind="$attrs" />
</template>

<script setup lang="ts">
import { useDictionary } from '@/composables/hooks';

defineOptions({ name: 'HDictionaryToggle' });

interface Props {
  dictionary: string;
  defaultValue?: string;
}

const props = defineProps<Props>();

const selectedValue = defineModel();

const { options, isShow } = useDictionary(props.dictionary);

onMounted(() => {
  nextTick(() => {
    if (props.defaultValue) {
      selectedValue.value = props.defaultValue;
    }
  });
});
</script>
