<template>
  <q-dialog v-model="openDialog" persistent>
    <q-card class="q-py-none" style="min-width: 500px">
      <q-card-section class="row items-center">
        <div class="text-h6">设置下载证书格式</div>
        <q-space />
        <q-btn icon="close" flat round dense v-close-popup />
      </q-card-section>

      <q-card-section>
        <q-form ref="createBucketForm">
          <h-text-field
            v-model="editedItem.bucketName"
            name="name"
            label="存储桶名称* "
            placeholder="请输入存储桶名称"
            dense
            :rules="[
              (v: string) => !!v || '存储桶名称不能为空，请输入存储桶名称！',
              (v: string) => regxRule(v) || '存储桶名称只能为小字母、数字、点或横线，最多60个字符',
            ]"
          ></h-text-field>
          <h-label text="功能:" size="subtitle-1" weight="bolder" align="left" class="q-mb-sm"></h-label>
          <q-separator class="q-my-md"></q-separator>
          <h-switch v-model="editedItem.objectLockEnabled" label="是否开启对象锁定"></h-switch>
        </q-form>
      </q-card-section>

      <q-card-actions align="right" class="text-primary">
        <q-btn label="取消" color="red" v-close-popup @click="openDialog = !openDialog" />
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
import type { CreateBucketArgument, CreateBucketResult } from '@herodotus-cloud/apis';

import { toast } from '@herodotus-cloud/core';

import { API } from '@/configurations';

defineOptions({ name: 'HCreateBucketDialog' });

const emit = defineEmits<{
  success: [];
}>();

const openDialog = defineModel({
  type: Boolean,
  default: false,
  required: true,
});

const loading = shallowRef(false);

const editedItem = ref({ objectLockEnabled: false }) as Ref<CreateBucketArgument>;

const regxRule = (content: string) => {
  const regx = /^[a-z0-9][a-z0-9\.\-]{1,61}[a-z0-9]$/;
  return regx.test(content);
};

const onSave = () => {
  loading.value = true;
  API.core
    .ossBucket()
    .createBucket(editedItem.value)
    .then((response) => {
      const result = response.data as HttpResult<CreateBucketResult>;
      loading.value = false;
      openDialog.value = false;
      if (result.successful) {
        if (result.message) {
          toast.success(result.message);
        } else {
          toast.success('操作成功！');
        }
        emit('success');
      } else {
        toast.warning('服务端异常！');
      }
    })
    .catch(() => {
      loading.value = false;
      openDialog.value = false;
    });
};
</script>
