<template>
  <div class="d-flex ga-2">
    <q-chip v-for="(value, key) in specs" :key="key" :color="getColorByKey(key)" dense>
      {{ key + ' - ' + value }}
    </q-chip>
  </div>
</template>

<script setup lang="ts">
import type { Specification, BoolSpecs, EnumSpecs } from '@herodotus/api';

import { isEmpty, sample } from 'lodash-es';
import { COLOR_LIST } from '@/configurations';

defineOptions({ name: 'HSpecChip' });

interface Props {
  spec: Specification<BoolSpecs> | Specification<EnumSpecs>;
}

const props = defineProps<Props>();

const specs = computed(() => {
  let items: Record<string, string> = {};
  if (!isEmpty(props.spec) && !isEmpty(props.spec.dataType)) {
    items = props.spec.dataType.specs;
  }

  return items;
});

const getColorByKey = (key: string) => {
  // 根据 key 的哈希值从 COLOR_LIST 中选一个
  const index = Math.abs(hashCode(key)) % COLOR_LIST.length;
  return COLOR_LIST[index];
};

function hashCode(str: string) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return hash;
}
</script>
