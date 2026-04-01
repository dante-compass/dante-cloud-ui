<template>
  <q-item>
    <q-item-section v-if="item.avatar" avatar>
      <q-avatar>
        <img :src="item.avatar" />
      </q-avatar>
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ item.detail }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script lang="ts">
import type { AccessSourceEntity } from '@herodotus/api';

import { useSettingsStore } from '@herodotus/framework';

export default defineComponent({
  name: 'HBindingDetailColumn',

  props: {
    item: { type: Object as PropType<AccessSourceEntity>, required: true },
  },

  setup(props) {
    const settings = useSettingsStore();
    return {
      settings,
    };
  },
});
</script>
