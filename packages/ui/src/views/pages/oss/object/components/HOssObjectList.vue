<template>
  <div>
    <h-table
      :rows="tableRows"
      :columns="columns"
      :row-key="rowKey"
      selection="multiple"
      v-model:selected="selected"
      :loading="loading"
      :show-all="true"
      status
      reserved
    >
      <template #top-left>
        <h-button
          v-if="currentFolder"
          color="grey"
          label="返回"
          icon="mdi-arrow-left-box"
          @click="onPreviousFolder()"
        />

        <h-button
          color="primary"
          label="上传"
          icon="mdi-cloud-upload"
          class="q-ml-sm"
          @click="openSimpleUploadDialog = true"
        />
        <h-button
          color="red"
          label="批量删除"
          icon="mdi-delete-forever"
          :disable="isDisableBatchDelete"
          class="q-ml-sm"
          @click="onBatchDeleteObjects()"
        />
      </template>
      <template #body-cell-lastModified="props">
        <q-td key="lastModified" :props="props">
          {{ defaultFormat(props.lastModified) }}
        </q-td>
      </template>

      <template #body-cell-objectName="props">
        <q-td key="objectName" :props="props">
          <q-btn v-if="props.row.dir" flat round icon="mdi-folder-open" @click="onOpenFolder(props.row)">
            {{ displayedObjectName(props.row.objectName) }}
          </q-btn>
          <template v-else>{{ displayedObjectName(props.row.objectName) }}</template>
        </q-td>
      </template>

      <template #body-cell-actions="props">
        <q-td key="actions" :props="props">
          <h-dense-icon-button
            color="secondary"
            icon="mdi-download-box"
            tooltip="下载"
            @click="onDownloadObject(props.row)"
          ></h-dense-icon-button>
          <h-dense-icon-button
            v-if="!props.row.dir"
            color="black"
            icon="mdi-cog-outline"
            tooltip="详情"
            @click="toSetting(props.row)"
          ></h-dense-icon-button>
          <h-delete-button tooltip="删除" @click="onDeleteObject(props.row)"></h-delete-button>
        </q-td>
      </template>
    </h-table>
    <h-dialog v-model="openSimpleUploadDialog" title="文件上传" hide-confirm hide-cancel @close="onFinishSimpleUpload">
      <h-simple-uploader v-model="hasNewUploadedFiles" :bucket-name="bucketName"></h-simple-uploader>
    </h-dialog>
  </div>
</template>

<script setup lang="ts">
import type {
  ObjectDomain,
  ObjectDomainProps,
  ObjectDomainConditions,
  DeletedObjectDomain,
} from '@herodotus-cloud/apis';
import type { QTableColumnProps } from '@/composables/declarations';

import { format } from 'quasar';

import { HDeleteButton, HDenseIconButton, HTable, HChunkUploader, HSimpleUploader } from '@/components';
import { useBaseTable, useDateTime, useOss } from '@/composables/hooks';
import { API, CONSTANTS } from '@/configurations';
import { toast, notify } from '@herodotus-cloud/core';
import { isEmpty, split, dropRight, join, initial } from 'lodash-es';

defineOptions({
  name: 'HOssObjectList',
  components: { HDeleteButton, HDenseIconButton, HTable, HChunkUploader, HSimpleUploader },
});

interface Props {
  folderName?: string;
  version?: number;
}

const props = defineProps<Props>();
const bucketName = defineModel<string>({
  required: true,
});

const columns: QTableColumnProps = [
  {
    name: 'objectName',
    field: 'objectName',
    align: 'center',
    label: '文件名',
  },
  { name: 'eTag', field: 'eTag', align: 'center', label: 'ETAG' },
  {
    name: 'size',
    field: 'size',
    align: 'center',
    label: '大小',
    format: (value) => (value ? humanStorageSize(Number(value)) : ''),
  },
  { name: 'lastModified', field: 'lastModified', align: 'center', label: '最后更新时间' },
  { name: 'actions', field: 'actions', align: 'center', label: '操作' },
];

const { humanStorageSize } = format;

const rowKey: ObjectDomainProps = 'objectName';

const { toEdit } = useBaseTable<ObjectDomainConditions, ObjectDomain>(
  CONSTANTS.ComponentName.OSS_OBJECT,
  'updateTime',
  false,
);
const { defaultFormat } = useDateTime();
const { humanObjectSize, displayedObjectName, download } = useOss();

const pageNumber = shallowRef(1);
const pageSize = shallowRef(10);
const selected = ref([]) as Ref<Array<ObjectDomain>>;
const openSimpleUploadDialog = shallowRef(false);
const hasNewUploadedFiles = shallowRef(false);

const loading = shallowRef(false);
const tableRows = ref([]) as Ref<Array<ObjectDomain>>;
const currentFolder = shallowRef('');

const fetchObjects = (bucketName: string, folderName = '') => {
  loading.value = true;
  API.core
    .ossObject()
    .listObjectsV2({ bucketName: bucketName, prefix: folderName })
    .then((result) => {
      const data = result.data.contents;
      tableRows.value = data ? data : [];
      loading.value = false;
    })
    .catch(() => {
      loading.value = false;
    });
};

/**
 * ObjectDomain 数组转换为 DeleteObjectDomain 数组
 * @param objects Table 中已选择的 ObjectDomain
 * @returns DeleteObjectDomain
 */
const toDeleteObjectDomain = (objects: Array<ObjectDomain>): Array<DeletedObjectDomain> => {
  const deleteObjects = objects.map((object) => {
    const deleteObject: DeletedObjectDomain = { objectName: object.objectName };
    return deleteObject;
  });
  return deleteObjects;
};

const getPreviousFolder = () => {
  if (currentFolder.value) {
    const names = initial(split(currentFolder.value, '/'));
    const previous = dropRight(names);
    if (!isEmpty(previous)) {
      return join(previous, '/') + '/';
    }
  }

  return '';
};

/**
 * 批量删除对象
 * @param bucketName 存储桶名称
 * @param objects 选中的、待删除对象
 * @param onSuccess 删除成功操作
 */
const batchDeleteObjects = (bucketName: string, objects: Array<ObjectDomain>, folderName = '') => {
  notify.standardDeleteNotify(() => {
    API.core
      .ossObject()
      .batchDelete({ bucketName: bucketName, delete: toDeleteObjectDomain(objects) })
      .then(() => {
        toast.success('删除成功');
        fetchObjects(bucketName, folderName);
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
        fetchObjects(bucketName, folderName);
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

const openFolder = (bucketName: string, objectName: string) => {
  currentFolder.value = objectName;
  fetchObjects(bucketName, currentFolder.value);
};

const returnPreviousFolder = (bucketName: string) => {
  currentFolder.value = getPreviousFolder();
  fetchObjects(bucketName, currentFolder.value);
};

const isDisableBatchDelete = computed(() => {
  return isEmpty(selected.value);
});

const isDisableUpload = computed(() => {
  return isEmpty(bucketName.value);
});

const toSetting = (item: ObjectDomain) => {
  toEdit(item, { bucketName: bucketName.value, folderName: props.folderName });
};

/**
 * 查询数据操作
 */
const onFetchObjects = () => {
  if (bucketName.value) {
    fetchObjects(bucketName.value, props.folderName);
  }
};

/**
 * 批量删除对象操作
 */
const onBatchDeleteObjects = () => {
  batchDeleteObjects(bucketName.value, selected.value, props.folderName);
};

/**
 * 删除对象操作
 * @param item 选中的对象条目实体
 */
const onDeleteObject = (item: ObjectDomain) => {
  deleteObject(bucketName.value, item.objectName, props.folderName);
};

const onDownloadObject = (item: ObjectDomain) => {
  download(bucketName.value, item.objectName, item.size);
};

const onOpenFolder = (item: ObjectDomain) => {
  openFolder(bucketName.value, item.objectName);
};

const onPreviousFolder = () => {
  returnPreviousFolder(bucketName.value);
};

const onFinishSimpleUpload = () => {
  if (hasNewUploadedFiles.value) {
    onFetchObjects();
  }
};

watch(
  () => props.version,
  () => {
    onFetchObjects();
  },
);

onMounted(() => {
  onFetchObjects();
});
</script>
