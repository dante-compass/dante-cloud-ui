<template>
  <q-list padding>
    <h-app-menu-items :items="items" :level="0"></h-app-menu-items>
  </q-list>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import type { MenuItem } from '@herodotus/framework';

import { useElementStore } from '@herodotus/framework';

import { HAppMenuItems } from '../common';

defineOptions({
  name: 'HAppMenu',
  components: {
    HAppMenuItems,
  },
});

const items = ref<Array<MenuItem>>([]);

const store = useElementStore();

onMounted(() => {
  items.value = store.appMenus;
});
</script>
