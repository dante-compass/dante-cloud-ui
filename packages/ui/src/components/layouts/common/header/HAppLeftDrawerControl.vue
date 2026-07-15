<template>
  <q-btn
    flat
    dense
    round
    @click="application.leftDrawer = !application.leftDrawer"
    :icon="application.leftDrawer ? 'mdi-menu-open' : 'mdi-menu-close'"
  />
</template>

<script setup lang="ts">
import { useApplicationStore } from "@herodotus/framework";

defineOptions({ name: "HAppLeftDrawerControl" });

const application = useApplicationStore();
</script>
