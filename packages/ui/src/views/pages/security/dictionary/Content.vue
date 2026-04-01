<template>
  <h-center-form-layout :entity="editedItem" :title="title" :overlay="overlay" :operation="operation" @save="onSave()">
    <h-text-field v-model="editedItem.category" label="分类" disable></h-text-field>
    <h-text-field v-model="editedItem.name" label="字面量"></h-text-field>
    <h-text-field v-model="editedItem.label" label="显示值"></h-text-field>
  </h-center-form-layout>
</template>

<script setup lang="ts">
import type { SysDictionaryEntity } from '@herodotus/api';

import { API } from '@/configurations';

import { useTableItem } from '@/composables/hooks';
import { HCenterFormLayout } from '@/components';

defineOptions({ name: 'SysDictionaryContent' });

const { editedItem, operation, title, overlay, saveOrUpdate } = useTableItem<SysDictionaryEntity>(
  API.core.sysDictionary(),
);

const onSave = () => {
  saveOrUpdate();
};
</script>
