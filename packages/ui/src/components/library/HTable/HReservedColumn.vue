<template>
  <h-action-button
    v-if="status"
    color="negative"
    icon="mdi-delete-forever"
    tooltip="不允许删除的数据"
  ></h-action-button>
  <h-action-button v-else color="positive" icon="mdi-delete-empty" tooltip="允许删除的数据"></h-action-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { useSettingsStore } from '@herodotus/framework';

import HActionButton from './HActionButton.vue';

export default defineComponent({
  name: 'HReservedColumn',

  components: {
    HActionButton,
  },

  props: {
    status: { type: Boolean, default: false },
  },

  setup(props) {
    const settings = useSettingsStore();
    return {
      settings,
    };
  },
});
</script>
