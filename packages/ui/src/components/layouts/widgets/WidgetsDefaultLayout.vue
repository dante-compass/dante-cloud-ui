<template>
  <q-layout view="lHr LpR lFr" :class="[$q.dark.isActive ? 'bg-black' : 'bg-grey-2']">
    <h-app-header :tab-view="false" back-home></h-app-header>

    <layout-right-drawer></layout-right-drawer>

    <layout-container></layout-container>
  </q-layout>
</template>

<script setup lang="ts">
import { HAppHeader, LayoutRightDrawer, LayoutContainer } from "../common";

defineOptions({ name: "WidgetsDefaultLayout", components: { HAppHeader, LayoutRightDrawer, LayoutContainer } });
</script>
