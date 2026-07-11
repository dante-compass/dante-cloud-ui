<template>
  <q-btn round dense flat color="red" icon="mdi-arrow-left-box" :to="homePath">
    <q-tooltip>返回首页</q-tooltip>
  </q-btn>
</template>

<script setup lang="ts">
import { CONSTANTS } from "@/configurations";

defineOptions({ name: "HAppBackHomeControl" });

const homePath = Path.HOME;
</script>
