<template>
  <h-center-form-layout :entity="editedItem" :title="title" :overlay="overlay" @save="onSave()" @cancel="onReturn">
    <h-text-field
      v-model.lazy="v.editedItem.permissionName.$model as string"
      name="permissionName"
      label="权限名称 * "
      placeholder="请输入权限名称"
      debounce="5000"
      :error="v.editedItem.permissionName.$error"
      :error-message="v.editedItem.permissionName.$errors[0] ? v.editedItem.permissionName.$errors[0].$message : ''"
    ></h-text-field>
    <h-text-field
      v-model="editedItem.permissionCode"
      name="permissionCode"
      label="权限代码"
      placeholder="请输权限代码"
    ></h-text-field>
  </h-center-form-layout>
</template>

<script setup lang="ts">
import type { SysPermissionEntity } from "@herodotus/api";

import { required, helpers } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";

import { PAGE_NAME, API } from "@/configurations";
import { useTableItem } from "@/composables/hooks";
import { HCenterFormLayout } from "@/components";

defineOptions({ name: PAGE_NAME.SYS_PERMISSION_CONTENT });

const { editedItem, title, overlay, saveOrUpdate, onReturn } = useTableItem<SysPermissionEntity>(
  API.core.sysPermission(),
  PAGE_NAME.SYS_PERMISSION_CONTENT,
);

const rules = {
  editedItem: {
    permissionName: {
      required: helpers.withMessage("权限名称不能为空", required),
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
