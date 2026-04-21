<template>
  <q-drawer v-model="application.leftDrawer" show-if-above bordered :width="300">
    <q-scroll-area class="fit">
      <q-list padding>
        <layout-menu-items :items="items" :level="0"></layout-menu-items>
      </q-list>
    </q-scroll-area>
  </q-drawer>
</template>

<script setup lang="ts">
import type { MenuItem } from "@herodotus/framework";

import { useApplicationStore } from "@herodotus/framework";

import LayoutMenuItems from "./LayoutMenuItems.vue";

defineOptions({ name: "LayoutLeftDrawer", components: { LayoutMenuItems } });

interface Props {
  items: MenuItem[];
}

defineProps<Props>();

const application = useApplicationStore();
</script>
