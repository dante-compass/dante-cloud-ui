<template>
  <h-detail-container v-bind="$attrs" @cancel="onCancel">
    <div class="q-gutter-y-md">
      <slot></slot>
      <q-separator class=""></q-separator>
      <q-btn color="red" @click="onCancel()">取消</q-btn>
      <slot name="button"></slot>
    </div>
  </h-detail-container>
</template>

<script setup lang="ts">
import HDetailContainer from "./HDetailContainer.vue";

defineOptions({ name: "HFullWidthFormLayout", components: { HDetailContainer } });

const emit = defineEmits<{
  cancel: [];
}>();

const onCancel = async () => {
  emit("cancel");
};
</script>
