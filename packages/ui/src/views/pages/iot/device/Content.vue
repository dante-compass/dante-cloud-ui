<template>
  <h-center-form-layout :entity="editedItem" :title="title" @save="onSave()" @cancel="onReturn">
    <!-- <h-product-select v-model="editedItem.product" label="所属产品" placeholder="请设置所属产品"></h-product-select> -->
    <h-text-field v-model="editedItem.deviceName" label="设备名称" placeholder="请输入设备名称"></h-text-field>
  </h-center-form-layout>
</template>

<script setup lang="ts">
import type { DeviceEntity } from "@herodotus/api";
import { PAGE_NAME, API } from "@/configurations";

import { useTableItem } from "@/composables/hooks";
import { HCenterFormLayout } from "@/components";
// import { HProductSelect } from "@/composables/iot";

defineOptions({ name: PAGE_NAME.IOT_DEVICE_CONTENT, components: { HCenterFormLayout } });

const { editedItem, title, saveOrUpdate, onReturn } = useTableItem<DeviceEntity>(
  API.core.iotDevice(),
  PAGE_NAME.IOT_DEVICE_CONTENT,
);

const onSave = () => {
  saveOrUpdate();
};
</script>
