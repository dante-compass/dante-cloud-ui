<template>
  <h-dialog v-model="model" @confirm="onSave" title="添加物模型功能" external-close>
    <h-field-label text="功能类型" required></h-field-label>
    <h-dictionary-toggle
      class="q-mb-md"
      v-model="entity.dimension"
      dictionary="Dimension"
      default-value="properties"
    ></h-dictionary-toggle>
    <component :is="currentPanel" v-model="entity" ref="identifier"></component>
    <h-field-label text="描述"></h-field-label>
    <h-text-field v-model="entity.description" filled type="textarea" />
  </h-dialog>
</template>

<script setup lang="ts">
import type { TslStatus, TslFunctionEntity } from '@herodotus/api';

import { toUpper } from 'lodash-es';
import { toast } from '@herodotus/core';

import { useTslValidation, useTslStatus, useTslEntity } from '../../composables/hooks';
import { API } from '@/configurations';
import { HDictionaryToggle } from '@/components/library/HDictionary';

import HPropertiesPanel from './functions/HPropertiesPanel.vue';
import HEventsPanel from './functions/HEventsPanel.vue';
import HServicesPanel from './functions/HServicesPanel.vue';

defineOptions({
  name: 'HAddFunctionDialog',
  components: {
    HDictionaryToggle,
    EVENTS_PANEL: HEventsPanel,
    PROPERTIES_PANEL: HPropertiesPanel,
    SERVICES_PANEL: HServicesPanel,
  },
});

interface Props {
  productKey: string;
  productId: string;
  status?: TslStatus;
}

const props = withDefaults(defineProps<Props>(), {
  status: 'create',
});

const model = defineModel<boolean>({
  default: false,
  required: true,
});

const entity = defineModel<TslFunctionEntity>('entity', {
  default: () => ({}) as TslFunctionEntity,
  required: true,
});

const emit = defineEmits(['success']);
const { identifier, getValidator } = useTslValidation();
const { isCreate } = useTslStatus(() => props.status);
const { createEmptyNormalArgument } = useTslEntity();

const currentPanel = computed(() => {
  if (entity.value.dimension) {
    return toUpper(entity.value.dimension) + '_PANEL';
  } else {
    return 'PROPERTIES_PANEL';
  }
});

watch(
  () => entity.value.dimension,
  (newValue) => {
    if (isCreate.value) {
      switch (newValue) {
        case 'events':
          entity.value.arguments.eventOutputData = [];
          break;
        case 'services':
          entity.value.arguments.serviceInputData = [];
          entity.value.arguments.serviceOutputData = [];
          break;
        default:
          entity.value.arguments.property = createEmptyNormalArgument();
          break;
      }
    }
  },
);

const onSave = () => {
  const valid = getValidator();
  valid.then((result) => {
    if (result) {
      API.core
        .iotTslFunction()
        .saveOrUpdate(entity.value)
        .then((result) => {
          model.value = false;
          emit('success');
          toast.success('添加成功！');
        })
        .catch((error) => {
          model.value = false;
          toast.error(error.message);
        });
    }
  });
};
</script>
