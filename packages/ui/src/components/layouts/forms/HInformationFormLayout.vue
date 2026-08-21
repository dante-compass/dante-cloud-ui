<template>
  <div>
    <q-card :flat="flat" class="q-mb-md">
      <q-toolbar>
        <h-button flat round dense color="red" icon="mdi-arrow-left-box" tooltip="返回" @click="onCancel()"></h-button>
        <q-toolbar-title>
          {{ title }}
        </q-toolbar-title>
      </q-toolbar>

      <q-card-section v-if="$slots.header">
        <slot name="header"></slot>
      </q-card-section>
      <v-overlay :model-value="overlay" class="align-center justify-center" contained>
        <v-progress-circular color="primary" size="64" indeterminate></v-progress-circular>
      </v-overlay>

      <q-inner-loading :showing="overlay">
        <q-spinner color="primary" size="3em" :thickness="2" />
      </q-inner-loading>
    </q-card>

    <slot></slot>
  </div>
</template>

<script setup lang="ts">
defineOptions({ name: 'HInformationFormLayout' });

interface Props {
  title?: string;
  overlay?: boolean;
  flat?: boolean;
}

withDefaults(defineProps<Props>(), {
  overlay: false,
  flat: false,
});

const emit = defineEmits<{
  cancel: [];
}>();

const onCancel = async () => {
  emit('cancel');
};
</script>
