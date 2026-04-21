<template>
  <div v-for="(item, index) in items" :key="index">
    <q-expansion-item
      v-if="!hasChildren(item)"
      :label="item.title"
      :icon="item.prependIcon"
      :to="item.to"
      :header-inset-level="level"
      expand-separator
      expand-icon="1"
    ></q-expansion-item>
    <q-expansion-item
      v-else
      :label="item.title"
      :icon="item.prependIcon"
      :header-inset-level="level"
      :header-class="isActive(item) ? 'expansion-item--active' : ''"
      :model-value="isActive(item)"
      expand-separator
    >
      <layout-menu-items :items="item.children!" :level="level + 0.5"></layout-menu-items>
    </q-expansion-item>
  </div>
</template>

<script setup lang="ts">
import type { MenuItem } from "@herodotus/framework";

import { useRoute } from "vue-router";
import { isEmpty } from "lodash-es";

defineOptions({ name: "LayoutMenuItems" });

interface Props {
  items: Array<MenuItem>;
  level: number;
}

defineProps<Props>();

const thisRoute = useRoute();

const isActive = (item: MenuItem) => thisRoute.matched.some((matchedItem) => matchedItem.path === item.to);

const hasChildren = (item: MenuItem) => {
  return !isEmpty(item.children);
};
</script>

<style lang="scss" scoped>
.q-item__section--avatar {
  color: inherit;
  min-width: 0;
}

.expansion-item--active {
  color: var(--q-primary);
}
</style>
