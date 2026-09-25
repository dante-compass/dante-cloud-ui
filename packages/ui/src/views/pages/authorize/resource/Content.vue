<template>
  <h-center-form-layout :entity="editedItem" :title="title" :overlay="overlay" @save="onSave()" @cancel="onReturn">
    <q-form ref="resourceForm">
      <h-text-field
        v-model="editedItem.resourceName"
        label="资源名称 *"
        placeholder="请输入资源名称"
        lazy-rules
        :rules="[
          (v: string) => !!v || '资源名称不能为空',
          (v: string) => (v && v.length >= 5) || '资源名称至少5个字符',
        ]"
      ></h-text-field>

      <h-text-field
        v-model="editedItem.resourceCode"
        label="资源代码 * "
        placeholder="请输入资源代码"
        lazy-rules
        :rules="[
          (v: string) => !!v || '资源代码不能为空',
          (v: string) => (v && v.length >= 5) || '资源代码至少5个字符',
          (v: string) => isUniqueRule(v),
        ]"
      ></h-text-field>
    </q-form>
  </h-center-form-layout>
</template>

<script setup lang="ts">
import type { OAuth2ResourceEntity } from '@herodotus/api';

import { PAGE_NAME, API } from '@/configurations';
import { useTableItem } from '@/composables/hooks';

import { HCenterFormLayout } from '@/components';

defineOptions({ name: PAGE_NAME.OAUTH2_RESOURCE_CONTENT });

const resourceForm = ref();

const { editedItem, title, overlay, saveOrUpdate, onReturn } = useTableItem<OAuth2ResourceEntity>(
  API.core.oauth2Resource(),
  PAGE_NAME.OAUTH2_RESOURCE_CONTENT,
);

const validateResourceCode = async (resourceCode: string) => {
  return await new Promise((resolve, reject) => {
    if (resourceCode) {
      API.core
        .oauth2Resource()
        .fetchByResourceCode(resourceCode)
        .then((result) => {
          let resource = result.data as OAuth2ResourceEntity;
          // 如果能够查询到username
          // 如果该username 对应的 userId 与当前 editedItem中的userId相同
          // 则认为是编辑状态，而且username 没有变化，那么就校验通过。
          // 目前能想到的解决新建空值、编辑是原值等校验问题的最优解
          resolve(!(resource && resource.resourceId !== editedItem.value.resourceId));
        });
    } else {
      reject(false);
    }
  });
};

const isUniqueRule = (resourceCode: string) => {
  return validateResourceCode(resourceCode)
    .then((validate) => {
      if (validate) {
        return true;
      } else {
        return '资源代码值已被占用，请改用其它资源代码';
      }
    })
    .catch(() => {
      return '后端服务暂时不可用';
    });
};

const onSave = async () => {
  const { success } = await resourceForm.value.validate();

  if (success) {
    saveOrUpdate();
  }
};
</script>
