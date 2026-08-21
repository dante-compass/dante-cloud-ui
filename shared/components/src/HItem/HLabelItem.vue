<template>
  <div :class="['d-flex', ...clazz, 'ga-4']">
    <div class="w-20">
      <h-field-label :text="label" :required="required" :class="[{ 'justify-end': right }]"></h-field-label>
    </div>

    <div class="w-50">
      <slot></slot>
    </div>

    <div>
      <slot name="append"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { HFieldLabel } from '../HForm';
import { HIconButton } from '../HButton';
import { computed } from 'vue';

defineOptions({ name: 'HLabelItem', components: { HFieldLabel, HIconButton } });

interface Props {
  label: string;
  required?: boolean;
  justify?: 'start' | 'center' | 'end' | null;
  align?: 'start' | 'center' | 'end' | null;
  right?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  justify: 'center',
  align: 'center',
  required: false,
  right: false,
});

const clazz = computed(() => {
  const items: string[] = [];

  if (props.justify) {
    items.push(`justify-${props.justify}`);
  }

  if (props.align) {
    items.push(`align-${props.align}`);
  }

  return items;
});
</script>
