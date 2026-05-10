<template>
  <div>
    <h-field-label text="功能名称" required></h-field-label>
    <h-text-field
      v-model.lazy="v.entity.name.$model"
      dense
      placeholder="请输入您的功能名称"
      debounce="5000"
      :error="v.entity.name.$error"
      :error-message="v.entity.name.$errors[0] ? v.entity.name.$errors[0].$message : ''"
    ></h-text-field>
    <h-field-label text="标识符" required></h-field-label>
    <h-text-field
      v-model.lazy="v.entity.identifier.$model"
      dense
      placeholder="请输入您的标识符"
      debounce="5000"
      :error="v.entity.identifier.$error"
      :error-message="v.entity.identifier.$errors[0] ? v.entity.identifier.$errors[0].$message : ''"
    ></h-text-field>
  </div>
</template>

<script setup lang="ts">
import type { Characteristic } from "@herodotus/api";

import { required, helpers } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";

defineOptions({
  name: "HCharacteristicPanel",
});

const entity = defineModel<Characteristic>({
  default: () => ({}),
});

// 修复使用 Vuelidate 时 v-model.lazy 字段出现类型校验错误问题
const state = computed(() => ({ entity: entity.value }));

const rules = {
  entity: {
    name: {
      required: helpers.withMessage("功能名称不能为空", required),
      regex: helpers.withMessage(
        "功能名称只能包含中文英文数字、短划线(-)、下划线(_)且不超过30个字符",
        helpers.regex(/^(?![_-])[\u4e00-\u9fa5a-zA-Z0-9_-]{2,30}$/),
      ),
      // isUnique: helpers.withMessage('ProductKey已存在，请使用其它ProductKey', helpers.withAsync(isUnique)),
    },
    identifier: {
      required: helpers.withMessage("标识符不能为空", required),
      regex: helpers.withMessage(
        "标识符只能包含英文、数字和下划线(_)且不超过50个字符",
        helpers.regex(/^[a-zA-Z0-9_]{2,50}$/),
      ),
    },
  },
};

const v = useVuelidate(rules, state, { $lazy: true });

const validate = (): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    v.value
      .$validate()
      .then((result) => {
        console.log("---$validate", result);
        resolve(result);
      })
      .catch(() => {
        reject(false);
      });
  });
};

/**
 * 对外暴露 validate() 方法，实现父组件调用子组件校验方法
 */
defineExpose({
  validate,
});
</script>
