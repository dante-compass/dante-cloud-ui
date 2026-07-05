<template>
  <h-detail-container :title="title" :overlay="overlay">
    <h-container :offset="4">
      <slot></slot>
      <div class="q-mt-sm">
        <q-btn color="red" @click="onFinish()">取消</q-btn>
        <q-btn v-if="!hideSave" color="primary" class="q-ml-sm" @click="onSave()">保存</q-btn>
        <slot name="button"></slot>
      </div>
    </h-container>
  </h-detail-container>
</template>

<script setup lang="ts">
import HDetailContainer from "./HDetailContainer.vue";

import { useEditFinish } from "@herodotus/framework";

defineOptions({ name: "HOssFormLayout", components: { HDetailContainer } });

interface Props {
  overlay?: boolean;
  title?: string;
  hideSave?: boolean;
}

withDefaults(defineProps<Props>(), {
  overlay: false,
  title: "",
  hideSave: false,
});

const emit = defineEmits<{
  save: [];
}>();

const { onFinish } = useEditFinish();

const onSave = async () => {
  emit("save");
};
</script>
