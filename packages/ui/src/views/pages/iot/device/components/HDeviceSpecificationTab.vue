<template>
  <q-card flat>
    <q-card-section>
      <!-- <v-tabs v-model="tab" class="font-weight-bold">
        <v-tab text="运行状态" value="properties"></v-tab>
        <v-tab text="事件管理" value="events"></v-tab>
        <v-tab text="服务调用" value="services"></v-tab>
      </v-tabs>

      <v-divider></v-divider>

      <v-tabs-window v-model="tab">
        <v-tabs-window-item value="properties">
          <h-specification-property-tab
            :product-id="productId"
            :product-key="productKey"
            :device-name="deviceName"
          ></h-specification-property-tab>
        </v-tabs-window-item>
        <v-tabs-window-item value="events">
          <h-specification-event-tab
            :product-id="productId"
            :product-key="productKey"
            :device-name="deviceName"
          ></h-specification-event-tab>
        </v-tabs-window-item>
        <v-tabs-window-item value="services">
          <h-specification-service-tab
            :product-id="productId"
            :product-key="productKey"
            :device-name="deviceName"
          ></h-specification-service-tab>
        </v-tabs-window-item>
      </v-tabs-window> -->
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
