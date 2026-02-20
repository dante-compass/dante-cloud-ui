<template>
  <q-dialog v-model="open" persistent>
    <q-card style="min-width: 500px">
      <q-card-section class="row items-center">
        <div class="text-h6">设置文件保留策略</div>
        <q-space />
        <q-btn icon="close" flat round dense v-close-popup />
      </q-card-section>

      <q-card-section class="q-py-none">
        <q-form ref="setRetentionForm">
          <h-label text="类型:" size="subtitle-1" weight="bolder" align="left" class="q-my-md"></h-label>
          <h-dictionary-toggle
            v-model="editedItem.retentionMode"
            dictionary="ObjectRetentionMode"
            default-value="COMPLIANCE"
          ></h-dictionary-toggle>
          <h-label text="时间:" size="subtitle-1" weight="bolder" align="left" class="q-my-md"></h-label>
          <q-input outlined v-model="editedItem.retainUntilDate" mask="date" :rules="['date']">
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                  <q-date v-model="editedItem.retainUntilDate">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </q-form>
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
import type {
  GetObjectAttributesResult,
  PutObjectRetentionArgument,
  PutBucketPolicyResult,
} from '@herodotus-cloud/apis';

import { isEmpty } from 'lodash-es';
import { toast } from '@herodotus-cloud/core';

import { API } from '@/configurations';

defineOptions({ name: 'HOssSetRetentionDialog' });

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
const setRetentionForm = ref();
const editedItem = ref({}) as Ref<PutObjectRetentionArgument>;

const onSave = async () => {
  const valid = await setRetentionForm.value.validate();
  if (valid) {
    loading.value = true;
    API.core
      .ossObject()
      .setObjectRetention(editedItem.value)
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
  }
};

watch(
  () => props.attributes,
  (newValue) => {
    if (!isEmpty(newValue)) {
      editedItem.value.bucketName = newValue.bucketName;
      editedItem.value.objectName = newValue.objectName;
      editedItem.value.versionId = newValue.versionId;
      editedItem.value.retainUntilDate = newValue.retainUntilDate;
      editedItem.value.retentionMode = newValue.retentionMode;
    }
  },
  { immediate: true },
);
</script>
