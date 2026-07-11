<template>
  <q-breadcrumbs :class="getClass">
    <q-breadcrumbs-el label="首页" icon="home" :to="getHomePath"></q-breadcrumbs-el>
    <q-breadcrumbs-el
      v-for="(item, i) in $route.matched"
      :key="i"
      :label="getTitle(item)"
      :icon="getIcon(item)"
      disable
    ></q-breadcrumbs-el>
  </q-breadcrumbs>
</template>

<script setup lang="ts">
import type { RouteLocationMatched } from "vue-router";

import { CONSTANTS } from "@/configurations";
import { useSettingsStore } from "@herodotus/framework";

defineOptions({ name: "HAppBreadcrumbs" });

const settings = useSettingsStore();

const getTitle = (item: RouteLocationMatched) => {
  return item.meta.title as string;
};

const getIcon = (item: RouteLocationMatched) => {
  return item.meta.icon as string;
};

const getHomePath = computed(() => {
  return Path.HOME;
});

const getClass = computed(() => {
  const base = "q-ml-lg ";
  if (settings.display.showBreadcrumbsIcon) {
    return base;
  } else {
    return base + "hidden_icon";
  }
});
</script>

<style lang="scss" scoped>
.hidden_icon {
  a {
    i {
      display: none;
    }
  }
}
</style>
