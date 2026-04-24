<template>
  <q-layout view="lHr LpR lFr" :class="[$q.dark.isActive ? 'bg-black' : 'bg-grey-2']">
    <h-app-header :tab-view="false" back-home message></h-app-header>

    <layout-right-drawer></layout-right-drawer>

    <personal-container></personal-container>
  </q-layout>
</template>

<script setup lang="ts">
import type { RouteLocationNormalizedLoaded } from "vue-router";
import { useRoute } from "vue-router";

import { useElementStore, useEditFinish } from "@herodotus/framework";

import { LayoutRightDrawer } from "../common";
import PersonalContainer from "./PersonalContainer.vue";

defineOptions({ name: "PersonalDefaultLayout", components: { PersonalContainer, LayoutRightDrawer } });

const route = useRoute();
const { onFinish } = useEditFinish();

const smartCloseDetail = (route: RouteLocationNormalizedLoaded) => {
  const store = useElementStore();
  const isDetailRoute = store.isDetailRoute(route);

  if (isDetailRoute) {
    if (!store.hasParameter(route)) {
      onFinish();
    }
  }
};

watch(
  () => route.path,
  () => {
    smartCloseDetail(route);
  },
  { immediate: true },
);
</script>
