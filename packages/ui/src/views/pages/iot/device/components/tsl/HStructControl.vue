<template>
  <v-table class="text-body-small" density="compact">
    <tbody>
      <tr align="right" v-for="(specs, i) in props.specs.dataType.specs" :key="i">
        <th style="width: 30%">{{ specs.name }}（{{ specs.identifier }}）：</th>

        <td style="width: 70%">
          <component
            :is="getComponent(specs.dataType.type)"
            v-model="model[specs.identifier]"
            :specs="specs"
          ></component>
        </td>
      </tr>
    </tbody>
  </v-table>
</template>

<script setup lang="ts">
import type { Specification, StructSpecs } from '@herodotus/api';

import { isEmpty, get } from 'lodash-es';

import { useTslEntity } from '../../../composables/hooks';

import HBoolControl from './HBoolControl.vue';
import HDateControl from './HDateControl.vue';
import HEnumControl from './HEnumControl.vue';
import HNumberControl from './HNumberControl.vue';
import HTextControl from './HTextControl.vue';

defineOptions({
  name: 'HStructControl',
  components: { HBoolControl, HDateControl, HEnumControl, HNumberControl, HTextControl },
});

interface Props {
  specs: Specification<StructSpecs>;
}

const props = withDefaults(defineProps<Props>(), {});

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
};

const { isSpecificationNotEmpty, createDefaultValue } = useTslEntity();

const getComponent = (type: string) => componentMap[type];

watch(
  () => props.specs,
  (newValue) => {
    if (newValue && isSpecificationNotEmpty(newValue)) {
      if (isEmpty(model.value)) {
        // 如果 model 为空，则生成属性以及对应的默认值
        model.value = Object.fromEntries(
          newValue.dataType.specs.map((item) => [item.identifier, createDefaultValue(item.dataType.type)]),
        );
      } else {
        // 如果 model 有值，则根据 identifier 取到对应的值，并设置给 entity。找不到对应属性则设置为默认值。
        model.value = Object.fromEntries(
          newValue.dataType.specs.map((item) => [
            item.identifier,
            get(model.value, item.identifier, createDefaultValue(item.dataType.type)),
          ]),
        );
      }
    }
  },
);
</script>
