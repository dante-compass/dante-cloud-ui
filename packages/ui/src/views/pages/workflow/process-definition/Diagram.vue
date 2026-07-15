<template>
  <q-dialog v-model="isOpen">
    <q-card style="width: 800px; max-width: 80vw">
      <h-bpmn-viewer :diagram="xml" :nodes="['DeptLeaderAudit', 'StartEvent_1']"></h-bpmn-viewer>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import type { BpmnUnionPathParams, XmlEntity } from "@/composables/declarations";

import { isEmpty, map } from "lodash-es";
import { PAGE_NAME, API } from "@/configurations";

defineOptions({ name: PAGE_NAME.WORKFLOW_PROCESS_DEFINITION_DIAGRAM });

interface Props {
  id: string;
  definitionKey: string;
  tenantId: string;
  processInstanceId: string;
}

const props = defineProps<Props>();

const isOpen = defineModel({
  type: Boolean,
  required: true,
});

const xml = ref("");
const activityNodes = ref([]) as Ref<Array<string>>;

const initActivityNodes = async (processInstanceId: string) => {
  const result = await API.bpmn
    .historyActivityInstance()
    .getAll({ sortBy: "startTime", sortOrder: "desc" }, { processInstanceId: processInstanceId });
  if (!isEmpty(result)) {
    const nodes = map(result, "activityId");
    activityNodes.value.push(...nodes);
  }
};

const getXml = () => {};

const getDiagram = () => {
  if (props.processInstanceId) {
    initActivityNodes(props.processInstanceId);
  }

  if (props.id || props.definitionKey) {
    const params: BpmnUnionPathParams = {
      id: props.id,
      key: props.definitionKey,
      tenantId: props.tenantId,
    };

    API.bpmn
      .processDefinition()
      .getXml(params)
      .then((result) => {
        const data = result as XmlEntity;
        xml.value = data.bpmn20Xml;
      })
      .catch((error) => {
        console.error("Get Diagram Error!", error);
      });
  } else {
    console.error("ID and key must have one of them!");
  }
};

onMounted(() => {
  getDiagram();
});
</script>
