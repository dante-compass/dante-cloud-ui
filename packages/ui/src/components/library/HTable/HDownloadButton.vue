<template>
  <h-dense-icon-button
    color="secondary"
    icon="mdi-file-download"
    tooltip="下载文件"
    v-bind="$attrs"
  ></h-dense-icon-button>
</template>

<script setup lang="ts">
import HDenseIconButton from './HDenseIconButton.vue';

defineOptions({ name: 'HDeleteButton', components: { HDenseIconButton } });
</script>
