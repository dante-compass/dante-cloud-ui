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

      <h-dictionary-select v-model="editedItem.retain" dictionary="Retain" label="保留数据"></h-dictionary-select>
    </q-form>
  </h-center-form-layout>
</template>

<script setup lang="ts">
import type { MqttAuthorityEntity } from "@herodotus/api";

import { useTableItem } from "@/composables/hooks";
import { PAGE_NAME, API } from "@/configurations";

defineOptions({ name: PAGE_NAME.THINGS_MQTT_AUTHORITY_CONTENT });

const mqttAuthorityForm = ref();

const { editedItem, title, overlay, saveOrUpdate, onReturn } = useTableItem<MqttAuthorityEntity>(
  API.core.iotMqttAuthority(),
  PAGE_NAME.THINGS_MQTT_AUTHORITY_CONTENT,
);

const onSave = async () => {
  const { valid } = await mqttAuthorityForm.value.validate();
  if (valid) {
    saveOrUpdate();
  }
};
</script>
