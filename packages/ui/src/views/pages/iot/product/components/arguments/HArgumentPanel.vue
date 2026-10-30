<template>
  <div>
    <h-characteristic-panel v-model="argument" :status="status"></h-characteristic-panel>
    <h-label text="数据类型：" required></h-label>
    <h-dictionary-select
      v-model="argument.dataType.type"
      dictionary="ArgumentType"
      density="compact"
      :disabled="disabled"
    ></h-dictionary-select>
    <component :is="currentPanel" v-model="argument" :status="status"></component>
  </div>
</template>

<script setup lang="ts">
import type { TslStatus, Specification, Specs } from '@herodotus/api';

import { toUpper } from 'lodash-es';

import { useTslStatus } from '../../../composables/hooks';

import { HDictionarySelect } from '@/components/library/HDictionary';

import HArgumentBoolPanel from './HArgumentBoolPanel.vue';
import HArgumentDatePanel from './HArgumentDatePanel.vue';
import HArgumentEnumPanel from './HArgumentEnumPanel.vue';
import HArgumentNumberPanel from './HArgumentNumberPanel.vue';
import HArgumentTextPanel from './HArgumentTextPanel.vue';
import HArgumentStructPanel from './HArgumentStructPanel.vue';
import HCharacteristicPanel from './HCharacteristicPanel.vue';

defineOptions({
  name: 'HArgumentPanel',
  components: {
    HCharacteristicPanel,
    HDictionarySelect,
    INT_PANEL: HArgumentNumberPanel,
    FLOAT_PANEL: HArgumentNumberPanel,
    DOUBLE_PANEL: HArgumentNumberPanel,
    DATE_PANEL: HArgumentDatePanel,
    BOOL_PANEL: HArgumentBoolPanel,
    ENUM_PANEL: HArgumentEnumPanel,
    TEXT_PANEL: HArgumentTextPanel,
    STRUCT_PANEL: HArgumentStructPanel,
  },
});

interface Props {
  status?: TslStatus;
}

const props = withDefaults(defineProps<Props>(), {
  status: 'create',
});

const argument = defineModel<Specification<Specs>>({
  default: () => ({ identifier: '', name: '', dataType: { type: 'int', specs: {} } }) as Specification<Specs>,
});

const { isCreate, disabled } = useTslStatus(() => props.status);

const currentPanel = computed(() => {
  if (argument.value.dataType.type) {
    return toUpper(argument.value.dataType.type) + '_PANEL';
  } else {
    return 'INT_PANEL';
  }
});

watch(currentPanel, (newValue) => {
  if (isCreate.value) {
    switch (newValue) {
      case 'STRUCT_PANEL':
        argument.value.dataType.specs = [];
        break;
      default:
        argument.value.dataType.specs = {};
        break;
    }
  }
});
</script>
