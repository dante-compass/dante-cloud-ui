<template>
  <h-action-button color="red" icon="mdi-delete" :tooltip="tooltip"></h-action-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import HActionButton from './HActionButton.vue';

export default defineComponent({
  name: 'HActionDeleteButton',

  components: {
    HActionButton,
  },

  props: {
    tooltip: { type: String, default: '删除' },
  },
});
</script>
