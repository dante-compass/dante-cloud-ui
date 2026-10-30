<template>
  <h-dialog v-model="openDialog" title="添加参数" @confirm="onSave" @cancel="onCancel">
    <q-form ref="secondaryAddingForm">
      <h-characteristic-panel v-model="currentArgument" :status="status"></h-characteristic-panel>
      <h-label text="数据类型" required></h-label>
      <h-dictionary-select
        v-model="currentArgument.dataType.type"
        dictionary="ArgumentType"
        density="compact"
        :disabled-items="['struct']"
        :disabled="disabled"
      ></h-dictionary-select>
      <component :is="currentPanel" v-model="currentArgument" :status="status"></component>
    </q-form>
  </h-dialog>
</template>

<script setup lang="ts">
import type { TslStatus, Specification, Specs } from '@herodotus/api';

import { isEmpty, toUpper } from 'lodash-es';

import { useTslStatus, useTslEntity } from '../../../composables/hooks';

import { HDictionarySelect } from '@/components/library/HDictionary';
import HArgumentBoolPanel from './HArgumentBoolPanel.vue';
import HArgumentDatePanel from './HArgumentDatePanel.vue';
import HArgumentEnumPanel from './HArgumentEnumPanel.vue';
import HArgumentNumberPanel from './HArgumentNumberPanel.vue';
import HArgumentTextPanel from './HArgumentTextPanel.vue';
import HCharacteristicPanel from './HCharacteristicPanel.vue';

defineOptions({
  name: 'HSecondaryAddingDialog',
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
  },
});

interface Props {
  status?: TslStatus;
  argument?: Specification<Specs>;
}

const props = withDefaults(defineProps<Props>(), {
  status: 'create',
});

const openDialog = defineModel<boolean>({
  required: true,
});

const emit = defineEmits<{
  save: [item: Specification<Specs>];
  cancel: [];
}>();

const { isCreate, disabled } = useTslStatus(() => props.status);
const { createEmptyNormalSpecification } = useTslEntity();

const secondaryAddingForm = ref();
const currentArgument = ref(createEmptyNormalSpecification()) as Ref<Specification<Specs>>;

watch(
  () => props.argument,
  (newValue) => {
    if (isEmpty(newValue)) {
      currentArgument.value = createEmptyNormalSpecification();
    } else {
      currentArgument.value = { ...newValue };
    }
  },
  { immediate: true },
);

const currentPanel = computed(() => {
  if (currentArgument.value.dataType.type) {
    return toUpper(currentArgument.value.dataType.type) + '_PANEL';
  } else {
    return 'INT_PANEL';
  }
});

// 如果是新建状态，那么在切换面板时要重置参数的值，以防
watch(currentPanel, () => {
  if (isCreate.value) {
    currentArgument.value.dataType.specs = {};
  }
});

const onSave = async () => {
  const { success } = await secondaryAddingForm.value.validate();
  if (success) {
    openDialog.value = false;
    emit('save', currentArgument.value);
  }
};

const onCancel = () => {
  openDialog.value = false;
  emit('cancel');
};
</script>
