<template>
  <div :id="id">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import type { Container } from "@tsparticles/engine";

import { shallowRef, onMounted, onUnmounted, onBeforeMount } from "vue";
import { tsParticles } from "@tsparticles/engine";
import { loadTrianglesPreset } from "@tsparticles/preset-triangles";

import { options } from "./particles";

defineOptions({ name: "HParticles" });

const id = shallowRef("HParticles");

let container: Container | undefined;

const init = async () => {
  await loadTrianglesPreset(tsParticles);
};

const start = async () => {
  container?.destroy();

  container = await tsParticles.load({
    id: id.value,
    options,
  });
};

const stop = async () => {
  container?.destroy();
};

onBeforeMount(() => {
  init();
});

onMounted(() => {
  start();
});

onUnmounted(() => {
  stop();
});
</script>
