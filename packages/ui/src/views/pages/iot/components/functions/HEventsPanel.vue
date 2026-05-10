<template>
  <div>
    <h-characteristic-panel v-model="entity" ref="identifier"></h-characteristic-panel>
    <h-field-label text="事件类型" required></h-field-label>
    <h-dictionary-option v-model="entity.eventType" dictionary="EventType" default-value="info"></h-dictionary-option>
    <h-field-label text="输出参数"></h-field-label>
    <h-in-out-param-list v-if="showParameters" v-model="entity.arguments"></h-in-out-param-list>
    <q-btn flat color="primary" label="+添加参数" @click="isOpenDialog = !isOpenDialog" />
    <h-add-argument-dialog v-model="isOpenDialog" @save="onAddParameter"></h-add-argument-dialog>
  </div>
</template>

<script setup lang="ts">
import type { TslFunctionEntity, TslArgumentEntity, Specification, Specs } from "@herodotus/api";

import { computed, shallowRef } from "vue";

import { isEmpty } from "lodash-es";
import { useTslValidate } from "@/composables/hooks";

import { HDictionaryOption } from "@/components";
import HInOutParamList from "./HInOutParamList.vue";
import HAddArgumentDialog from "./HAddArgumentDialog.vue";
import { HCharacteristicPanel } from "../arguments";

defineOptions({
  name: "HNumberPanel",
  components: {
    HDictionaryOption,
    HCharacteristicPanel,
    HInOutParamList,
    HAddArgumentDialog,
  },
});

const entity = defineModel<TslFunctionEntity>({
  default: () => ({}),
});

const isOpenDialog = shallowRef<boolean>(false);
const { identifier, validate } = useTslValidate();

const showParameters = computed(() => {
  return !isEmpty(entity.value.arguments);
});

const onAddParameter = (item: Specification<Specs>) => {
  const attribute = {
    identifier: item.identifier,
    name: item.name,
    type: item.dataType.type,
    specs: item,
  } as TslArgumentEntity;

  if (isEmpty(entity.value.arguments)) {
    entity.value.arguments = [];
  }
  entity.value.arguments.push(attribute);
};

/**
 * 对外暴露 validate() 方法，实现父组件调用子组件校验方法
 */
defineExpose({
  validate,
});
</script>
