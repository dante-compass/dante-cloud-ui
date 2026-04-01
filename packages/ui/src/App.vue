<template>
  <router-view v-if="isRouterAlive"></router-view>
</template>

<script setup lang="ts">
import { watch, nextTick, provide, onMounted, onUnmounted, shallowRef } from 'vue';
import { useQuasar } from 'quasar';
import { VARIABLES } from '@/configurations';
import { refreshTabInjectionKey } from '@/composables/symbols';
import { useWebSocketMessage } from '@/composables/hooks';
import { useAuthenticationStore, useSettingsStore } from '@herodotus/framework';

defineOptions({
  name: 'App',
});

const settings = useSettingsStore();
const authentication = useAuthenticationStore();
const $q = useQuasar();
const gapTime = shallowRef(0);
const beforeUnloadTime = shallowRef(0);
const { connect, disconnect } = useWebSocketMessage();

// 局部组件刷新
const isRouterAlive = shallowRef(true);
const refreshTab = () => {
  isRouterAlive.value = false;
  nextTick(() => {
    isRouterAlive.value = true;
  });
};
provide(refreshTabInjectionKey, refreshTab);

watch(
  () => settings.isDark,
  (newValue: boolean) => {
    $q.dark.set(newValue);
  },
);

const beforeUnloadHandler = (e: BeforeUnloadEvent) => {
  beforeUnloadTime.value = new Date().getTime();
};

const pageTransitionHandler = (e: PageTransitionEvent) => {
  gapTime.value = new Date().getTime() - beforeUnloadTime.value;
  // 刷新时onbeforeunload与onunload的时间差一般都远大于5
  // 浏览器关闭
  // 判断是窗口关闭还是刷新 毫秒数判断 网上大部分写的是5
  if (gapTime.value <= 10) {
    if (authentication.token) {
      authentication.signOut();
    }
    localStorage.clear();
    sessionStorage.clear();
  } else {
    return confirm('确定要离开本系统么？');
  }
};

onMounted(() => {
  if (authentication.token) {
    connect();
  }
  if (!VARIABLES.isAutoRefreshToken()) {
    // 监听浏览器关闭
    window.addEventListener('beforeunload', (e) => beforeUnloadHandler(e));
    window.addEventListener('pagehide', (e) => pageTransitionHandler(e));
  }
});

onUnmounted(() => {
  if (authentication.token) {
    disconnect();
  }
  if (!VARIABLES.isAutoRefreshToken()) {
    window.removeEventListener('beforeunload', (e) => beforeUnloadHandler(e));
    window.addEventListener('pagehide', (e) => pageTransitionHandler(e));
  }
});
</script>

<style lang="scss">
h2 {
  line-height: unset !important;
}

.swal2-container {
  z-index: 10000 !important;
}
</style>
