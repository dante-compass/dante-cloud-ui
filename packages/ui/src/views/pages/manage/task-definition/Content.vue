<template>
  <h-center-form-layout :entity="editedItem" :title="title" :overlay="overlay" @save="onSave()" @cancel="onReturn">
    <q-form ref="mqttAuthorityForm" validate-on="blur lazy">
      <h-text-field
        v-model.lazy="editedItem.topic"
        label="Mqtt主题 *"
        placeholder="请输入Mqtt主题"
        :rules="[
          (v: string) => !!v || 'Mqtt主题不能为空',
          (v: string) => (v && v.length >= 5) || 'Mqtt主题至少5个字符',
        ]"
      ></h-text-field>

      <h-dictionary-select
        v-model="editedItem.action"
        dictionary="Action"
        label="主题操作"
        :rules="[(v: string) => !!v || '主题操作不能为空']"
      ></h-dictionary-select>

      <h-dictionary-select
        v-model="editedItem.permission"
        dictionary="Permission"
        label="主题权限 *"
        :rules="[(v: string) => !!v || '主题权限不能为空']"
      ></h-dictionary-select>

      <h-dictionary-select v-model="editedItem.qos" dictionary="Qos" label="Qos"></h-dictionary-select>

      <h-dictionary-toggle
        v-model="editedItem.backoff"
        dictionary="Backoff"
        label="保留数据"
        default-value="FIXED"
      ></h-dictionary-toggle>
      <template v-if="isExponential">
        <h-label text="最大重试间隔"></h-label>
        <h-duration v-model="editedItem.maxInterval"></h-duration>
      </template>
    </q-form>
  </h-center-form-layout>
</template>

<script setup lang="ts">
import type { TaskDefinitionEntity, TaskDefinitionConditions } from '@herodotus/api';

import { useTableItem } from '@/composables/hooks';
import { PAGE_NAME, API } from '@/configurations';

defineOptions({ name: PAGE_NAME.TASK_DEFINITION_CONTENT });

const mqttAuthorityForm = ref();

const { editedItem, title, overlay, saveOrUpdate, onReturn } = useTableItem<TaskDefinitionEntity>(
  API.core.taskDefinition(),
  PAGE_NAME.TASK_DEFINITION_CONTENT,
);

const isExponential = computed(() => {
  return editedItem.value.backoff === 'EXPONENTIAL';
});

const onSave = async () => {
  const { valid } = await mqttAuthorityForm.value.validate();
  if (valid) {
    saveOrUpdate();
  }
};
</script>
