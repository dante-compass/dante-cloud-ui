<template>
  <h-dynamic-forms container title="Dynamic Forms" :instance="instance" :item="editedItem" @close="onFinish" />
</template>

<script setup lang="ts">
import { PAGE_NAME, API } from "@/configurations";
import { useBaseTableItem } from "@/composables/hooks";

defineOptions({
  name: ComponentName.WIDGETS_DYNAMIC_FORM,
});

const instance = API.bpmnStorage;
const { editedItem, onReturn } = useBaseTableItem();
</script>
