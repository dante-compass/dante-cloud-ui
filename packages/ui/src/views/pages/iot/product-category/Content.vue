<template>
  <h-center-form-layout :entity="editedItem" :title="title" :operation="operation" @save="onSave()">
    <h-text-field v-model="editedItem.name" label="产品品类名称" placeholder="请输入产品品类名称"></h-text-field>
  </h-center-form-layout>
</template>

<script setup lang="ts">
import type { ProductCategoryEntity } from "@herodotus/api";
import { API } from "@/configurations";

import { useTableItem } from "@/composables/hooks";
import { HCenterFormLayout } from "@/components";

defineOptions({
  name: "IotProductCategoryContent",
  components: {
    HCenterFormLayout,
  },
});

const { editedItem, operation, title, saveOrUpdate } = useTableItem<ProductCategoryEntity>(
  API.core.iotProductCategory(),
);

const onSave = () => {
  saveOrUpdate();
};
</script>
