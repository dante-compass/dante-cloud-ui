<template>
  <div>
    <h-field-label text="取值范围"></h-field-label>
    <h-container mode="three" :offset="-3" wider="center">
      <template #left>
        <h-text-field v-model="model.dataType.specs.min" dense placeholder="请输入最小值" />
      </template>
      <h-label class="q-mt-xs" text="~"></h-label>
      <template #right>
        <h-text-field v-model="model.dataType.specs.max" dense placeholder="请输入最大值" />
      </template>
    </h-container>
    <h-field-label text="步长"></h-field-label>
    <h-text-field v-model="model.dataType.specs.step" dense placeholder="请输入步长" />
    <h-field-label text="单位"></h-field-label>
    <h-unit-select v-model="unit" dense></h-unit-select>
  </div>
</template>

<script setup lang="ts">
import type { Specification, IntegerSpecs, FloatSpecs, DoubleSpecs, TslUnitEntity, TslStatus } from '@herodotus/api';

import { isEmpty } from 'lodash-es';

import { useTslStatus, useTslEntity } from '../../../composables/hooks';

import { HDictionarySelect } from '@/components/library/HDictionary';
import HTslUnitSelect from './HTslUnitSelect.vue';

defineOptions({ name: 'HArgumentNumberPanel', components: { HDictionarySelect, HTslUnitSelect } });

interface Props {
  status?: TslStatus;
}

const props = withDefaults(defineProps<Props>(), {
  status: 'create',
});

const model = defineModel<Specification<IntegerSpecs | FloatSpecs | DoubleSpecs>>({
  default: () => ({}) as Specification<IntegerSpecs | FloatSpecs | DoubleSpecs>,
});

const { disabled } = useTslStatus(() => props.status);
const { isSpecificationNotEmpty } = useTslEntity();

const unit = computed({
  get: () => {
    if (isSpecificationNotEmpty(model.value)) {
      const symbol = model.value.dataType.specs.unit;
      const name = model.value.dataType.specs.unitName;
      if (symbol && name) {
        return { name: name, symbol: symbol } as TslUnitEntity;
      }
    }
    return null;
  },
  set: (value: TslUnitEntity) => {
    if (!isEmpty(value)) {
      model.value.dataType.specs.unit = value.symbol;
      model.value.dataType.specs.unitName = value.name;
    } else {
      model.value.dataType.specs.unit = '';
      model.value.dataType.specs.unitName = '';
    }
  },
});
</script>
