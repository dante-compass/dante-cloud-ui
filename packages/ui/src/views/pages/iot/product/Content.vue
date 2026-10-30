<template>
  <h-center-form-layout :entity="editedItem" :title="title" :overlay="overlay" @save="onSave()" @cancel="onReturn">
    <v-form ref="productForm" validate-on="blur lazy">
      <q-select
        filled
        v-model="editedItem.category"
        use-input
        hide-selected
        fill-input
        input-debounce="0"
        :options="items"
        option-title="name"
        option-value="id"
        map-options
        @filter="filterFn"
      >
        <template #no-option>
          <q-item>
            <q-item-section class="text-grey">No results</q-item-section>
          </q-item>
        </template>
      </q-select>
      <h-text-field
        v-model.lazy="editedItem.productKey"
        name="productKey"
        label="ProductKey *"
        placeholder="请输入 ProductKey"
        :rules="[
          (v: string) => !!v || 'ProductKey不能为空',
          (v: string) => (v && v.length >= 5) || 'ProductKey至少5个字符',
          (v: string) => isUniqueRule(v),
        ]"
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
    </v-form>
  </h-center-form-layout>
</template>

<script setup lang="ts">
import type { ProductEntity, ProductCategoryEntity, ProductCategoryConditions } from '@herodotus/api';

import { useAutocomplete } from '@herodotus/framework';
import { useTableItem } from '@/composables/hooks';
import { API, PAGE_NAME } from '@/configurations';

defineOptions({ name: PAGE_NAME.IOT_PRODUCT_CONTENT });

const productForm = ref();

const { editedItem, title, overlay, saveOrUpdate, onReturn } = useTableItem<ProductEntity>(
  API.core.iotProduct(),
  PAGE_NAME.IOT_PRODUCT_CONTENT,
);
const { loading, items, search } = useAutocomplete<ProductCategoryConditions, ProductCategoryEntity>(
  'name',
  API.core.iotProductCategory(),
);

const validateProductKey = async (productKey: string) => {
  return await new Promise((resolve, reject) => {
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

const isUniqueRule = (roleCode: string) => {
  return validateProductKey(roleCode)
    .then((validate) => {
      if (validate) {
        return true;
      } else {
        return 'ProductKey已被占用，请改用其它ProductKey';
      }
    })
    .catch(() => {
      return '后端服务暂时不可用';
    });
};

const isShowGatewayProtocol = computed(() => {
  return editedItem.value.nodeType === '1';
});

const isShowNetworkingMethod = computed(() => {
  return editedItem.value.nodeType === '0' || editedItem.value.nodeType === '2';
});

const filterFn = (val: string, update: any, abort: any) => {
  update(() => {
    search.value = val.toLocaleLowerCase();
  });
};

const onSave = async () => {
  const { success } = await productForm.value.validate();
  if (success) {
    saveOrUpdate();
  }
};
</script>
