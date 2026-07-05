<template>
  <q-list>
    <q-expansion-item label="查询条件：" default-opened>
      <q-card>
        <q-card-section>
          <h-row align="center" gutter="md" horizontal>
            <h-column :cols="2">
              <h-text-field
                v-model="conditions.topic"
                label="Mqtt客户端ID"
                debounce="1000"
                dense
                class="q-pb-none"
              ></h-text-field>
            </h-column>
            <h-column :cols="2">
              <h-dictionary-select
                v-model="conditions.action"
                dictionary="Action"
                label="主题操作"
                dense
                class="q-pb-none"
              ></h-dictionary-select>
            </h-column>
            <h-column :cols="2">
              <h-dictionary-select
                v-model="conditions.permission"
                dictionary="Permission"
                label="主题权限"
                dense
                class="q-pb-none"
              ></h-dictionary-select>
            </h-column>
            <h-column :cols="2">
              <h-dictionary-select
                v-model="conditions.qos"
                dictionary="Qos"
                label="Qos"
                dense
                class="q-pb-none"
              ></h-dictionary-select>
            </h-column>
            <h-column :cols="2">
              <h-dictionary-select
                v-model="conditions.retain"
                dictionary="Retain"
                label="保留数据"
                dense
                class="q-pb-none"
              ></h-dictionary-select>
            </h-column>
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
import type { MqttAuthorityConditions } from "@herodotus/api";

defineOptions({ name: "MqttAuthorityConditions" });

const conditions = defineModel<MqttAuthorityConditions>({
  default: () => ({}) as MqttAuthorityConditions,
  required: true,
});

const onClear = () => {
  conditions.value = {} as MqttAuthorityConditions;
};
</script>
