<template>
  <h-center-form-layout :entity="editedItem" :title="title" :operation="operation" @save="onSave()">
    <h-product-select v-model="editedItem.product" label="所属产品" placeholder="请设置所属产品"></h-product-select>
    <h-text-field v-model="editedItem.deviceName" label="设备名称" placeholder="请输入设备名称"></h-text-field>
  </h-center-form-layout>
</template>

<script setup lang="ts">
import type { DeviceEntity } from "@herodotus/api";
import { API } from "@/configurations";

import { useTableItem } from "@/composables/hooks";
import { HCenterFormLayout } from "@/components";
import { HProductSelect } from "@/composables/iot";

defineOptions({
  name: "IotDeviceContent",
  components: {
    HCenterFormLayout,
    HProductSelect,
  },
});

const { editedItem, operation, title, saveOrUpdate } = useTableItem<DeviceEntity>(API.core.i());

const onSave = () => {
  saveOrUpdate();
};
</script>
