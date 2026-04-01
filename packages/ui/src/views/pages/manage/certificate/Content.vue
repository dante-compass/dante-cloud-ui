<template>
  <h-center-form-layout :entity="editedItem" :title="title" :operation="operation" :overlay="overlay" @save="onSave()">
    <h-text-field
      v-model.lazy="v.editedItem.alias.$model as string"
      label="证书别名 *"
      placeholder="请输入证书别名"
      debounce="5000"
      :error="v.editedItem.alias.$error"
      :error-message="v.editedItem.alias.$errors[0] ? v.editedItem.alias.$errors[0].$message : ''"
    ></h-text-field>

    <h-text-field
      v-model.lazy="v.editedItem.commonName.$model as string"
      label="公共名称(CN) *"
      placeholder="请输入公共名称(CN)"
      :error="v.editedItem.commonName.$error"
      :error-message="v.editedItem.commonName.$errors[0] ? v.editedItem.commonName.$errors[0].$message : ''"
    ></h-text-field>

    <h-text-field
      v-model.lazy="v.editedItem.organizationUnit.$model as string"
      label="组织单位(OU) *"
      placeholder="请输入组织单位(OU)"
      :error="v.editedItem.organizationUnit.$error"
      :error-message="v.editedItem.organizationUnit.$errors[0] ? v.editedItem.organizationUnit.$errors[0].$message : ''"
    ></h-text-field>

    <h-text-field
      v-model.lazy="v.editedItem.organization.$model as string"
      label="组织(O) *"
      placeholder="请输入组织(O)"
      :error="v.editedItem.organization.$error"
      :error-message="v.editedItem.organization.$errors[0] ? v.editedItem.organization.$errors[0].$message : ''"
    ></h-text-field>

    <h-text-field
      v-model.lazy="v.editedItem.locality.$model as string"
      label="位置或城市(L) *"
      placeholder="请输入位置或城市(L)"
      :error="v.editedItem.locality.$error"
      :error-message="v.editedItem.locality.$errors[0] ? v.editedItem.locality.$errors[0].$message : ''"
    ></h-text-field>

    <h-text-field
      v-model.lazy="v.editedItem.stateOrProvince.$model as string"
      label="州或省(ST) *"
      placeholder="请输入州或省(ST)"
      :error="v.editedItem.stateOrProvince.$error"
      :error-message="v.editedItem.stateOrProvince.$errors[0] ? v.editedItem.stateOrProvince.$errors[0].$message : ''"
    ></h-text-field>

    <h-text-field
      v-model.lazy="v.editedItem.country.$model as string"
      label="国家或地区(C) *"
      placeholder="请输入国家或地区(C)"
      :error="v.editedItem.country.$error"
      :error-message="v.editedItem.country.$errors[0] ? v.editedItem.country.$errors[0].$message : ''"
    ></h-text-field>

    <h-text-field
      v-model.lazy="v.editedItem.password.$model as string"
      label="证书密码 *"
      placeholder="请输入证书密码(C)"
      type="password"
      :error="v.editedItem.password.$error"
      :error-message="v.editedItem.password.$errors[0] ? v.editedItem.password.$errors[0].$message : ''"
    ></h-text-field>

    <h-toggle-field
      class="q-mb-md"
      v-model="editedItem.certificateCategory"
      dictionary="CertificateCategory"
      default-value="TRUST_ANCHOR"
    ></h-toggle-field>

    <h-select
      v-if="showParentSelect"
      v-model="editedItem.parentId"
      :options="parentOptions"
      label="上级证书"
      hide-hint
      option-value="certId"
      option-label="alias"
      emit-value
      :loading="showParentLoading"
    ></h-select>

    <h-date-time
      v-model.lazy="v.editedItem.startTime.$model as string"
      label="开始时间 *"
      placeholder="请输入开始时间"
      :error="v.editedItem.startTime.$error"
      :error-message="v.editedItem.startTime.$errors[0] ? v.editedItem.startTime.$errors[0].$message : ''"
    ></h-date-time>

    <h-date-time
      v-model.lazy="v.editedItem.endTime.$model as string"
      label="结束时间 *"
      placeholder="请输入结束时间"
      :error="v.editedItem.endTime.$error"
      :error-message="v.editedItem.endTime.$errors[0] ? v.editedItem.endTime.$errors[0].$message : ''"
    ></h-date-time>

    <h-switch v-if="showOcspSwitch" v-model="editedItem.ocsp" label="是否OCSP证书"></h-switch>
  </h-center-form-layout>
</template>

<script setup lang="ts">
import type { MgtCertificateRequest, MgtCertificateResponse } from '@herodotus/api';

import useVuelidate from '@vuelidate/core';
import { required, helpers } from '@vuelidate/validators';

import { API } from '@/configurations';
import { useTableItem } from '@/composables/hooks';
import { isEmpty } from 'lodash-es';

defineOptions({ name: 'MgtCertificateContent' });

const { editedItem, operation, title, saveOrUpdate, overlay } = useTableItem<
  MgtCertificateRequest,
  MgtCertificateResponse
>(API.core.mgtCertificate());

const isUnique = () => {
  let alias = editedItem.value.alias;

  return new Promise((resolve, reject) => {
    if (alias) {
      API.core
        .mgtCertificate()
        .findByAlias(alias)
        .then((result) => {
          let cert = result.data as MgtCertificateResponse;
          // 如果能够查询到roleCode
          // 如果该roleCode 对应的 roleId 与当前 editedItem中的roleId相同
          // 则认为是编辑状态，而且employeeName 没有变化，那么就校验通过。
          // 目前能想到的解决新建空值、编辑是原值等校验问题的最优解
          resolve(isEmpty(cert));
        });
    } else {
      reject(false);
    }
  });
};

const parentOptions = ref([]) as Ref<Array<MgtCertificateResponse>>;
const showParentLoading = shallowRef(false);
const showParentSelect = shallowRef(false);
const showOcspSwitch = shallowRef(false);

const loadOptionData = (category: string) => {
  showParentLoading.value = true;
  if (category) {
    API.core
      .mgtCertificate()
      .findAllByCertificateCategory(category)
      .then((result) => {
        if (result.data) {
          parentOptions.value = result.data;
        }
        showParentLoading.value = false;
      })
      .catch((error) => {
        showParentLoading.value = false;
      });
  }
};

watch(
  () => editedItem.value.certificateCategory,
  (newValue) => {
    if (newValue === 'ROOT_CA') {
      showParentSelect.value = false;
      editedItem.value.parentId = '';
    } else {
      loadOptionData(newValue);
      showParentSelect.value = true;
    }

    if (newValue === 'END_ENTITY') {
      showOcspSwitch.value = true;
      editedItem.value.ocsp = false;
    } else {
      showOcspSwitch.value = false;
      editedItem.value.ocsp = false;
    }
  },
);

const rules = {
  editedItem: {
    alias: {
      required: helpers.withMessage('证书别名不能为空', required),
      isUnique: helpers.withMessage('证书别名已存在，请使用其它代码', helpers.withAsync(isUnique)),
    },
    commonName: {
      required: helpers.withMessage('证书名称不能为空', required),
    },
    organizationUnit: {
      required: helpers.withMessage('组织单位不能为空', required),
    },
    organization: {
      required: helpers.withMessage('组织不能为空', required),
    },
    locality: {
      required: helpers.withMessage('位置或城市不能为空', required),
    },
    stateOrProvince: {
      required: helpers.withMessage('州或省不能为空', required),
    },
    country: {
      required: helpers.withMessage('国家或地区不能为空', required),
    },
    password: {
      required: helpers.withMessage('密码不能为空', required),
    },
    startTime: {
      required: helpers.withMessage('开始时间不能为空', required),
    },
    endTime: {
      required: helpers.withMessage('结束时间不能为空', required),
    },
  },
};

const v = useVuelidate(rules, { editedItem }, { $lazy: true });

const onSave = () => {
  v.value.$validate().then((result) => {
    if (result) {
      saveOrUpdate();
    }
  });
};
</script>
