<template>
  <q-layout view="lHr LpR lFr" :class="[$q.dark.isActive ? 'bg-black' : 'bg-grey-2']">
    <h-app-header
      :tab-view="settings.display.isTabsView"
      :breadcrumbs="settings.display.showBreadcrumbs"
      message
    ></h-app-header>

    <layout-left-drawer :items="menuItems"></layout-left-drawer>

    <layout-right-drawer></layout-right-drawer>

    <layout-container></layout-container>
  </q-layout>
</template>

<script setup lang="ts">
import { useSettingsStore, useElementStore } from "@herodotus/framework";

import { HAppHeader, LayoutContainer, LayoutLeftDrawer, LayoutRightDrawer } from "../common";

defineOptions({
  name: "AppDefaultLayout",
  components: { LayoutContainer, HAppHeader, LayoutRightDrawer },
});

const settings = useSettingsStore();

const store = useElementStore();

const menuItems = computed(() => {
  return store.appMenus;
});
</script>
