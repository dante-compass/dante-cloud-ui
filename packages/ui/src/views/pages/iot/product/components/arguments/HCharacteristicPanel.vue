<template>
  <div>
    <h-field-label text="功能名称" required></h-field-label>
    <h-text-field
      v-model="model.name"
      dense
      placeholder="请输入您的功能名称"
      debounce="5000"
      :disabled="disabled"
      :rules="[(v: string) => !!v || '功能名称不能为空']"
    ></h-text-field>
    <h-field-label text="标识符" required></h-field-label>
    <h-text-field
      v-model="model.identifier"
      dense
      placeholder="请输入您的标识符"
      :disabled="disabled"
      :rules="[
        (v: string) => !!v || '标识符不能为空',
        (v: string) => regexRule(v) || '标识符仅允许包含大小字母、数字、特称字符，至少5个字符，最多50个字符',
      ]"
    ></h-text-field>
  </div>
</template>

<script setup lang="ts">
import type { Characteristic, TslStatus } from '@herodotus/api';

import { useTslStatus } from '../../../composables/hooks';

defineOptions({ name: 'HCharacteristicPanel' });

interface Props {
  status?: TslStatus;
}

const props = withDefaults(defineProps<Props>(), {
  status: 'create',
});

const model = defineModel<Characteristic>({
  default: () => ({}) as Characteristic,
});

const { disabled } = useTslStatus(() => props.status);

const regexRule = (content: string) => {
  const regex = /^(?=.*[a-zA-Z])(?!.*\s).{5,50}$/;
  return regex.test(content);
};
</script>
