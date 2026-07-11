<template>
  <h-detail-container :title="title" :overlay="overlay">
    <h-container :offset="4">
      <h-form-skeleton v-if="skeleton" :number="5"></h-form-skeleton>
      <h-renderer-form v-else v-model="editedItem.state" :elements="formModeler.elements"></h-renderer-form>
      <div class="q-mt-md">
        <q-btn color="red" @click="onCancel">取消</q-btn>
        <q-btn color="primary" class="q-ml-sm" @click="onSave">发送</q-btn>
        <slot name="button"></slot>
      </div>
    </h-container>
  </h-detail-container>
</template>

<script setup lang="ts">
import { useBpmnProcess } from "@/composables/hooks";
import { HDetailContainer, HFormSkeleton } from "@/components";
import { PAGE_NAME } from "@/configurations";

import { isEmpty } from "lodash-es";

defineOptions({ name: PAGE_NAME.WORKFLOW_PROCESS_START, components: { HDetailContainer, HFormSkeleton } });

const {
  editedItem,
  title,
  overlay,
  skeleton,
  formModeler,
  fetchStartForm,
  deleteProcessSpecifics,
  startWorkflowProcess,
} = useBpmnProcess(PAGE_NAME.WORKFLOW_PROCESS_START);

const onSave = () => {
  if (!isEmpty(editedItem.value.state)) {
    startWorkflowProcess(editedItem.value);
  }
};

const onCancel = () => {
  if (editedItem.value.created) {
    deleteProcessSpecifics(editedItem.value.id as string);
  }
};

onMounted(() => {
  fetchStartForm(editedItem.value.processDefinitionKey as string, editedItem.value.tenantId);
});
</script>
