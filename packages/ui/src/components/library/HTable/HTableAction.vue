<template>
  <q-toolbar>
    <h-icon-button
      :icon="settings.display.table.dense ? 'mdi-arrow-expand-vertical' : 'mdi-arrow-collapse-vertical'"
      :tooltip="settings.display.table.dense ? '宽松' : '紧凑'"
      color="primary"
      @click="settings.display.table.dense = !settings.display.table.dense"
    ></h-icon-button>
    <q-btn flat round icon="mdi-view-grid-outline" color="primary">
      <q-tooltip>表格边框</q-tooltip>
      <q-menu auto-close>
        <q-list>
          <h-list-item
            label="显示水平边框"
            icon="mdi-reorder-horizontal"
            :active="separator === 'horizontal'"
            @click="onHorizontal()"
          ></h-list-item>
          <h-list-item
            label="显示垂直边框"
            icon="mdi-reorder-vertical"
            :active="separator === 'vertical'"
            @click="onVertical()"
          ></h-list-item>
          <h-list-item
            label="显示所有边框"
            icon="mdi-grid"
            :active="separator === 'cell'"
            @click="onCell()"
          ></h-list-item>
          <h-list-item
            label="不显示边框"
            icon="mdi-grid-off"
            :active="separator === 'none'"
            @click="onNone()"
          ></h-list-item>
        </q-list>
      </q-menu>
    </q-btn>
    <h-icon-button
      :icon="fullscreen ? 'mdi-arrow-collapse-all' : 'mdi-arrow-expand-all'"
      :tooltip="fullscreen ? '退出全屏' : '全屏显示'"
      color="primary"
      @click="toggleFullscreen()"
    ></h-icon-button>
  </q-toolbar>
</template>

<script setup lang="ts">
import type { QTableSeparatorProps } from '@/composables/declarations';

import { useSettingsStore } from '@herodotus/framework';

interface Props {
  fullscreen?: boolean;
}

withDefaults(defineProps<Props>(), {
  fullscreen: false,
});

const separator = defineModel('separator', {
  type: String as PropType<QTableSeparatorProps>,
  default: 'horizontal',
});

const emit = defineEmits<{
  toggleFullscreen: [];
}>();

const settings = useSettingsStore();

const toggleFullscreen = () => {
  emit('toggleFullscreen');
};

const onHorizontal = () => {
  separator.value = 'horizontal';
};

const onVertical = () => {
  separator.value = 'vertical';
};

const onCell = () => {
  separator.value = 'cell';
};

const onNone = () => {
  separator.value = 'none';
};
</script>
