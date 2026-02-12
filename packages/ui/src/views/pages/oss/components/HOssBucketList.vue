<template>
  <q-card>
    <q-card-section>
      <q-list bordered padding>
        <q-item-label header>存储桶列表</q-item-label>
        <q-item v-for="(item, index) in items" :key="index" clickable v-ripple @click="onClick(item)">
          <q-item-section avatar>
            <q-icon color="primary" name="mdi-bucket-outline" />
          </q-item-section>
          <q-item-section>{{ item.bucketName }}</q-item-section>
          <q-item-section avatar>
            <q-icon color="grey" name="mdi-chevron-right" />
          </q-item-section>
        </q-item>
      </q-list>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import type { BucketDomain } from '@/composables/declarations';

import { API } from '@/configurations';

defineOptions({ name: 'HOssBucketList' });

const bucketName = defineModel<string>({
  required: true,
});

const key = defineModel<number>('version', {
  default: 0,
});

const items = ref<Array<BucketDomain>>([]);

const selectItem = (name: string) => {
  bucketName.value = name;
  key.value = +new Date();
};

const initialize = () => {
  API.core
    .ossBucket()
    .listBuckets()
    .then((result) => {
      const data = result.data.buckets as Array<BucketDomain>;
      items.value = data;
    });
};

const onClick = (item: BucketDomain) => {
  selectItem(item.bucketName);
};

onMounted(() => {
  initialize();
});
</script>
