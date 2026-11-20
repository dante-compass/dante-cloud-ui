<template>
  <v-form ref="identifier">
    <h-characteristic-panel v-model="entity"></h-characteristic-panel>
    <h-label text="调用方式：" required></h-label>
    <h-dictionary-option
      v-model="entity.callType"
      dictionary="CallType"
      default-value="async"
      inline
      :disabled="disabled"
    ></h-dictionary-option>
    <h-parameters v-model="entity.arguments.serviceInputData" :status="status" label="输入参数："></h-parameters>
    <h-parameters v-model="entity.arguments.serviceOutputData" :status="status"></h-parameters>
  </v-form>
</template>

<script setup lang="ts">
import type { TslStatus, TslFunctionEntity, TslArgumentEntity } from '@herodotus/api';

import { useTslValidation, useTslStatus } from '../../../composables/hooks';

import { HDictionaryOption } from '@/components/library/HDictionary';
import { HCharacteristicPanel, HParameters } from '../arguments';

defineOptions({
  name: 'HServicePanel',
  components: {
    HDictionaryOption,
    HCharacteristicPanel,
    HParameters,
  },
});

interface Props {
  status?: TslStatus;
}

const props = withDefaults(defineProps<Props>(), {
  status: 'create',
});

const entity = defineModel<TslFunctionEntity>({
  default: () =>
    ({
      dimension: 'services',
      required: false,
      arguments: {
        serviceOutputData: [] as TslArgumentEntity[],
        serviceInputData: [] as TslArgumentEntity[],
      },
    }) as TslFunctionEntity,
});

const { identifier, validate } = useTslValidation();
const { disabled } = useTslStatus(() => props.status);

/**
 * 对外暴露 validate() 方法，实现父组件调用子组件校验方法
 */
defineExpose({
  validate,
});
</script>
