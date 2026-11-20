<template>
  <q-card flat>
    <q-card-section>
      <q-tabs v-model="tab" class="font-weight-bold">
        <q-tab text="运行状态" value="properties"></q-tab>
        <q-tab text="事件管理" value="events"></q-tab>
        <q-tab text="服务调用" value="services"></q-tab>
      </q-tabs>

      <q-separator></q-separator>

      <q-tab-panels v-model="tab">
        <q-tab-panel name="properties">
          <h-specification-property-tab
            :product-id="productId"
            :product-key="productKey"
            :device-name="deviceName"
          ></h-specification-property-tab>
        </q-tab-panel>
        <q-tab-panel name="events">
          <h-specification-event-tab
            :product-id="productId"
            :product-key="productKey"
            :device-name="deviceName"
          ></h-specification-event-tab>
        </q-tab-panel>
        <q-tab-panel name="services">
          <h-specification-service-tab
            :product-id="productId"
            :product-key="productKey"
            :device-name="deviceName"
          ></h-specification-service-tab>
        </q-tab-panel>
      </q-tab-panels>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import type { DeviceEntity } from '@herodotus/api';

import HSpecificationPropertyTab from './HSpecificationPropertyTab.vue';
import HSpecificationEventTab from './HSpecificationEventTab.vue';
import HSpecificationServiceTab from './HSpecificationServiceTab.vue';
import { isEmpty } from 'lodash-es';

defineOptions({
  name: 'HDeviceSpecificationTab',
  components: { HSpecificationPropertyTab, HSpecificationEventTab, HSpecificationServiceTab },
});

const entity = defineModel<DeviceEntity>({
  default: () => ({}) as DeviceEntity,
  required: true,
});

const tab = shallowRef('properties');
const productId = shallowRef('');
const productKey = shallowRef('');
const deviceName = shallowRef('');

watch(
  entity,
  (newValue) => {
    if (!isEmpty(newValue) && !isEmpty(newValue.product)) {
      productId.value = newValue.product.id;
      productKey.value = newValue.product.productKey;
      deviceName.value = newValue.deviceName;
    }
  },
  { immediate: true },
);
</script>
