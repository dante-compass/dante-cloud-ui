<template>
  <q-drawer v-model="application.leftDrawer" show-if-above bordered :width="300">
    <q-scroll-area class="fit"> <h-app-menu></h-app-menu> </q-scroll-area>
  </q-drawer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { useApplicationStore } from '@herodotus/framework';

import HAppMenu from './HAppMenu.vue';

export default defineComponent({
  name: 'HAppLeftDrawer',

  components: {
    HAppMenu,
  },

  setup() {
    const application = useApplicationStore();

    return {
      application,
    };
  },
});
</script>
