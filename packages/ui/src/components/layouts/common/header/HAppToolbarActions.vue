<template>
  <div class="q-gutter-sm row items-center no-wrap">
    <h-app-widget-actions></h-app-widget-actions>
    <q-btn
      round
      dense
      flat
      color="grey-8"
      @click="$q.fullscreen.toggle()"
      :icon="$q.fullscreen.isActive ? 'mdi-fullscreen-exit' : 'mdi-fullscreen'"
      v-if="$q.screen.gt.sm"
    >
      <q-tooltip>{{ $q.fullscreen.isActive ? "退出全屏" : "全屏显示" }}</q-tooltip>
    </q-btn>
    <h-app-message-actions v-if="message"></h-app-message-actions>

    <q-btn round dense flat color="grey-8" icon="settings" @click="application.rightDrawer = !application.rightDrawer">
      <q-tooltip>设置</q-tooltip>
    </q-btn>

    <q-btn v-if="supportTesting" round dense flat color="grey-8" icon="mdi-ab-testing" to="/iot-testing">
      <q-tooltip>功能测试</q-tooltip>
    </q-btn>

    <q-btn-dropdown stretch flat class="q-mx-none">
      <template v-slot:label>
        <h-user-avatar size="28px" from-store></h-user-avatar>
      </template>
      <q-list>
        <q-item-label header>功能菜单</q-item-label>
        <h-list-item icon="mdi-home-account" label="个人主页" to="/foundation/profile"></h-list-item>
        <h-list-item icon="mdi-cog-outline" label="个人设置" to="/foundation/account"></h-list-item>
        <q-separator inset spaced />
        <q-item-label header>系统操作</q-item-label>
        <h-list-item icon="mdi-logout" label="退出系统" @click="signOut()"></h-list-item>
      </q-list>
    </q-btn-dropdown>
  </div>
</template>

<script setup lang="ts">
import { SignOutUtilities, useApplicationStore, useElementStore } from "@herodotus/framework";
import HAppMessageActions from "./HAppMessageActions.vue";

import HAppWidgetActions from "./HAppWidgetActions.vue";
import HUserAvatar from "../avatar/HUserAvatar.vue";

defineOptions({ name: "HAppToolbarActions", components: { HAppWidgetActions, HAppMessageActions, HUserAvatar } });

defineProps({
  message: { type: Boolean, default: false },
});

const application = useApplicationStore();
const element = useElementStore();

const signOut = () => {
  SignOutUtilities.getInstance().signOutWithDialog();
};

const supportTesting = computed(() => {
  return element.supportTesting;
});
</script>
