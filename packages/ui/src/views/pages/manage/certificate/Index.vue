<template>
  <div>
    <h-table
      :rows="tableRows"
      :columns="headers"
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
      <template #top-left>
        <h-button color="primary" icon="mdi-plus" label="新建证书" @click="toCreate" />
      </template>

      <template #body-cell-issuerDn="{ value }">
        <q-td key="issuerDn">
          <h-action-button color="orange" icon="mdi-invoice-text-check" :tooltip="value"></h-action-button>
        </q-td>
      </template>

      <template #body-cell-subjectDn="{ value }">
        <q-td key="subjectDn">
          <h-action-button color="teal" icon="mdi-invoice-text-edit" :tooltip="value"></h-action-button>
        </q-td>
      </template>

      <template #body-cell-certificateCategory="props">
        <q-td key="certificateCategory" :props="props">
          {{ getDictionaryItemDisplay('CertificateCategory', props.row.certificateCategory) }}
        </q-td>
      </template>

      <template #body-cell-revocationReason="props">
        <q-td key="revocationReason" :props="props">
          {{ getDictionaryItemDisplay('RevocationReason', props.row.revocationReason) }}
        </q-td>
      </template>

      <template #body-cell-ocsp="props">
        <q-td key="ocsp" :props="props">
          <h-column-boolean :value="props.row.ocsp"></h-column-boolean>
        </q-td>
      </template>

      <template #body-cell-actions="props">
        <q-td key="actions" :props="props">
          <h-download-button @click="onShowDownloadDialog(props.row)"></h-download-button>
          <h-action-button
            color="amber"
            icon="mdi-file-search"
            tooltip="查看证书文件"
            @click="toFile(props.row)"
          ></h-action-button>
          <h-action-button
            color="red"
            icon="mdi-file-lock"
            tooltip="查看证书文件"
            @click="toRevocation(props.row)"
          ></h-action-button>
          <h-action-delete-button
            v-if="!props.row.reserved"
            @click="deleteItemById(props.row[rowKey])"
          ></h-action-delete-button>
        </q-td>
      </template>
    </h-table>
    <h-download-certificate-dialog v-model="openDialog" :cert-id="currentCertId"></h-download-certificate-dialog>
  </div>
</template>

<script setup lang="ts">
import type {
  PkiCertificateRequest,
  PkiCertificateResponse,
  PkiCertificateConditions,
  PkiCertificateProps,
} from '@herodotus/api';
import type { QTableColumnProps } from '@/composables/declarations';

import { PAGE_NAME, API } from '@/configurations';

import { useTable, useDateTime, useDictionary } from '@/composables/hooks';
import { HDownloadCertificateDialog } from './components';

defineOptions({ name: PAGE_NAME.PKI_CERTIFICATE, components: { HDownloadCertificateDialog } });

const selected = ref([]);
const rowKey: PkiCertificateProps = 'certId';

const headers: QTableColumnProps = [
  { name: 'certificateCategory', field: 'certificateCategory', align: 'center', label: '证书类别' },
  { name: 'alias', field: 'alias', align: 'center', label: '证书名称' },
  { name: 'commonName', field: 'commonName', align: 'center', label: '公共名称' },
  { name: 'serialNumber', field: 'serialNumber', align: 'center', label: '证书序列号' },
  { name: 'issuerDn', field: 'issuerDn', align: 'center', label: '颁发者 DN' },
  { name: 'subjectDn', field: 'subjectDn', align: 'center', label: '主题 DN' },
  {
    name: 'startTime',
    field: 'startTime',
    align: 'center',
    label: '开始时间',
    format: (value) => defaultFormat(value),
  },
  { name: 'endTime', field: 'endTime', align: 'center', label: '结束时间', format: (value) => defaultFormat(value) },
  { name: 'password', field: 'password', align: 'center', label: '密码' },
  { name: 'ocsp', field: 'ocsp', align: 'center', label: 'OCSP 证书' },
  { name: 'revocationReason', field: 'revocationReason', align: 'center', label: '证书吊销理由' },
  {
    name: 'updateBy',
    field: 'updateBy',
    align: 'center',
    label: '最后修改人',
  },
  {
    name: 'updateTime',
    field: 'updateTime',
    align: 'center',
    label: '修改时间',
    format: (value) => defaultFormat(value),
  },
  { name: 'actions', field: 'actions', align: 'center', label: '操作' },
];

const { tableRows, totalPages, pagination, loading, toCreate, toFile, toRevocation, findItems, deleteItemById } =
  useTable<PkiCertificateConditions, PkiCertificateRequest, PkiCertificateResponse>(
    API.core.pkiCertificate(),
    PAGE_NAME.PKI_CERTIFICATE,
  );

const { defaultFormat } = useDateTime();
const { getDictionaryItemDisplay } = useDictionary('CertificateCategory', 'RevocationReason');

const openDialog = shallowRef(false);
const currentCertId = shallowRef();

const onShowDownloadDialog = (item: PkiCertificateResponse) => {
  currentCertId.value = item.certId;
  if (currentCertId.value) {
    openDialog.value = true;
  }
};

watch(openDialog, (newValue) => {
  if (!newValue) {
    currentCertId.value = '';
  }
});
</script>
