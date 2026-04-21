<template>
  <app-default-layout></app-default-layout>
</template>

<script lang="ts" setup>
import { AppDefaultLayout } from "@/components/layouts";

defineOptions({ name: "AppLayout", components: { AppDefaultLayout } });
</script>
