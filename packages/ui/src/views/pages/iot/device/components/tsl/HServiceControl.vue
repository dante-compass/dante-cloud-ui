<template>
  <v-card flat>
    <v-table class="text-body-small" density="compact">
      <tbody>
        <tr align="right" v-for="(item, index) in arguments" :key="index">
          <th style="width: 30%">{{ item.name }}（{{ item.identifier }}）：</th>

          <td style="width: 70%" :class="[{ 'pr-0': isStruct(item) }]">
            <component :is="getComponent(item.type)" v-model="model[item.identifier]" :specs="item.specs"></component>
          </td>
        </tr>
      </tbody>
    </v-table>
  </v-card>
</template>

<script setup lang="ts">
import type { Component } from 'vue';
import type { TslArgumentEntity } from '@herodotus/api';

import HBoolControl from './HBoolControl.vue';
import HDateControl from './HDateControl.vue';
import HEnumControl from './HEnumControl.vue';
import HNumberControl from './HNumberControl.vue';
import HTextControl from './HTextControl.vue';
import HStructControl from './HStructControl.vue';

defineOptions({
  name: 'HServiceControl',
  components: { HBoolControl, HDateControl, HEnumControl, HNumberControl, HTextControl, HStructControl },
});

interface Props {
  arguments: TslArgumentEntity[];
}

const props = withDefaults(defineProps<Props>(), {
  arguments: () => [],
});

const model = defineModel<Record<string, any>>({
  default: () => ({}),
});

const componentMap: Record<string, Component> = {
  int: HNumberControl,
  float: HNumberControl,
  double: HNumberControl,
  bool: HBoolControl,
  enum: HEnumControl,
  text: HTextControl,
  date: HDateControl,
  struct: HStructControl,
};

const getComponent = (type: string) => componentMap[type];

const isStruct = (item: TslArgumentEntity) => {
  return item.type === 'struct';
};
</script>
