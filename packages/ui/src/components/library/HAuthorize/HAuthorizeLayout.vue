<template>
  <h-detail-container v-bind="$attrs" @cancel="onCancel">
    <h-container mode="two" :offset="2" wider="start">
      <slot></slot>

      <template #right>
        <slot name="right"></slot>
      </template>
    </h-container>
  </h-detail-container>
</template>

<script setup lang="ts">
import { HDetailContainer } from "../../layouts/forms";

defineOptions({ name: "HAuthorizeLayout", components: { HDetailContainer } });

const emit = defineEmits<{
  cancel: [];
}>();

const onCancel = async () => {
  emit("cancel");
};
</script>
