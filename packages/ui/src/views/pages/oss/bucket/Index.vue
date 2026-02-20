<template>
  <div>
    <h-table
      :rows="tableRows"
      :columns="columns"
      :row-key="rowKey"
      selection="single"
      :loading="loading"
      show-all
      status
      reserved
      @request="fetchAllBuckets"
    >
      <template #top-left>
        <h-button color="primary" label="新建存储桶" @click="openDialog = !openDialog" />
      </template>

      <template #body-cell-doesPublic="props">
        <q-td key="doesPublic" :props="props">
          <q-toggle
            :modelValue="props.row.doesPublic"
            :label="props.row.doesPublic ? '公开' : '私有'"
            @update:model-value="onChangePolicy(props.row, $event)"
          />
        </q-td>
      </template>

      <template #body-cell-versioning="props">
        <q-td key="versioning" :props="props">
          <q-chip v-if="props.row.versioning" color="purple">{{
            getDictionaryItemDisplay('BucketVersioning', props.row.versioning)
          }}</q-chip>
        </q-td>
      </template>

      <template #body-cell-objectLockEnabled="props">
        <q-td key="objectLockEnabled" :props="props">
          <h-boolean-column
            :value="props.row.objectLockEnabled"
            true-color="positive"
            false-color="negative"
            true-icon="mdi-lock"
            false-icon="mdi-lock-open"
            true-tooltip="已开启对象锁定"
            false-tooltip="未开启对象锁定"
          ></h-boolean-column>
        </q-td>
      </template>

      <template #body-cell-actions="props">
        <q-td key="actions" :props="props">
          <h-delete-button v-if="!props.row.reserved" @click="onDeleteBucket(props.row[rowKey])"></h-delete-button>
        </q-td>
      </template>
    </h-table>
    <h-create-bucket-dialog v-model="openDialog" @success="onRefresh"></h-create-bucket-dialog>
  </div>
</template>

<script setup lang="ts">
import type { HttpResult } from '@herodotus-cloud/core';
import type {
  BucketDomain,
  BucketDetailsDomain,
  BucketDetailsDomainProps,
  PutBucketPolicyResult,
  DeleteBucketResult,
} from '@herodotus-cloud/apis';
import type { QTableColumnProps } from '@/composables/declarations';

import { moment, toast, notify } from '@herodotus-cloud/core';
import { CONSTANTS, API } from '@/configurations';
import { useDictionary } from '@/composables/hooks';

import { HCreateBucketDialog } from './components';

defineOptions({ name: CONSTANTS.ComponentName.OSS_BUCKET, components: { HCreateBucketDialog } });

const columns: QTableColumnProps = [
  { name: 'bucketName', field: 'bucketName', align: 'center', label: 'Bucket名称' },
  {
    name: 'creationDate',
    field: 'creationDate',
    align: 'center',
    label: '创建时间',
    format: (value) => (value ? moment(value).format('YYYY-MM-DD HH:mm:ss') : ''),
  },
  { name: 'doesPublic', field: 'doesPublic', align: 'center', label: '访问权限' },
  { name: 'versioning', field: 'versioning', align: 'center', label: '版本控制状态' },
  { name: 'objectLockEnabled', field: 'objectLockEnabled', align: 'center', label: '对象锁定状态' },
  { name: 'actions', field: 'actions', align: 'center', label: '操作' },
];

const rowKey: BucketDetailsDomainProps = 'bucketName';

const { getDictionaryItemDisplay } = useDictionary('BucketVersioning');

const pageNumber = shallowRef(1);
const pageSize = shallowRef(10);
const openDialog = shallowRef(false);

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

const onRefresh = () => {
  fetchAllBuckets();
};

const onDeleteBucket = (bucketName: string) => {
  notify.standardDeleteNotify(() => {
    API.core
      .ossBucket()
      .deleteBucket({ bucketName: bucketName })
      .then((response) => {
        const result = response.data as HttpResult<DeleteBucketResult>;
        if (result.successful) {
          if (result.message) {
            toast.success(result.message);
          } else {
            toast.success('操作成功！');
          }

          fetchAllBuckets();
        } else {
          toast.warning('服务端异常！');
        }
      });
  });
};

const onChangePolicy = (item: BucketDetailsDomain, event: boolean) => {
  API.core
    .ossBucket()
    .setBucketPolicy({ bucketName: item.bucketName, doesPublic: event })
    .then((response) => {
      const result = response.data as HttpResult<PutBucketPolicyResult>;
      if (result.successful) {
        if (result.message) {
          toast.success(result.message);
        } else {
          toast.success('操作成功！');
        }
        fetchAllBuckets();
      } else {
        toast.warning('服务端异常！');
      }
    });
};

onMounted(() => {
  onRefresh();
});
</script>
