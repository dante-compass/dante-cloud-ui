<template>
  <q-list bordered padding class="rounded-borders">
    <h-app-menu-items :items="items" :level="0"></h-app-menu-items>
  </q-list>
</template>

<script setup lang="ts">
import type { MenuItem } from '@herodotus/framework';

import { HAppMenuItems } from '../common';
import { useElementStore } from '@herodotus/framework';

defineOptions({ name: 'HSettingMenu', components: { HAppMenuItems } });

const items = ref<Array<MenuItem>>([]);

const store = useElementStore();

onMounted(() => {
  items.value = store.personalMenus;
});
</script>
