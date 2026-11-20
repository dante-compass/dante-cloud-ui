<template>
  <h-dialog v-model="openDialog" title="添加参数" @confirm="onSave" @cancel="onCancel" external-close>
    <v-form ref="primaryAddingForm">
      <h-argument-panel v-model="currentArgument" ref="identifier" :status="status"></h-argument-panel>
    </v-form>
  </h-dialog>
</template>

<script setup lang="ts">
import type { TslStatus, Specification, Specs } from '@herodotus/api';

import { isEmpty } from 'lodash-es';

import { useTslEntity } from '../../../composables/hooks';

import HArgumentPanel from './HArgumentPanel.vue';

defineOptions({ name: 'HPrimaryAddingDialog', components: { HArgumentPanel } });

interface Props {
  status?: TslStatus;
  argument?: Specification<Specs>;
}

const props = withDefaults(defineProps<Props>(), {
  status: 'create',
});

const emit = defineEmits<{
  save: [item: Specification<Specs>];
  cancel: [];
}>();

const openDialog = defineModel<boolean>({
  required: true,
});

const { createEmptyNormalSpecification } = useTslEntity();

const primaryAddingForm = ref();
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

const onSave = async () => {
  const { valid } = await primaryAddingForm.value.validate();
  if (valid) {
    openDialog.value = false;
    emit('save', currentArgument.value);
  }
};

const onCancel = () => {
  openDialog.value = false;
  emit('cancel');
};
</script>
