<template>
  <q-list>
    <q-expansion-item label="查询条件：" default-opened>
      <q-card>
        <q-card-section>
          <h-row align="center" gutter="md" horizontal>
            <h-column :cols="2">
              <h-text-field
                v-model="conditions.clientId"
                label="Mqtt客户端ID"
                debounce="1000"
                dense
                class="q-pb-none"
              ></h-text-field>
            </h-column>
            <h-column :cols="2">
              <h-text-field
                v-model="conditions.username"
                label="Mqtt用户名"
                debounce="1000"
                dense
                class="q-pb-none"
              ></h-text-field>
            </h-column>
            <h-column :cols="2"> </h-column>
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
import type { MqttAccountConditions } from "@herodotus/api";

defineOptions({ name: "SysElementCondition" });

const conditions = defineModel<MqttAccountConditions>({
  default: () => ({}) as MqttAccountConditions,
  required: true,
});

const onClear = () => {
  conditions.value = {} as MqttAccountConditions;
};
</script>
