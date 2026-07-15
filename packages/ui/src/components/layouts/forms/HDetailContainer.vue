<template>
  <q-card>
    <q-toolbar>
      <h-button flat round dense color="red" icon="mdi-arrow-left-box" tooltip="返回" @click="onCancel()"></h-button>
      <q-toolbar-title>
        {{ title }}
      </q-toolbar-title>
    </q-toolbar>

    <q-separator></q-separator>

    <q-card-section>
      <slot></slot>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { useQuasar, QSpinnerGears } from "quasar";

defineOptions({ name: "HDetailContainer" });

interface Props {
  title?: string;
  overlay?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  overlay: false,
});

const emit = defineEmits<{
  cancel: [];
}>();

const onCancel = async () => {
  emit("cancel");
};

const $q = useQuasar();

watch(
  () => props.overlay,
  (newValue: boolean) => {
    if (newValue) {
      $q.loading.show({
        spinner: QSpinnerGears,
        // other props
      });
    } else {
      $q.loading.hide();
    }
  },
);
</script>
