<template>
  <q-list bordered class="rounded-borders">
    <q-expansion-item label="查询条件：" default-opened>
      <q-card>
        <q-card-section>
          <h-row align="center" gutter="md" horizontal>
            <h-column :cols="2">
              <h-text-field
                v-model="model.productKey"
                debounce="1000"
                label="ProductKey"
                dense
                class="q-pb-none"
              ></h-text-field>
            </h-column>
            <h-column :cols="2">
              <h-text-field
                v-model="model.productName"
                debounce="1000"
                label="产品名称"
                dense
                class="q-pb-none"
              ></h-text-field>
            </h-column>
            <h-column :cols="2">
              <h-text-field
                v-model="model.categoryName"
                debounce="1000"
                label="品类名称"
                dense
                class="q-pb-none"
              ></h-text-field>
            </h-column>
            <h-column :cols="2"></h-column>
            <h-column :cols="2"></h-column>
            <h-column auto>
              <h-button color="red" icon="mdi-broom" tooltip="清空" @click.stop="onClear()"></h-button>
            </h-column>
          </h-row>
        </q-card-section>
      </q-card>
    </q-expansion-item>
  </q-list>
</template>

<script setup lang="ts">
import type { ProductConditions } from "@herodotus/api";

defineOptions({
  name: "HProductCondition",
});

const model = defineModel<ProductConditions>({
  required: true,
});

const onClear = () => {
  model.value = {} as ProductConditions;
};
</script>
