<template>
  <q-list>
    <q-expansion-item label="查询条件：" default-opened>
      <q-card>
        <q-card-section>
          <h-row align="center" gutter="md" horizontal>
            <h-column :cols="2">
              <h-dictionary-select
                v-model="conditions.area"
                dictionary="Area"
                label="主题使用区域"
                dense
              ></h-dictionary-select>
            </h-column>
            <h-column :cols="2">
              <h-dictionary-select
                v-model="conditions.action"
                dictionary="Action"
                label="主题操作"
                dense
              ></h-dictionary-select>
            </h-column>
            <h-column :cols="2">
              <h-dictionary-select
                v-model="conditions.purpose"
                dictionary="Purpose"
                label="主题用途"
                dense
              ></h-dictionary-select>
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
  <v-row>
    <v-col cols="2">
      <h-dictionary-select
        v-model="conditions.area"
        dictionary="Area"
        label="主题使用区域"
        density="compact"
        hide-details
      ></h-dictionary-select>
    </v-col>
    <v-col cols="2">
      <h-dictionary-select
        v-model="conditions.action"
        dictionary="Action"
        label="主题操作"
        density="compact"
        hide-details
      ></h-dictionary-select>
    </v-col>
    <v-col cols="2">
      <h-dictionary-select
        v-model="conditions.purpose"
        dictionary="Purpose"
        label="主题用途"
        density="compact"
        hide-details
      ></h-dictionary-select>
    </v-col>

    <v-col></v-col>
    <v-col cols="1" class="text-end pr-0">
      <h-button color="red" icon="mdi-broom" tooltip="清空" variant="text" @click.stop="onClear()"></h-button>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import type { MqttCategoryConditions } from "@herodotus/api";

defineOptions({ name: "SysElementCondition" });

const conditions = defineModel<MqttCategoryConditions>({
  default: () => ({}) as MqttCategoryConditions,
  required: true,
});

const onClear = () => {
  conditions.value = {} as MqttCategoryConditions;
};
</script>
