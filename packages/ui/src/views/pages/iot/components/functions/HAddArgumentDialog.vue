<template>
  <h-dialog v-model="isOpenDialog" title="添加参数" @confirm="onSave" external-close>
    <h-argument-panel v-model="entity" ref="identifier"></h-argument-panel>
  </h-dialog>
</template>

<script setup lang="ts">
import type { Specification, Specs } from "@herodotus/api";

import { HDictionarySelect } from "@/components";
import { HArgumentPanel } from "../arguments";
import { useTslEntity, useTslValidate } from "@/composables/hooks";

defineOptions({
  name: "HAddArgumentDialog",
  components: {
    HDictionarySelect,
    HArgumentPanel,
  },
});

const isOpenDialog = defineModel<boolean>({
  required: true,
});

const emit = defineEmits(["save"]);

const { createEmptyNormalArgument } = useTslEntity();
const { identifier, getIdentifierValidator } = useTslValidate();

const entity = ref<Specification<Specs>>(createEmptyNormalArgument());

const onSave = () => {
  const valid = getIdentifierValidator();
  valid.then((result) => {
    if (result) {
      isOpenDialog.value = false;
      emit("save", entity.value);
    }
  });
};

onUpdated(() => {
  // 每次重新打开 Dialog，清除上次操作遗留数据
  entity.value = createEmptyNormalArgument();
});
</script>
