<template>
  <div>
    <h-field-label text="数据长度" required></h-field-label>
    <h-text-field
      v-model="model.dataType.specs.length"
      dense
      suffix="字节"
      :rules="[(v: string) => !!v || '数据长度不能为空']"
    ></h-text-field>
  </div>
</template>

<script setup lang="ts">
import type { TslStatus, Specification, TextSpecs } from '@herodotus/api';

defineOptions({ name: 'HArgumentTextPanel' });

import { useTslStatus } from '../../../composables/hooks';

interface Props {
  status?: TslStatus;
}

const props = withDefaults(defineProps<Props>(), {
  status: 'create',
});

const model = defineModel<Specification<TextSpecs>>({
  default: () => ({}) as Specification<TextSpecs>,
});

const { disabled } = useTslStatus(() => props.status);

onMounted(() => {
  if (!model.value.dataType.specs.length) {
    model.value.dataType.specs.length = '10240';
  }
});
</script>
