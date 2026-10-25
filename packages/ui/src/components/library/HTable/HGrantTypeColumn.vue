<template>
  <div>
    <h-action-button
      v-for="(item, i) in items"
      :key="i"
      :icon="icon(item)"
      :color="color(item)"
      :tooltip="text(item)"
    ></h-action-button>
  </div>
</template>

<script lang="ts">
import type { PropType } from 'vue';
import { defineComponent } from 'vue';

import { useDisplayElement } from '@/composables/hooks';
import { GRANT_TYPE_STYLE_GROUP } from '@/configurations';

import HActionButton from './HActionButton.vue';

export default defineComponent({
  name: 'HGrantTypeColumn',

  components: {
    HActionButton,
  },

  props: {
    items: { type: Array as PropType<Array<string>>, required: true },
  },

  setup(props) {
    const { icon, color, text } = useDisplayElement(GRANT_TYPE_STYLE_GROUP);

    return {
      icon,
      color,
      text,
    };
  },
});
</script>
