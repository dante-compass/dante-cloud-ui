<template>
  <div>
    <h-struct-param-list v-if="showParameters" v-model="entity.dataType.specs"></h-struct-param-list>
    <q-btn flat color="primary" label="+添加参数" @click="isOpenDialog = !isOpenDialog" />
    <h-sub-argument-dialog v-model="isOpenDialog" @save="onAddParameter"></h-sub-argument-dialog>
  </div>
</template>

<script setup lang="ts">
import type { Specification, StructSpecs, Specs } from "@herodotus/api";

import { isEmpty } from "lodash-es";
import HStructParamList from "./HStructParamList.vue";
import HSubArgumentDialog from "./HSubArgumentDialog.vue";

defineOptions({
  name: "HStructPanel",
  components: {
    HStructParamList,
    HSubArgumentDialog,
  },
});

const entity = defineModel<Specification<StructSpecs>>({
  default: () => ({}),
});

const emit = defineEmits(["update:modelValue"]);

const isOpenDialog = ref(false);

const showParameters = computed(() => {
  return !isEmpty(entity.value.dataType.specs);
});

const onAddParameter = (item: Specification<Specs>) => {
  console.log("----struct----", item);

  if (isEmpty(entity.value.dataType.specs)) {
    entity.value.dataType.specs = [];
  }
  entity.value.dataType.specs.push(item);
};
</script>
