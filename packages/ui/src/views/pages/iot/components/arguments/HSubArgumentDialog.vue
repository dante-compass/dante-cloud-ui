<template>
  <h-dialog v-model="isOpenDialog" title="添加参数" @confirm="onSave" external-close>
    <h-characteristic-panel v-model="entity" ref="identifier"></h-characteristic-panel>
    <h-field-label text="数据类型" required></h-field-label>
    <h-dictionary-select
      v-model="entity.dataType.type"
      dictionary="ArgumentType"
      :disable-items="['struct']"
      dense
      :clearable="false"
      :use-chips="false"
    ></h-dictionary-select>
    <component :is="currentPanel" v-model="entity"></component>
  </h-dialog>
</template>

<script setup lang="ts">
import type { Specification, Specs } from "@herodotus/api";

import { computed, onUpdated, ref } from "vue";

import { toUpper } from "lodash-es";
import { useTslEntity, useTslValidate } from "@/composables/hooks";

import { HDictionarySelect } from "@/components";
import HBoolPanel from "./HBoolPanel.vue";
import HDatePanel from "./HDatePanel.vue";
import HEnumPanel from "./HEnumPanel.vue";
import HNumberPanel from "./HNumberPanel.vue";
import HTextPanel from "./HTextPanel.vue";
import HCharacteristicPanel from "./HCharacteristicPanel.vue";

defineOptions({
  name: "HSubArgumentDialog",
  components: {
    HCharacteristicPanel,
    HDictionarySelect,
    INT_PANEL: HNumberPanel,
    FLOAT_PANEL: HNumberPanel,
    DOUBLE_PANEL: HNumberPanel,
    DATE_PANEL: HDatePanel,
    BOOL_PANEL: HBoolPanel,
    ENUM_PANEL: HEnumPanel,
    TEXT_PANEL: HTextPanel,
  },
});

const isOpenDialog = defineModel<boolean>({
  required: true,
});

const emit = defineEmits(["save"]);

const { createEmptyNormalArgument } = useTslEntity();
const { identifier, getIdentifierValidator } = useTslValidate();

const entity = ref<Specification<Specs>>(createEmptyNormalArgument());

const currentPanel = computed(() => {
  if (entity.value.dataType.type) {
    return toUpper(entity.value.dataType.type) + "_PANEL";
  } else {
    return "INT_PANEL";
  }
});

const onSave = () => {
  const validate = getIdentifierValidator();
  validate.then((result) => {
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
