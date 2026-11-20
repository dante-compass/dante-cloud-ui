<template>
  <div>
    <h-field-label text="布尔值" required></h-field-label>
    <h-text-field v-model="model.dataType.specs['0']" dense placeholder="如：关">
      <template v-slot:before>
        <div class="text-subtitle1">{{ '0 - ' }}</div>
      </template>
    </h-text-field>
    <h-text-field v-model="model.dataType.specs['1']" dense placeholder="如：开">
      <template v-slot:before>
        <div class="text-subtitle1">{{ '1 - ' }}</div>
      </template>
    </h-text-field>
  </div>
</template>

<script setup lang="ts">
import type { TslStatus, Specification, BoolSpecs } from '@herodotus/api';

import { useTslStatus } from '../../../composables/hooks';

import { HDictionarySelect } from '@/components/library/HDictionary';

defineOptions({ name: 'HArgumentBoolPanel', components: { HDictionarySelect } });

interface Props {
  status?: TslStatus;
}

const props = withDefaults(defineProps<Props>(), {
  status: 'create',
});

const model = defineModel<Specification<BoolSpecs>>({
  default: () => ({}) as Specification<BoolSpecs>,
});

const { disabled } = useTslStatus(() => props.status);
</script>
