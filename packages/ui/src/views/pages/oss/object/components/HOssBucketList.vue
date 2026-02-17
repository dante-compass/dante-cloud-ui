<template>
  <q-card>
    <q-card-section>
      <q-list bordered separator>
        <q-item-label header>存储桶列表:</q-item-label>
        <q-item v-for="(item, index) in tableRows" :key="index" clickable v-ripple @click="onSelectItem(item)">
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
import type { BucketDomain } from '@herodotus-cloud/apis';

import { API } from '@/configurations';

defineOptions({ name: 'HOssBucketList' });

const selected = defineModel<string>();
const key = defineModel<number>('version', {
  default: 0,
});

const loading = shallowRef(false);
const tableRows = ref([]) as Ref<Array<BucketDomain>>;

const fetchAllBuckets = () => {
  API.core
    .ossBucket()
    .listBuckets()
    .then((result) => {
      const data = result.data.buckets as Array<BucketDomain>;
      tableRows.value = data;
      loading.value = false;
    })
    .catch(() => {
      loading.value = false;
    });
};

const onSelectItem = (item: BucketDomain) => {
  if (item) {
    selected.value = item.bucketName;
  }
  key.value = +new Date();
};

onMounted(() => {
  fetchAllBuckets();
});
</script>
