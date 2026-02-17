<template>
  <q-card>
    <q-item>
      <q-item-section avatar>
        <q-icon name="mdi-layers-triple" />
      </q-item-section>

      <q-item-section>
        <q-item-label caption>{{ objectName }}</q-item-label>
      </q-item-section>
    </q-item>
    <q-card-section>
      <q-list separator>
        <q-item-label header>版本信息：</q-item-label>
        <template v-for="(item, i) in tableRows" :key="i">
          <q-item :clickable="!item.deleteMarker" v-ripple :disable="item.deleteMarker">
            <q-item-section>
              <q-item-label>
                {{ 'v' + (tableRows.length - i) }}
                <q-chip v-if="item.latest" dense size="md" color="pink" icon="mdi-label"> CURRENT VERSION </q-chip>
                <q-chip v-if="item.deleteMarker" dense size="md" color="gray" icon="mdi-delete"> DELETE </q-chip>
              </q-item-label>
              <q-item-label caption>
                {{ item.versionId }}
              </q-item-label>

              <q-item-label>
                最后更新时间： {{ defaultFormat(item.lastModified) }} - | - 文件大小：{{ humanObjectSize(item.size) }}
              </q-item-label>
            </q-item-section>
          </q-item>
        </template>
      </q-list>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import type { ObjectVersionDomain } from '@herodotus-cloud/apis';

import { useOss, useDateTime } from '@/composables/hooks';
import { API } from '@/configurations';

defineOptions({ name: 'HOssObjectVersions' });

interface Props {
  bucketName: string;
  objectName: string;
  showVersions: boolean;
}

const props = defineProps<Props>();

const { humanObjectSize } = useOss();
const { defaultFormat } = useDateTime();

const loading = shallowRef(false);
const tableRows = ref([]) as Ref<Array<ObjectVersionDomain>>;

const fetchObjectVersions = (bucketName: string, prefix = '') => {
  loading.value = true;
  API.core
    .ossObject()
    .listObjectVersions({ bucketName: bucketName, prefix: prefix })
    .then((result) => {
      const data = result.data.versions;
      tableRows.value = data ? data : [];
      console.log(tableRows.value);
      loading.value = false;
    })
    .catch(() => {
      loading.value = false;
    });
};

watch(
  () => props.showVersions,
  (newValue) => {
    if (newValue) {
      fetchObjectVersions(props.bucketName, props.objectName);
    } else {
      tableRows.value = [];
    }
  },
  { immediate: true },
);
</script>
