<template>
  <h-dialog
    v-model="openDialog"
    title="调用设备服务"
    :loading="loading"
    max-width="40%"
    @confirm="onSave"
    @cancel="onCancel"
  >
    <v-form ref="deviceServiceForm">
      <h-service-control v-model="entity" :arguments="arguments"></h-service-control>
    </v-form>
  </h-dialog>
</template>

<script setup lang="ts">
import type { TslArgumentEntity } from '@herodotus/api';

import { isEmpty, get } from 'lodash-es';
import { toast } from '@herodotus/core';
import { API } from '@/configurations';
import { useTslEntity } from '../../composables/hooks';

import { HServiceControl } from './tsl';

defineOptions({ name: 'HDeviceServiceDialog', components: { HServiceControl } });

interface Props {
  productKey: string;
  deviceName: string;
  identifier?: string;
  arguments: TslArgumentEntity[];
}

const props = defineProps<Props>();

const openDialog = defineModel<boolean>({
  required: true,
});

const { createDefaultValue } = useTslEntity();

const deviceServiceForm = ref();
const entity = ref({}) as Ref<Record<string, any>>;
const loading = shallowRef(false);

watch(
  () => props.arguments,
  (newValue) => {
    if (!isEmpty(newValue)) {
      if (isEmpty(entity.value)) {
        // 如果 model 为空，则生成属性以及对应的默认值
        entity.value = Object.fromEntries(newValue.map((item) => [item.identifier, createDefaultValue(item.type)]));
      } else {
        // 如果 model 有值，则根据 identifier 取到对应的值，并设置给 entity。找不到对应属性则设置为默认值。
        entity.value = Object.fromEntries(
          newValue.map((item) => [item.identifier, get(entity.value, item.identifier, createDefaultValue(item.type))]),
        );
      }
    }
  },
  { immediate: true, deep: true },
);

const onSave = async () => {
  const { valid } = await deviceServiceForm.value.validate();
  if (valid) {
    loading.value = true;
    if (props.productKey && props.deviceName) {
      if (props.identifier) {
        if (props.identifier === 'set') {
          API.core
            .iotTslFunction()
            .set({ productKey: props.productKey, deviceName: props.deviceName, params: entity.value })
            .then(() => {
              loading.value = false;
              openDialog.value = false;
              toast.success('发送请求成功！');
            })
            .catch(() => {
              loading.value = false;
              openDialog.value = false;
              toast.error('发送请求失败！');
            });
        } else {
          API.core
            .iotTslFunction()
            .invoke({
              productKey: props.productKey,
              deviceName: props.deviceName,
              identifier: props.identifier,
              params: entity.value,
            })
            .then(() => {
              loading.value = false;
              openDialog.value = false;
              toast.success('发送请求成功！');
            })
            .catch(() => {
              loading.value = false;
              openDialog.value = false;
              toast.error('发送请求失败！');
            });
        }
      }
    }
  }
};

const onCancel = () => {
  entity.value = {};
  openDialog.value = false;
};
</script>
