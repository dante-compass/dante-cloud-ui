<template>
  <q-layout view="lHr LpR lFr" :class="[$q.dark.isActive ? 'bg-black' : 'bg-grey-2']">
    <h-app-header :tab-view="false" back-home></h-app-header>

    <layout-left-drawer :items="menuItems"></layout-left-drawer>

    <layout-right-drawer></layout-right-drawer>

    <layout-container></layout-container>
  </q-layout>
</template>

<script setup lang="ts">
import { useElementStore } from "@herodotus/framework";

import { HAppHeader, LayoutRightDrawer, LayoutLeftDrawer, LayoutContainer } from "../common";

defineOptions({
  name: "TestingDefaultLayout",
  components: { HAppHeader, LayoutRightDrawer, LayoutLeftDrawer, LayoutContainer },
});

const store = useElementStore();

const menuItems = computed(() => {
  return store.testingMenus;
});
</script>
