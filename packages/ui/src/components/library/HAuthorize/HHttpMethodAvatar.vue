<template>
  <q-item-section avatar>
    <q-avatar :color="color(method)" text-color="white" :icon="icon(method)"></q-avatar>
  </q-item-section>
</template>

<script lang="ts">
import type { HttpMethod } from '@herodotus/core';

import { useDisplayElement } from '@/composables/hooks';
import { CONSTANTS } from '@/configurations';

export default defineComponent({
  name: 'HHttpMethodAvatar',

  props: {
    method: { type: String as PropType<HttpMethod>, required: true },
  },

  setup() {
    const { icon, color } = useDisplayElement(CONSTANTS.HTTP_METHOD_STYLE_GROUP);

    return {
      color,
      icon,
    };
  },
});
</script>
