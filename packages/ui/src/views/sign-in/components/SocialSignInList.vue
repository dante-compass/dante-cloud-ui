<template>
  <h-row justify="center" gutter="xs">
    <q-btn v-if="!hasConfig" round color="primary" icon="mdi-wechat" />
    <template v-else>
      <q-btn v-for="(value, key, index) in list" flat round :key="index" :href="value" target="_blank">
        <q-avatar size="30px">
          <img :src="getSocialLogo(key)" />
        </q-avatar>
      </q-btn>
    </template>
    <h-button
      color="primary"
      icon="mdi-login"
      round
      flat
      :href="authorizationCodeUrl"
      tooltip="授权码模式登录"
    ></h-button>
  </h-row>
</template>

<script setup lang="ts">
import { isEmpty } from 'lodash-es';
import { VARIABLES } from '@/configurations';
import { useImage } from '@/composables/hooks';
import { SecurityApiResources } from '@herodotus/framework';

defineOptions({ name: 'SocialSignInList' });

const { getSocialLogo } = useImage();

const list = ref({}) as Ref<Record<string, string>>;

const init = () => {
  SecurityApiResources.getInstance()
    .open()
    .getSocialList()
    .then((result) => {
      list.value = result.data as Record<string, string>;
    });
};

const hasConfig = computed(() => {
  return !isEmpty(list.value);
});

const authorizationCodeUrl = computed(() => {
  return SecurityApiResources.getInstance()
    .oauth2()
    .authorizationCodeRequestFlow(
      VARIABLES.getApiUrl(),
      VARIABLES.getRedirectUri(),
      'openid',
      VARIABLES.getAuthorizeUri(),
    );
});
onMounted(() => {
  init();
});
</script>
