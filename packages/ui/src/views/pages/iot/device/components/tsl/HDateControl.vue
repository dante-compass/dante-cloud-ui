<template>
  <h-date-time
    v-model="dateTime"
    placeholder="请选择时间"
    dense
    :rules="[(v: string) => !!v || '请选择时间']"
  ></h-date-time>
</template>

<script setup lang="ts">
import { moment } from '@herodotus/core';

defineOptions({ name: 'HDateControl' });

const model = defineModel<string>();

const dateTime = computed({
  get: () => (model.value ? moment(Number(model.value)).format('YYYY-MM-DD HH:mm:ss') : ''),
  set: (value: string) => {
    if (value) {
      // （小写x）以毫秒为单位，返回值为字符串类型
      model.value = moment(value).format('x');
    } else {
      model.value = '';
    }
  },
});
</script>
