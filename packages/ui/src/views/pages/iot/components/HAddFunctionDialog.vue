<template>
  <h-dialog v-model="isOpenDialog" @confirm="onSave" title="添加物模型功能" external-close>
    <h-field-label text="功能类型" required></h-field-label>
    <h-dictionary-toggle
      class="q-mb-md"
      v-model="entity.dimension"
      dictionary="Dimension"
      default-value="properties"
    ></h-dictionary-toggle>
    <component :is="currentPanel" v-model="entity" ref="identifier"></component>
    <div v-if="isNotPropertiesPanel">
      <h-field-label text="描述"></h-field-label>
      <h-text-field v-model="entity.description" filled type="textarea" />
    </div>
  </h-dialog>
</template>

<script setup lang="ts">
import type { Ref } from "vue";
import type { TslFunctionEntity } from "@herodotus/api";

import { toUpper } from "lodash-es";

import { toast } from "@herodotus/core";

import { useTslValidate } from "@/composables/hooks";
import { API } from "@/configurations";
import { HDictionaryToggle } from "@/components";

import HPropertiesPanel from "./functions/HPropertiesPanel.vue";
import HEventsPanel from "./functions/HEventsPanel.vue";
import HServicesPanel from "./functions/HServicesPanel.vue";

defineOptions({
  name: "HAddFunctionDialog",
  components: {
    HDictionaryToggle,
    EVENTS_PANEL: HEventsPanel,
    PROPERTIES_PANEL: HPropertiesPanel,
    SERVICES_PANEL: HServicesPanel,
  },
});

const isOpenDialog = defineModel<boolean>({
  required: true,
});

const productId = defineModel<string>("productId", {
  required: true,
});

const productKey = defineModel<string>("productKey", {
  required: true,
});

const emit = defineEmits(["success"]);

const entity = ref({
  dimension: "properties",
  productId: productId,
  productKey: productKey,
}) as Ref<TslFunctionEntity>;
const { identifier, getIdentifierValidator } = useTslValidate();

const currentPanel = computed(() => {
  if (entity.value.dimension) {
    return toUpper(entity.value.dimension) + "_PANEL";
  } else {
    return "PROPERTIES_PANEL";
  }
});

const isNotPropertiesPanel = computed(() => {
  return currentPanel.value !== "PROPERTIES_PANEL";
});

// watch(
//   () => entity.value.dimension,
//   (newValue) => {
//     entity.value = {
//       dimension: newValue,
//       productId: props.product.productId,
//       productKey: props.product.productKey,
//     } as TslFunctionEntity;
//   },
// );

// onUpdated(() => {
//   // 每次重新打开 Dialog，清除上次操作遗留数据
//   entity.value = {
//     dimension: 'properties',
//     productId: props.product.productId,
//     productKey: props.product.productKey,
//   } as TslFunctionEntity;
// });

const onSave = () => {
  const valid = getIdentifierValidator();
  valid.then((result) => {
    if (result) {
      API.core
        .iotTslFunction()
        .saveOrUpdate(entity.value)
        .then((result) => {
          isOpenDialog.value = false;
          emit("success");
          toast.success("添加成功！");
        })
        .catch((error) => {
          isOpenDialog.value = false;
          toast.error(error.message);
        });
    }
  });
};
</script>
