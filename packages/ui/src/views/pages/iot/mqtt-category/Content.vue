<template>
  <h-center-form-layout :entity="editedItem" :title="title" :overlay="overlay" @save="onSave()" @cancel="onReturn">
    <q-form ref="mqttCategoryForm" validate-on="blur lazy">
      <h-text-field
        v-model.lazy="editedItem.name"
        label="主题类别名称 *"
        placeholder="请输入主题类别名称"
        :rules="[
          (v: string) => !!v || '主题类别名称不能为空',
          (v: string) => (v && v.length >= 5) || '主题类别名称至少5个字符',
        ]"
      ></h-text-field>

      <h-dictionary-select
        v-model="editedItem.area"
        dictionary="Area"
        label="主题使用区域 *"
        :rules="[(v: string) => !!v || '主题使用区域不能为空']"
      ></h-dictionary-select>

      <h-dictionary-select
        v-model="editedItem.action"
        dictionary="Action"
        label="主题操作"
        :rules="[(v: string) => !!v || '主题操作不能为空']"
      ></h-dictionary-select>

      <h-dictionary-select
        v-model="editedItem.purpose"
        dictionary="Purpose"
        label="主题用途"
        :rules="[(v: string) => !!v || '主题用途不能为空']"
      ></h-dictionary-select>
    </q-form>
  </h-center-form-layout>
</template>

<script setup lang="ts">
import type { MqttCategoryEntity } from "@herodotus/api";

import { useTableItem } from "@/composables/hooks";
import { API } from "@/configurations";

defineOptions({ name: "ThingsMqttCategoryContent" });

const mqttCategoryForm = ref();

const { editedItem, title, overlay, saveOrUpdate, onReturn } = useTableItem<MqttCategoryEntity>(
  API.core.iotMqttCategory(),
);

const onSave = async () => {
  const { valid } = await mqttCategoryForm.value.validate();
  if (valid) {
    saveOrUpdate();
  }
};
</script>
