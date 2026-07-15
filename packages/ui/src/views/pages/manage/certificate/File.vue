<template>
  <h-full-width-form-layout title="配置人员归属" @cancel="onReturn">
    <h-table
      :rows="tableRows"
      :columns="columns"
      :row-key="rowKey"
      selection="single"
      v-model:selected="selected"
      v-model:pagination="pagination"
      v-model:pageNumber="pagination.page"
      :totalPages="totalPages"
      :loading="loading"
      status
      reserved
      @request="findItems"
    >
      <template #body-cell-certificateCategory="props">
        <q-td key="certificateCategory" :props="props">
          {{ getDictionaryItemDisplay("CertificateCategory", props.row.certificateCategory) }}
        </q-td>
      </template>

      <template #body-cell-revocationReason="props">
        <q-td key="certificateFileCategory" :props="props">
          {{ getDictionaryItemDisplay("CertificateFileCategory", props.row.certificateFileCategory) }}
        </q-td>
      </template>

      <template #body-cell-ocsp="props">
        <q-td key="ocsp" :props="props">
          <h-boolean-column :value="props.row.ocsp"></h-boolean-column>
        </q-td>
      </template>

      <template #body-cell-actions="props">
        <q-td key="actions" :props="props">
          <h-download-button @click="onDownload(props.row)"></h-download-button>
          <h-delete-button v-if="!props.row.reserved" @click="deleteItemById(props.row[rowKey])"></h-delete-button>
        </q-td>
      </template>
    </h-table>
  </h-full-width-form-layout>
</template>

<script setup lang="ts">
import type {
  MgtCertificateRequest,
  MgtCertificateResponse,
  MgtCertificateFileRequest,
  MgtCertificateFileResponse,
  MgtCertificateFileConditions,
  MgtCertificateFileProps,
} from "@herodotus/api";
import type { QTableColumnProps } from "@/composables/declarations";

import { isEmpty } from "lodash-es";

import { PAGE_NAME, API } from "@/configurations";
import { useTable, useTableItem, useDictionary, useOss } from "@/composables/hooks";

defineOptions({ name: PAGE_NAME.MGT_CERTIFICATE_FILE });

const selected = ref([]);
const rowKey: MgtCertificateFileProps = "fileId";

const columns: QTableColumnProps = [
  { name: "alias", field: "alias", align: "center", label: "证书名称" },
  { name: "certificateCategory", field: "certificateCategory", align: "center", label: "证书类别" },
  {
    name: "certificateFileCategory",
    field: "certificateFileCategory",
    align: "center",
    label: "证书文件类别",
  },
  { name: "fileName", field: "fileName", align: "center", label: "文件名" },
  { name: "suffix", field: "suffix", align: "center", label: "文件后缀" },
  { name: "actions", field: "actions", align: "center", label: "操作" },
];

const { tableRows, totalPages, pagination, loading, toCreate, findItems, deleteItemById } = useTable<
  MgtCertificateFileConditions,
  MgtCertificateFileRequest,
  MgtCertificateFileResponse
>(API.core.mgtCertificateFile(), PAGE_NAME.MGT_CERTIFICATE);

const { onReturn } = useTableItem<MgtCertificateRequest, MgtCertificateResponse>(
  API.core.mgtCertificate(),
  PAGE_NAME.MGT_CERTIFICATE_FILE,
);

const { getDictionaryItemDisplay } = useDictionary("CertificateCategory", "RevocationReason");
const { download } = useOss();

const onDownload = (item: MgtCertificateFileResponse) => {
  if (!isEmpty(item)) {
    download(item.bucketName, item.fileName, item.fileSize);
  }
};
</script>
