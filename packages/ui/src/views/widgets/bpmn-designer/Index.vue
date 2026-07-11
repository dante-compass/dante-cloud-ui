<template>
  <q-card>
    <h-bpmn-designer
      :instance="instance"
      height="91vh"
      :class="[$q.dark.isActive ? 'bg-dark text-white q-pt-xs' : 'bg-white text-grey-8 q-pt-xs']"
      @close="onReturn"
    ></h-bpmn-designer>
  </q-card>
</template>

<script setup lang="ts">
import { useQuasar } from "quasar";
import { PAGE_NAME, API } from "@/configurations";
import { useBaseTableItem } from "@/composables/hooks";

defineOptions({
  name: "WidgetsBpmnDesigner",
});

const instance = API.bpmnStorage;
const $q = useQuasar();

const { onReturn } = useBaseTableItem(PAGE_NAME.WIDGETS_DYNAMIC_FORM);
</script>
