<template>
  <div :id="id">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import type { Container } from "@tsparticles/engine";

import { shallowRef, onMounted, onUnmounted, nextTick } from "vue";
import { tsParticles } from "@tsparticles/engine";
import { loadTrianglesPreset } from "@tsparticles/preset-triangles";

import { options } from "./particles";

defineOptions({ name: "HParticles" });

const id = shallowRef("HParticles");

let container: Container | undefined;

onMounted(() => {
  nextTick(async () => {
    await loadTrianglesPreset(tsParticles);

    container = await tsParticles.load({
      id: id.value,
      options,
    });
  });
});

onUnmounted(() => {
  if (container) {
    container.destroy();
    container = undefined;
  }
});
</script>
