<template>
  <q-item tag="label">
    <q-item-section>
      <q-item-label>{{ label }}</q-item-label>
    </q-item-section>
    <q-item-section avatar>
      <q-toggle v-model="model" v-bind="$attrs" />
    </q-item-section>
  </q-item>
</template>

<script setup lang="ts">
import { defineComponent, computed } from "vue";

defineOptions({ name: "HSettingSwitch" });

interface Props {
  label?: string;
}

defineProps<Props>();

const model = defineModel();
</script>
