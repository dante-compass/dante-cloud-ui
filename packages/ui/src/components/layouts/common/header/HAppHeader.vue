<template>
  <q-header
    :class="[$q.dark.isActive ? 'bg-dark text-white q-pt-xs' : 'bg-white text-grey-8 q-pt-xs']"
    height-hint="58"
    style="z-index: 10"
  >
    <q-toolbar>
      <h-app-back-home-control v-if="backHome"></h-app-back-home-control>
      <h-app-left-drawer-control v-else></h-app-left-drawer-control>

      <h-app-breadcrumbs v-if="breadcrumbs"></h-app-breadcrumbs>

      <q-space />

      <h-app-toolbar-actions :message="message"></h-app-toolbar-actions>
    </q-toolbar>
    <q-separator />

    <h-app-tabs-view v-if="tabView"></h-app-tabs-view>
  </q-header>
</template>

<script setup lang="ts">
import HAppBreadcrumbs from "./HAppBreadcrumbs.vue";
import HAppTabsView from "./HAppTabsView.vue";
import HAppToolbarActions from "./HAppToolbarActions.vue";
import HAppLeftDrawerControl from "./HAppLeftDrawerControl.vue";
import HAppBackHomeControl from "./HAppBackHomeControl.vue";

defineOptions({
  name: "HAppHeader",
  components: { HAppBreadcrumbs, HAppLeftDrawerControl, HAppBackHomeControl, HAppTabsView, HAppToolbarActions },
});

interface Props {
  tabView?: boolean;
  breadcrumbs?: boolean;
  backHome?: boolean;
  message?: boolean;
}

withDefaults(defineProps<Props>(), {
  tabView: true,
  breadcrumbs: true,
  backHome: false,
  message: false,
});
</script>
