<template>
  <h-center-form-layout :entity="editedItem" :title="title" :operation="operation" @save="onSave()">
    <h-text-field
      v-model.lazy="v.editedItem.productKey.$model"
      name="productKey"
      label="ProductKey * "
      placeholder="请输入 ProductKey"
      debounce="5000"
      :error="v.editedItem.productKey.$error"
      :error-message="v.editedItem.productKey.$errors[0] ? v.editedItem.productKey.$errors[0].$message : ''"
    ></h-text-field>
    <h-text-field v-model="editedItem.productName" label="产品名称" placeholder="请输入产品名称"></h-text-field>
    <!-- <h-tree-field
      v-model="categoryId"
      :items="treeItems"
      :value="categoryName"
      bottom-slots
      label="所属品类"
    ></h-tree-field> -->
    <h-dictionary-select v-model="editedItem.nodeType" dictionary="NodeType" label="节点类型"></h-dictionary-select>
    <h-dictionary-select
      v-if="isShowGatewayProtocol"
      v-model="editedItem.gatewayProtocol"
      dictionary="GatewayProtocol"
      label="网关协议"
    ></h-dictionary-select>
    <h-dictionary-select
      v-if="isShowNetworkingMethod"
      v-model="editedItem.networkingMethod"
      dictionary="NetworkingMethod"
      label="联网方式"
    ></h-dictionary-select>
    <h-dictionary-select
      v-model="editedItem.authenticationMode"
      dictionary="AuthenticationMode"
      label="认证方式"
    ></h-dictionary-select>
  </h-center-form-layout>
</template>

<script setup lang="ts">
import { computed } from "vue";
import useVuelidate from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";

import type { ProductEntity } from "@herodotus/api";

import { API } from "@/configurations";
import { useTableItem } from "@/composables/hooks";
import { HCenterFormLayout, HDictionarySelect } from "@/components";

defineOptions({
  name: "IotProductContent",
  components: {
    HCenterFormLayout,
    HDictionarySelect,
  },
});

const { editedItem, operation, title, saveOrUpdate } = useTableItem<ProductEntity>(API.core.iotProduct());

const isUnique = () => {
  let productKey = editedItem.value.productKey;

  return new Promise((resolve, reject) => {
    if (productKey) {
      API.core
        .iotProduct()
        .validateProductKey(productKey)
        .then((result) => {
          let product = result.data as ProductEntity;
          // 如果能够查询到username
          // 如果该username 对应的 userId 与当前 editedItem中的userId相同
          // 则认为是编辑状态，而且username 没有变化，那么就校验通过。
          // 目前能想到的解决新建空值、编辑是原值等校验问题的最优解
          resolve(!(product && product.productKey !== editedItem.value.productKey));
        });
    } else {
      reject(false);
    }
  });
};

const rules = {
  editedItem: {
    productKey: {
      required: helpers.withMessage("ProductKey不能为空", required),
      regex: helpers.withMessage("用户名只能包含字母，数字，下划线，减号", helpers.regex(/^[a-zA-Z0-9_-]{4,16}$/)),
      isUnique: helpers.withMessage("ProductKey已存在，请使用其它ProductKey", helpers.withAsync(isUnique)),
    },
  },
};

const v = useVuelidate(rules, { editedItem }, { $lazy: true });

const isShowGatewayProtocol = computed(() => {
  return editedItem.value.nodeType === "1";
});

const isShowNetworkingMethod = computed(() => {
  return editedItem.value.nodeType === "0" || editedItem.value.nodeType === "2";
});

const onSave = () => {
  if (!v.value.$anyDirty) {
    saveOrUpdate();
  } else {
    v.value.$validate().then((result) => {
      if (result) {
        saveOrUpdate();
      }
    });
  }
};
</script>
