<template>
  <div>
    <h-table
      :rows="tableRows"
      :columns="columns"
      :row-key="rowKey"
      selection="single"
      v-model:selected="selected"
      v-model:pagination="pagination"
      v-model:pageNumber="pagination.page"
      :totalPages="totalPages"
      :loading="loading"
      status
      reserved
      flat
      @request="findItems"
    >
      <template #top-left>
        <h-button color="primary" label="新建功能" @click="isOpenDialog = !isOpenDialog" />
      </template>

      <template #body-cell-dimension="props">
        <q-td key="dimension" :props="props">
          {{ getDictionaryItemDisplay("Dimension", props.row.dimension) }}
        </q-td>
      </template>

      <template #body-cell-type="props">
        <q-td key="type" :props="props">
          {{ ArgumentType(props.row) }}
        </q-td>
      </template>

      <template #body-cell-specs="props">
        <q-td key="specs" :props="props">
          {{ dataSpecs(props.row) }}
        </q-td>
      </template>

      <template #body-cell-actions="props">
        <q-td key="actions" :props="props">
          <h-delete-button v-if="!props.row.reserved" @click="deleteItemById(props.row[rowKey])"></h-delete-button>
        </q-td>
      </template>
    </h-table>
    <h-add-function-dialog
      v-model="isOpenDialog"
      :product-id="productId"
      :product-key="productKey"
      @success="onSuccess"
    ></h-add-function-dialog>
  </div>
</template>

<script setup lang="ts">
import type { TslFunctionEntity, TslFunctionConditions, TslFunctionProps, Specification, Specs } from "@herodotus/api";
import type { QTableColumnProps } from "@/composables/declarations";

import { CONSTANTS, API } from "@/configurations";

import { useTable, useDictionary } from "@/composables/hooks";
import { HDeleteButton } from "@/components";
import HAddFunctionDialog from "./HAddFunctionDialog.vue";

defineOptions({
  name: "HFunctionTable",
  components: {
    HDeleteButton,
    HAddFunctionDialog,
  },
});

const props = defineProps({
  productKey: { type: String, required: true },
  productId: { type: String, required: true },
});

const { tableRows, totalPages, pagination, loading, findItems, deleteItemById, conditions } = useTable<
  TslFunctionEntity,
  TslFunctionConditions
>(API.core.iotTslFunction(), CONSTANTS.ComponentName.IOT_TSL_FUNCTION);

const isOpenDialog = shallowRef<boolean>(false);

const selected = ref<Array<string>>([]);
const rowKey: TslFunctionProps = "id";

const columns: QTableColumnProps = [
  { name: "dimension", field: "dimension", align: "center", label: "功能类型" },
  { name: "name", field: "name", align: "center", label: "功能名称" },
  { name: "identifier", field: "identifier", align: "center", label: "标识符" },
  { name: "type", field: "type", align: "center", label: "数据类型" },
  { name: "specs", field: "specs", align: "left", label: "数据定义" },
  { name: "actions", field: "actions", align: "center", label: "操作" },
];

const { getDictionaryItemDisplay } = useDictionary("Dimension", "ArgumentType", "CallType", "EventType");

const ArgumentType = (item: TslFunctionEntity) => {
  if (item.dimension === "properties") {
    return getDictionaryItemDisplay("ArgumentType", item.type);
  } else {
    return "-";
  }
};

const convertMap = (obj: Record<string, string>) => {
  const result: Array<string> = [];
  Object.keys(obj).forEach((key) => {
    result.push([key, obj[key]].join(" ~ "));
  });
  return result.join(" <br/> ");
};

const dataType = (attribute: Specification<Specs>) => {
  switch (attribute.dataType.type) {
    case "int":
    case "float":
    case "double":
      return "取值范围：" + attribute.dataType.specs.min + "~" + attribute.dataType.specs.max;
    case "bool":
      return "布尔值：" + convertMap(attribute.dataType.specs);
    case "enum":
      return "枚举值：" + convertMap(attribute.dataType.specs);
    case "text":
      return "数据长度：" + attribute.dataType.specs.length;
    default:
      return "-";
  }
};

const dataSpecs = (item: TslFunctionEntity): string => {
  switch (item.dimension) {
    case "services":
      return "调用方式：" + getDictionaryItemDisplay("CallType", item.callType);
    case "events":
      return "事件类型：" + getDictionaryItemDisplay("EventType", item.eventType);
    default:
      return dataType(item.specs);
  }
};

watch(
  () => props.productId,
  (newValue) => {
    if (newValue) {
      conditions.value.productId = newValue;
    }
  },
  { immediate: true },
);

const onSuccess = () => {
  conditions.value.productId = props.productId;
  findItems({ pagination: pagination.value, getCellValue: (col: any, row: any) => {} });
};
</script>
