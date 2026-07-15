<template>
  <h-center-form-layout :entity="editedItem" :title="title" @save="onSave()" @cancel="onReturn">
    <h-text-field v-model="editedItem.name" label="产品品类名称" placeholder="请输入产品品类名称"></h-text-field>
  </h-center-form-layout>
</template>

<script setup lang="ts">
import type { ProductCategoryEntity } from "@herodotus/api";
import { PAGE_NAME, API } from "@/configurations";

import { useTableItem } from "@/composables/hooks";
import { HCenterFormLayout } from "@/components";

defineOptions({ name: PAGE_NAME.IOT_PRODUCT_CATEGORY_CONTENT, components: { HCenterFormLayout } });

const { editedItem, title, saveOrUpdate, onReturn } = useTableItem<ProductCategoryEntity>(
  API.core.iotProductCategory(),
  PAGE_NAME.IOT_PRODUCT_CATEGORY_CONTENT,
);

const onSave = () => {
  saveOrUpdate();
};
</script>
