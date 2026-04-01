<template>
  <h-detail-container v-bind="$attrs">
    <div class="q-gutter-y-md">
      <slot></slot>
      <q-separator class=""></q-separator>
      <q-btn color="red" @click="onFinish()">取消</q-btn>
      <slot name="button"></slot>
    </div>
  </h-detail-container>
</template>

<script setup lang="ts">
import { useEditFinish } from '@herodotus/framework';

import HDetailContainer from './HDetailContainer.vue';

defineOptions({ name: 'HFullWidthFormLayout', components: { HDetailContainer } });

const { onFinish } = useEditFinish();
</script>
