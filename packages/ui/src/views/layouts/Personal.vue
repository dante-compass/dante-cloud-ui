<template>
  <personal-default-layout></personal-default-layout>
</template>

<script lang="ts" setup>
import { PersonalDefaultLayout } from "@/components/layouts";

defineOptions({ name: "PersonalLayout", components: { PersonalDefaultLayout } });
</script>
