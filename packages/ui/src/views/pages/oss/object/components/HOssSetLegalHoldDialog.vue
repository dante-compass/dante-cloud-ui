<template>
  <q-dialog v-model="open" persistent>
    <q-card class="q-py-none" style="min-width: 500px">
      <q-card-section class="row items-center">
        <div class="text-h6">设置对象留存策略</div>
        <q-space />
        <q-btn icon="close" flat round dense v-close-popup />
      </q-card-section>

      <q-card-section class="q-py-none">
        <h-switch v-model="editedItem.legalHoldEnabled" label="是否开启对象锁定"></h-switch>
      </q-card-section>

      <q-card-actions align="right" class="text-primary">
        <q-btn label="取消" color="red" v-close-popup @click="open = !open" />
        <q-btn label="确认" color="primary" @click="onSave()" />
      </q-card-actions>

      <q-inner-loading :showing="loading">
        <q-spinner-dots size="50px" color="primary" />
      </q-inner-loading>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import type { HttpResult } from '@herodotus-cloud/core';
import type { GetObjectAttributesResult, PutObjectLegalHoldArgument, PutBucketPolicyResult } from '@herodotus-cloud/apis';

import { isEmpty } from 'lodash-es';
import { toast } from '@herodotus-cloud/core';

import { API } from '@/configurations';

defineOptions({ name: 'HOssSetLegalHoldDialog' });

interface Props {
  attributes: GetObjectAttributesResult;
}

const props = defineProps<Props>();

const open = defineModel({
  type: Boolean,
  default: false,
  required: true,
});

const loading = shallowRef(false);
const editedItem = ref({}) as Ref<PutObjectLegalHoldArgument>;

const onSave = async () => {
  loading.value = true;
  API.core
    .ossObject()
    .setObjectLegalHold(editedItem.value)
    .then((response) => {
      const result = response.data as HttpResult<PutBucketPolicyResult>;
      loading.value = false;
      open.value = false;
      if (result.successful) {
        if (result.message) {
          toast.success(result.message);
        } else {
          toast.success('操作成功！');
        }
      } else {
        toast.warning('服务端异常！');
      }
    })
    .catch(() => {
      loading.value = false;
      open.value = false;
    });
};

watch(
  () => props.attributes,
  (newValue) => {
    if (!isEmpty(newValue)) {
      editedItem.value.bucketName = newValue.bucketName;
      editedItem.value.objectName = newValue.objectName;
      editedItem.value.versionId = newValue.versionId;
      editedItem.value.legalHoldEnabled = newValue.lockLegalHold;
    }
  },
  { immediate: true },
);
</script>
