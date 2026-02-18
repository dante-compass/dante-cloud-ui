<template>
  <q-uploader ref="uploader" auto-upload :factory="onUpload" class="full-width" @uploaded="onFileUploaded" />
</template>

<script setup lang="ts">
import { QUploader } from 'quasar';

import type { QUploaderFactoryObject, QUploaderInfo } from '@/composables/declarations';

import { isEmpty } from 'lodash-es';
import { useAuthenticationStore } from '@herodotus-cloud/framework-kernel';
import { API } from '@/configurations';

defineOptions({ name: 'HSimpleUploader' });

interface Props {
  open?: boolean;
  loading?: boolean;
  bucketName: string;
}

const props = defineProps<Props>();

const executedUpload = defineModel<boolean>({
  required: true,
});

const authStore = useAuthenticationStore();

const uploader = ref();

const onUpload = (files: readonly File[]): Promise<QUploaderFactoryObject> => {
  return new Promise((resolve, reject) => {
    const token: string = authStore.token;
    resolve({
      url: API.core.ossObject().getUploadAddress(),
      method: 'POST',
      fieldName: 'file',
      headers: [{ name: 'Authorization', value: `Bearer ${token}` }],
      formFields: [{ name: 'bucketName', value: props.bucketName }],
    });
  });
};

const onFileUploaded = (info: QUploaderInfo) => {
  if (!isEmpty(info.files)) {
    executedUpload.value = true;
  } else {
    executedUpload.value = false;
  }
};
</script>
