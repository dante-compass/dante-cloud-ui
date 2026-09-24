<template>
  <h-center-form-layout :entity="editedItem" :title="title" :overlay="overlay" @save="onSave()" @cancel="onReturn">
    <q-form ref="protectedResourceMetadataForm">
      <h-text-field
        v-model="editedItem.metadataName"
        label="保护资源名称 *"
        placeholder="请输入保护资源名称"
        lazy-rules
        :rules="[
          (v: string) => !!v || '保护资源名称不能为空',
          (v: string) => (v && v.length >= 5) || '保护资源至少5个字符',
        ]"
      ></h-text-field>

      <h-text-field
        v-model="editedItem.metadataCode"
        label="保护资源代码 * "
        placeholder="请输入保护资源代码"
        lazy-rules
        :rules="[
          (v: string) => !!v || '保护资源代码不能为空',
          (v: string) => (v && v.length >= 5) || '保护资源代码至少5个字符',
          (v: string) => isUniqueRule(v),
        ]"
      ></h-text-field>
    </q-form>
  </h-center-form-layout>
</template>

<script setup lang="ts">
import type { OAuth2ResourceIndicatorEntity, OAuth2ProtectedResourceMetadataEntity } from '@herodotus/api';

import { PAGE_NAME, API } from '@/configurations';
import { useTableItem } from '@/composables/hooks';

import { HCenterFormLayout } from '@/components';

defineOptions({ name: PAGE_NAME.OAUTH2_PROTECTED_RESOURCE_METADATA_CONTENT });

const { editedItem, title, overlay, saveOrUpdate, onReturn } = useTableItem<OAuth2ProtectedResourceMetadataEntity>(
  API.core.oauth2ProtectedResourceMetadata(),
  PAGE_NAME.OAUTH2_PROTECTED_RESOURCE_METADATA_CONTENT,
);

const indicatorsLoading = shallowRef(false);
const indicators = ref([]) as Ref<Array<OAuth2ResourceIndicatorEntity>>;

const validateMetadataCode = async (metadataCode: string) => {
  return await new Promise((resolve, reject) => {
    if (metadataCode) {
      API.core
        .oauth2ProtectedResourceMetadata()
        .fetchByMetadataCode(metadataCode)
        .then((result) => {
          let metadata = result.data as OAuth2ProtectedResourceMetadataEntity;
          // 如果能够查询到username
          // 如果该username 对应的 userId 与当前 editedItem中的userId相同
          // 则认为是编辑状态，而且username 没有变化，那么就校验通过。
          // 目前能想到的解决新建空值、编辑是原值等校验问题的最优解
          resolve(!(metadata && metadata.metadataId !== editedItem.value.metadataId));
        });
    } else {
      reject(false);
    }
  });
};

const isUniqueRule = (metadataCode: string) => {
  return validateMetadataCode(metadataCode)
    .then((validate) => {
      if (validate) {
        return true;
      } else {
        return '保护资源代码已被占用，请改用其它角色保护资源代码';
      }
    })
    .catch(() => {
      return '后端服务暂时不可用';
    });
};

const loadIndicators = () => {
  indicatorsLoading.value = true;
  API.core
    .oauth2ResourceIndicator()
    .fetchAll()
    .then((result) => {
      if (result.data) {
        indicators.value = result.data;
      }
      indicatorsLoading.value = false;
    })
    .catch((error) => {
      indicatorsLoading.value = false;
    });
};

onMounted(() => {
  loadIndicators();
});

const protectedResourceMetadataForm = useTemplateRef('protectedResourceMetadataForm');

const onSave = async () => {
  const { success } = await protectedResourceMetadataForm.value?.validate();

  if (success) {
    saveOrUpdate();
  }
};
</script>
