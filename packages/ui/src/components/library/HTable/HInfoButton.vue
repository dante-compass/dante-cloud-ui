<template>
  <h-action-button color="info" icon="mdi-clipboard-text" tooltip="查看信息"></h-action-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import HActionButton from './HActionButton.vue';

export default defineComponent({
  name: 'HInfoButton',

  components: {
    HActionButton,
  },
});
</script>
