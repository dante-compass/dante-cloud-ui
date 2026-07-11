<template>
  <h-center-form-layout :entity="editedItem" :title="title" :overlay="overlay" @save="onSave()" @cancel="onReturn">
    <h-text-field v-model="editedItem.category" label="分类" disable></h-text-field>
    <h-text-field v-model="editedItem.name" label="字面量"></h-text-field>
    <h-text-field v-model="editedItem.label" label="显示值"></h-text-field>
  </h-center-form-layout>
</template>

<script setup lang="ts">
import type { SysDictionaryEntity } from "@herodotus/api";

import { PAGE_NAME, API } from "@/configurations";

import { useTableItem } from "@/composables/hooks";
import { HCenterFormLayout } from "@/components";

defineOptions({ name: PAGE_NAME.SYS_DICTIONARY_CONTENT });

const { editedItem, title, overlay, saveOrUpdate, onReturn } = useTableItem<SysDictionaryEntity>(
  API.core.sysDictionary(),
  PAGE_NAME.SYS_DICTIONARY_CONTENT,
);

const onSave = () => {
  saveOrUpdate();
};
</script>
