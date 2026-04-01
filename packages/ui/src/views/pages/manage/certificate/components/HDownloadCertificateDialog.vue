<template>
  <q-dialog v-model="openDialog" persistent>
    <q-card class="q-py-none" style="min-width: 500px">
      <q-card-section class="row items-center">
        <div class="text-h6">设置下载证书格式</div>
        <q-space />
        <q-btn icon="close" flat round dense v-close-popup />
      </q-card-section>

      <q-card-section>
        <h-label text="证书类别：" size="subtitle-1" weight="bolder" align="left" class="q-mb-sm"></h-label>
        <h-dictionary-toggle
          v-model="editedItem.certificateFileCategory"
          dictionary="CertificateFileCategory"
          default-value="KEY_STORE"
        ></h-dictionary-toggle>
        <q-separator class="q-my-md"></q-separator>
        <template v-if="showKeyStore">
          <h-label text="KeyStore 文件格式:" size="subtitle-1" weight="bolder" align="left" class="q-mb-sm"></h-label>
          <h-dictionary-toggle
            class="q-mb-sm"
            v-model="editedItem.keyStoreFormat"
            dictionary="KeyStoreFormat"
            default-value="JKS"
          ></h-dictionary-toggle>
          <h-label text="KeyStore 类别:" size="subtitle-1" weight="bolder" align="left" class="q-mb-sm"></h-label>
          <h-dictionary-select
            class="q-mb-sm"
            v-model="editedItem.keyStoreCategory"
            dictionary="KeyStoreCategory"
            dense
          ></h-dictionary-select>
        </template>
        <template v-if="showPrivateKey">
          <h-label text="私钥文件格式:" size="subtitle-1" weight="bolder" align="left" class="q-mb-sm"></h-label>
          <h-dictionary-toggle
            class="q-mb-sm"
            v-model="editedItem.pemPrivateKeyFormat"
            dictionary="PEMPrivateKeyFormat"
            default-value="KEY"
          ></h-dictionary-toggle>

          <v-switch v-model="editedItem.encryptPrivateKey" label="是否加密 PEM 中存储的私钥"></v-switch>
        </template>
        <template v-if="showCertificate">
          <h-label text="证书文件格式:" size="subtitle-1" weight="bolder" align="left" class="q-mb-sm"></h-label>
          <h-dictionary-toggle
            class="mb-md"
            v-model="editedItem.pemCertificateFormat"
            dictionary="PEMCertificateFormat"
            default-value="CRT"
          ></h-dictionary-toggle>
        </template>
      </q-card-section>

      <q-card-actions align="right" class="text-primary">
        <q-btn label="取消" color="red" v-close-popup />
        <q-btn label="确认" color="primary" @click="onSave()" />
      </q-card-actions>

      <q-inner-loading :showing="loading">
        <q-spinner-dots size="50px" color="primary" />
      </q-inner-loading>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import type { MgtCertificateFileRequest, MgtCertificateFileResponse } from '@herodotus/api';

import { toast } from '@herodotus/core';

import { API } from '@/configurations';
import { useOss } from '@/composables/hooks';

defineOptions({ name: 'HDownloadCertificateDialog' });

interface Props {
  certId: string | undefined;
}

const props = defineProps<Props>();

const openDialog = defineModel({
  type: Boolean,
  default: false,
  required: true,
});

const loading = shallowRef(false);

const { download } = useOss();

const editedItem = ref({}) as Ref<MgtCertificateFileRequest>;

const showKeyStore = computed(() => {
  return editedItem.value.certificateFileCategory === 'KEY_STORE';
});

const showPrivateKey = computed(() => {
  return editedItem.value.certificateFileCategory === 'PRIVATE_KEY';
});

const showCertificate = computed(() => {
  return editedItem.value.certificateFileCategory === 'CERTIFICATE';
});

const onSave = () => {
  loading.value = true;
  editedItem.value.certId = props.certId as string;
  API.core
    .mgtCertificateFile()
    .saveOrUpdate(editedItem.value)
    .then((response) => {
      const data = response.data as MgtCertificateFileResponse;
      loading.value = false;
      openDialog.value = false;
      if (data) {
        download(data.bucketName, data.fileName, data.fileSize);
      }
    })
    .catch(() => {
      toast.error('下载失败');
    });
};

onUnmounted(() => {
  editedItem.value = {} as MgtCertificateFileRequest;
});
</script>
