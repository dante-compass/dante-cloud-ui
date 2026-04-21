<template>
  <q-drawer v-model="application.rightDrawer" side="right" behavior="mobile" bordered :width="300">
    <q-toolbar>
      <q-toolbar-title>系统设置</q-toolbar-title>
      <q-btn flat @click="application.rightDrawer = !application.rightDrawer" round dense icon="mdi-close-box" />
    </q-toolbar>
    <q-separator></q-separator>
    <q-list dense>
      <h-divider label="全局主题" class="q-ma-sm" wider="end" :offset="2"></h-divider>
      <setting-switch
        v-model="settings.theme.mode"
        label="深色主题"
        :true-value="ThemeModeEnum.DARK"
        :false-value="ThemeModeEnum.LIGHT"
      ></setting-switch>
      <h-divider label="界面显示" class="q-ma-sm" wider="end" :offset="2"></h-divider>
      <setting-switch v-model="settings.display.showBreadcrumbs" label="面包屑"></setting-switch>
      <setting-switch v-model="settings.display.showBreadcrumbsIcon" label="面包屑图标"></setting-switch>
      <setting-switch v-model="settings.display.isTabsView" label="多标签页"></setting-switch>
    </q-list>
  </q-drawer>
</template>

<script setup lang="ts">
import { useSettingsStore, useApplicationStore } from "@herodotus/framework";
import { ThemeModeEnum } from "@herodotus/core";

import { SettingSwitch } from "../setting";

defineOptions({ name: "LayoutRightDrawer", components: { SettingSwitch } });

const application = useApplicationStore();
const settings = useSettingsStore();
</script>
