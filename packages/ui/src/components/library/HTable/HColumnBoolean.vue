<template>
  <h-action-button v-if="value" :color="trueColor" :icon="trueIcon" :tooltip="trueTooltip"></h-action-button>
  <h-action-button v-else :color="falseColor" :icon="falseIcon" :tooltip="falseTooltip"></h-action-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import HActionButton from './HActionButton.vue';

export default defineComponent({
  name: 'HColumnBoolean',

  components: {
    HActionButton,
  },

  props: {
    value: { type: Boolean, required: true },
    trueColor: { type: String, default: 'green' },
    falseColor: { type: String, default: 'negative' },
    trueIcon: { type: String, default: 'mdi-check-circle-outline' },
    falseIcon: { type: String, default: 'mdi-close-circle-outline' },
    trueTooltip: { type: String, default: 'TRUE' },
    falseTooltip: { type: String, default: 'FALSE' },
  },
});
</script>
