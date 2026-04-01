<template>
  <h-dialog v-model="open" title="注册通行密钥" confirm-label="注册" @confirm="onSave" external-close>
    <q-form ref="createPasskeyForm">
      <h-text-field
        v-model="label"
        label="标签 *"
        placeholder="请输入标签"
        dense
        :rules="[(v: string) => !!v || '标签不能为空，请输入标签！！']"
      ></h-text-field>
    </q-form>
  </h-dialog>
</template>

<script setup lang="ts">
import { usePasskey } from '@herodotus/framework';

defineOptions({ name: 'HPasskeyRegisterDialog' });

const open = defineModel({
  type: Boolean,
  default: false,
  required: true,
});

const emit = defineEmits<{
  save: [];
}>();

const { registration } = usePasskey();
const createPasskeyForm = ref();

const label = ref('');

const onSave = async () => {
  const { valid } = await createPasskeyForm.value.validate();
  if (valid) {
    registration(label.value).then(() => {
      open.value = false;
      emit('save');
    });
  }
};
</script>
