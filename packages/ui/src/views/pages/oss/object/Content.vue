<template>
  <div>
    <q-card class="q-mb-md">
      <q-toolbar>
        <h-button flat round dense color="red" icon="mdi-arrow-left-box" tooltip="返回" @click="onFinish()"></h-button>
        <q-toolbar-title> 设置文件属性 </q-toolbar-title>
      </q-toolbar>
    </q-card>

    <h-row gutter="md" gutter-col horizontal>
      <h-column lg="2" md="2" sm="6" xs="12">
        <q-card>
          <q-card>
            <q-card-section>
              <div class="text-subtitle2">{{ currentObjectName }}</div>
            </q-card-section>
            <q-card-section>
              <q-list bordered separator>
                <q-item-label header>操作：</q-item-label>
                <q-item
                  :disable="isDisableAction"
                  clickable
                  v-ripple
                  @click="openSetLegalHoldDialog = !openSetLegalHoldDialog"
                >
                  <q-item-section avatar>
                    <q-icon name="mdi-hammer-screwdriver" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>设置文件留存(Legal Hold)</q-item-label>
                  </q-item-section>
                  <q-item-section side>
                    <q-icon :name="!isDisableAction ? 'mdi-chevron-right' : ''" />
                  </q-item-section>
                </q-item>
                <q-item
                  :disable="isDisableAction"
                  clickable
                  v-ripple
                  @click="openSetRetentionDialog = !openSetRetentionDialog"
                >
                  <q-item-section avatar>
                    <q-icon name="mdi-calendar-today" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>设置文件保存(Retention)</q-item-label>
                  </q-item-section>
                  <q-item-section side>
                    <q-icon :name="!isDisableAction ? 'mdi-chevron-right' : ''" />
                  </q-item-section>
                </q-item>
                <q-item :disable="isDisableAction" clickable v-ripple @click="showVersions = !showVersions">
                  <q-item-section avatar>
                    <q-icon name="mdi-layers-triple" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>设置文件保存(Retention)</q-item-label>
                  </q-item-section>
                  <q-item-section side>
                    <q-icon :name="!isDisableAction ? 'mdi-chevron-right' : ''" />
                  </q-item-section>
                </q-item>
              </q-list>
              <q-btn
                class="full-width q-mt-md"
                outline
                icon="mdi-delete"
                color="red"
                label="删除"
                @click="onDeleteObject"
              />
            </q-card-section>
          </q-card>
          <q-card>
            <q-card-section>
              <div class="text-subtitle2">文件(Object)信息</div>
            </q-card-section>
            <q-separator></q-separator>
            <q-card-section>
              <q-list>
                <q-item>
                  <q-item-section>
                    <q-item-label>文件名称：</q-item-label>
                    <q-item-label caption>{{ currentObjectName }}</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item>
                  <q-item-section>
                    <q-item-label>文件大小：</q-item-label>
                    <q-item-label caption>{{ humanObjectSize(editedItem.size) }}</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item>
                  <q-item-section>
                    <q-item-label>最后更新时间：</q-item-label>
                    <q-item-label caption>{{ defaultFormat(editedItem.lastModified) }}</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item>
                  <q-item-section>
                    <q-item-label>文件留存(Legal Hold)：</q-item-label>
                    <q-item-label caption>{{ humanLegalHold(attributes.lockLegalHold) }}</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item>
                  <q-item-section>
                    <q-item-label>文件保存(Retention)：</q-item-label>
                    <q-item-label caption>{{ humanRetentionMode(attributes.retentionMode) }}</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-card-section>
          </q-card>
        </q-card>
      </h-column>
      <h-column lg="10" md="10" sm="6" xs="12">
        <h-oss-object-versions
          v-if="showVersions"
          :bucket-name="currentBucketName"
          :object-name="currentObjectName"
          :show-versions="showVersions"
        ></h-oss-object-versions>
      </h-column>
    </h-row>
    <h-oss-set-retention-dialog v-model="openSetRetentionDialog" :attributes="attributes"></h-oss-set-retention-dialog>
    <h-oss-set-legal-hold-dialog
      v-model="openSetLegalHoldDialog"
      :attributes="attributes"
    ></h-oss-set-legal-hold-dialog>
  </div>
</template>

<script setup lang="ts">
import type { ObjectDomain, GetObjectAttributesResult } from '@herodotus-cloud/apis';

import { isEmpty } from 'lodash-es';
import { notify, toast } from '@herodotus-cloud/core';
import { useEditFinish } from '@herodotus-cloud/framework-kernel';
import { useBaseTableItem, useDateTime, useDictionary, useOss } from '@/composables/hooks';
import { API } from '@/configurations';

import { HOssObjectVersions, HOssSetLegalHoldDialog, HOssSetRetentionDialog } from './components';

defineOptions({
  name: 'OssObjectContent',
  components: { HOssObjectVersions, HOssSetLegalHoldDialog, HOssSetRetentionDialog },
});

const { defaultFormat } = useDateTime();
const { humanObjectSize } = useOss();
const { onFinish } = useEditFinish();
const { getDictionaryItemDisplay } = useDictionary('ObjectRetentionMode');
const { editedItem, additional } = useBaseTableItem<ObjectDomain>();

const loading = shallowRef(false);
const showVersions = shallowRef(false);
const openSetLegalHoldDialog = shallowRef(false);
const openSetRetentionDialog = shallowRef(false);
const currentBucketName = shallowRef('');
const currentObjectName = shallowRef('');
const currentFolder = shallowRef('');
const attributes = ref({}) as Ref<GetObjectAttributesResult>;

const isDisableAction = computed(() => {
  return isEmpty(attributes.value) || !attributes.value.lockEnabled;
});

const fetchAttributes = (bucketName: string, objectName: string) => {
  API.core
    .ossObject()
    .fetchObjectAttributes({ bucketName: bucketName, objectName: objectName })
    .then((result) => {
      const data = result.data;
      attributes.value = data;
      loading.value = false;
    })
    .catch(() => {
      loading.value = false;
    });
};

const humanLegalHold = (legalHold: boolean) => {
  return legalHold ? 'ON' : 'OFF';
};

const humanRetentionMode = (retentionMode: string) => {
  if (retentionMode) {
    return getDictionaryItemDisplay('ObjectRetentionMode', retentionMode);
  }

  return 'NONE';
};

/**
 * 单独删除对象
 * @param bucketName 存储桶名称
 * @param objectName 对象名称
 */
const deleteObject = (bucketName: string, objectName: string, folderName = '') => {
  notify.standardDeleteNotify(() => {
    API.core
      .ossObject()
      .delete({ bucketName: bucketName, objectName: objectName })
      .then(() => {
        toast.success('删除成功');
        onFinish();
      })
      .catch((error) => {
        if (error.message) {
          toast.error(error.message);
        } else {
          toast.error('删除失败');
        }
      });
  });
};

const onDeleteObject = () => {
  if (currentBucketName.value && currentObjectName.value) {
    deleteObject(currentBucketName.value, currentObjectName.value, currentFolder.value);
  }
};

onMounted(() => {
  currentBucketName.value = additional.value.bucketName as string;
  currentObjectName.value = editedItem.value.objectName;
  currentFolder.value = additional.value.folderName as string;

  if (currentBucketName.value && currentObjectName.value) {
    fetchAttributes(currentBucketName.value, currentObjectName.value);
  }
});
</script>
