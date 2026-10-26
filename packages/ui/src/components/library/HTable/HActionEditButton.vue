<template>
  <h-action-button color="purple" icon="mdi-square-edit-outline" tooltip="编辑"></h-action-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import HActionButton from './HActionButton.vue';

export default defineComponent({
  name: 'HActionEditButton',

  components: {
    HActionButton,
  },
});
</script>
