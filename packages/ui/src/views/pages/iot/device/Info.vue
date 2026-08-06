<template>
  <h-information-form-layout :title="title" :overlay="overlay" @cancel="onReturn">
    <template #header>
      <h-row>
        <h-column cols="3">
          <h-label-item label="产品：" justify="start">
            {{ editedItem.product ? editedItem.product.productName : '' }}
            <template #append>
              <h-icon-button icon="mdi-feature-search" tooltip="查看" variant="text"></h-icon-button>
            </template>
          </h-label-item>
        </h-column>
        <h-column cols="3">
          <h-label-item label="ProductKey：" justify="start">
            {{ editedItem.product ? editedItem.product.productKey : '' }}
            <template #append>
              <h-icon-button
                :disable="!isSupported"
                :icon="copied ? 'mdi-checkbox-marked-circle-auto-outline' : 'mdi-content-copy'"
                tooltip="复制"
                variant="text"
                @click="onCopy"
              ></h-icon-button>
            </template>
          </h-label-item>
        </h-column>
        <h-column cols="3">
          <h-label-item label="Device Secret：" justify="start">
            {{ visible ? editedItem.deviceSecret : '************' }}
            <template #append>
              <h-icon-button
                :icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                tooltip="显示"
                variant="text"
                @click="visible = !visible"
              ></h-icon-button>
            </template>
          </h-label-item>
        </h-column>

        <h-column></h-column>
      </h-row>
    </template>
    <q-card>
      <q-tabs v-model="tab" align="left" class="text-grey" active-color="primary" indicator-color="primary">
        <q-tab label="设备信息" name="details"></q-tab>
        <q-tab label="物模型数据" name="specification"></q-tab>
        <q-tab label="设备影子" name="shadow"></q-tab>
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab">
        <q-tab-panel name="details">
          <h-device-information-tab v-model="editedItem"></h-device-information-tab>
        </q-tab-panel>
        <q-tab-panel name="specification">
          <h-device-specification-tab v-model="editedItem"></h-device-specification-tab>
        </q-tab-panel>
        <q-tab-panel name="shadow">
          <h-device-shadow-tab v-model="editedItem"></h-device-shadow-tab>
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </h-information-form-layout>
</template>

<script setup lang="ts">
import type { DeviceEntity } from '@herodotus/api';

import { useClipboard } from '@vueuse/core';

import { API, PAGE_NAME } from '@/configurations';
import { useTableItem } from '@/composables/hooks';

import { HDeviceInformationTab, HDeviceSpecificationTab, HDeviceShadowTab } from './components';

defineOptions({
  name: PAGE_NAME.IOT_DEVICE_INFO,
  components: { HDeviceInformationTab, HDeviceSpecificationTab, HDeviceShadowTab },
});

const { copy, copied, isSupported } = useClipboard({ legacy: true });
const { editedItem, overlay, title, onReturn } = useTableItem<DeviceEntity>(
  API.core.iotDevice(),
  PAGE_NAME.IOT_DEVICE_INFO,
);

const visible = shallowRef(false);
const tab = shallowRef('details');
const isShowTable = shallowRef(false);

const onCopy = () => {
  const info = {
    productKey: editedItem.value.product.productKey,
    deviceName: editedItem.value.deviceName,
    deviceSecret: editedItem.value.deviceSecret,
  };

  copy(JSON.stringify(info));
};

onMounted(() => {});
</script>
