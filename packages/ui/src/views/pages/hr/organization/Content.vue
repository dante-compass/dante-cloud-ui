<template>
  <h-center-form-layout :entity="editedItem" :title="title" :overlay="overlay" @save="onSave()" @cancel="onReturn">
    <h-text-field
      v-model="editedItem.organizationName"
      name="organizationName"
      label="单位名称 * "
      placeholder="请输入单位名称"
      :error="v.editedItem.organizationName.$error"
      :error-message="v.editedItem.organizationName.$errors[0] ? v.editedItem.organizationName.$errors[0].$message : ''"
      @blur="v.editedItem.organizationName.$validate()"
    ></h-text-field>

    <h-text-field
      v-model="editedItem.partitionCode"
      label="单位分区码"
      placeholder="请输入单位分区码名称"
    ></h-text-field>
    <h-text-field v-model="editedItem.shortName" label="单位简称" placeholder="请输入单位简称"></h-text-field>
    <h-dictionary-select
      v-model="editedItem.category"
      dictionary="OrganizationCategory"
      label="组织类别"
    ></h-dictionary-select>
    <h-organization-select
      v-model="editedItem.parentId"
      :category="editedItem.category"
      label="上级单位"
      placeholder="请设置所属上级单位"
    ></h-organization-select>
  </h-center-form-layout>
</template>

<script setup lang="ts">
import type { SysOrganizationEntity } from "@herodotus/api";

import useVuelidate from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";

import { PAGE_NAME, API } from "@/configurations";
import { useTableItem } from "@/composables/hooks";
import { HCenterFormLayout, HDictionarySelect } from "@/components";
import { HOrganizationSelect } from "../components";

defineOptions({ name: PAGE_NAME.SYS_ORGANIZATION_CONTENT, components: { HOrganizationSelect } });

const { editedItem, title, overlay, saveOrUpdate, onReturn } = useTableItem<SysOrganizationEntity>(
  API.core.sysOrganization(),
  PAGE_NAME.SYS_ORGANIZATION_CONTENT,
);

const rules = {
  editedItem: {
    organizationName: {
      required: helpers.withMessage("单位名称不能为空", required),
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
