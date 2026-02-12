<template>
  <h-detail-container :title="title">
    <h-oss-object-list
      v-if="isShowObjects"
      :bucket-name="bucketName"
      :folder-name="folderName"
    ></h-oss-object-list>
  </h-detail-container>
</template>

<script setup lang="ts">
import type { ObjectDomain } from '@/composables/declarations';

import { useBaseTableItem } from '@/composables/hooks';
import { HOssObjectList } from '../components';
import { trimEnd } from 'lodash-es';

defineOptions({ name: 'OssObjectContent', components: { HOssObjectList } });

const { editedItem, additional } = useBaseTableItem<ObjectDomain>();

const bucketName = ref<string>('');
const folderName = ref<string>('');

const isShowObjects = computed(() => {
  return bucketName.value && folderName.value;
});

const title = computed(() => {
  if (bucketName.value && folderName.value) {
    return bucketName.value + '/' + trimEnd(folderName.value, '/');
  } else {
    return '文件夹';
  }
});

onMounted(() => {
  bucketName.value = additional.value.bucketName as string;
  folderName.value = editedItem.value.objectName;
});
</script>
