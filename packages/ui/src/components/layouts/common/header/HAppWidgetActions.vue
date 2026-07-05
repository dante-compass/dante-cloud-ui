<template>
  <q-btn round dense flat color="grey-8" icon="apps" v-if="$q.screen.gt.sm">
    <q-tooltip>Apps</q-tooltip>
    <q-menu anchor="bottom left" self="top middle">
      <div class="q-pa-md" style="width: 200px">
        <div class="q-gutter-md">
          <q-btn round color="primary" :icon="item.icon" :to="item.path" v-for="item in widgets" :key="item.path">
            <q-tooltip>{{ item.tooltip }}</q-tooltip>
          </q-btn>
        </div>
      </div>
    </q-menu>
  </q-btn>
</template>

<script setup lang="ts">
import type { WidgetItem } from "@/composables/declarations";
import { getWidgets } from "@/routers/logic";

defineOptions({ name: "HAppBreadcrumbs" });

const widgets = ref<Array<WidgetItem>>([]);

onMounted(() => {
  widgets.value.push(...getWidgets());
});
</script>

<style lang="scss">
.hidden_icon {
  a {
    i {
      display: none;
    }
  }
}
</style>
