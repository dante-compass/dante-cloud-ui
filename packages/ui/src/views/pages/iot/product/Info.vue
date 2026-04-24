<template>
  <h-full-width-form-layout :entity="editedItem" :title="title" :operation="operation">
    <q-splitter v-model="splitterModel">
      <template v-slot:before>
        <q-tabs v-model="tabs" vertical active-color="primary">
          <q-tab name="specification" label="物模型" />
        </q-tabs>
      </template>
      <template v-slot:after>
        <q-tab-panels v-model="tabs" animated swipeable vertical transition-prev="jump-up" transition-next="jump-up">
          <q-tab-panel name="specification" class="q-pt-none">
            <h-function-table :product-id="editedItem.id" :product-key="editedItem.productKey"></h-function-table>
          </q-tab-panel>
        </q-tab-panels>
      </template>
    </q-splitter>
  </h-full-width-form-layout>
</template>

<script setup lang="ts">
import { shallowRef } from "vue";

import type { ProductEntity } from "@herodotus/api";
import { API } from "@/configurations";
import { useTableItem } from "@/composables/hooks";
import { HCenterFormLayout, HFullWidthFormLayout } from "@/components";
import { HDictionarySelect } from "@/components";
import { HFunctionTable } from "@/composables/iot";

defineOptions({
  name: "IotProductInfo",
  components: {
    HCenterFormLayout,
    HFullWidthFormLayout,
    HDictionarySelect,
    HFunctionTable,
  },
});

const splitterModel = shallowRef(5);
const tabs = shallowRef();

const { editedItem, operation, title } = useTableItem<ProductEntity>(API.iot.product());
</script>
