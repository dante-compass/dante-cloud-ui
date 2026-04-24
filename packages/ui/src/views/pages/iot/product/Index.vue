<template>
  <div class="q-gutter-y-md">
    <h-product-condition v-model="conditions"></h-product-condition>
    <h-table
      :rows="tableRows"
      :columns="columns"
      :row-key="rowKey"
      selection="single"
      v-model:selected="selected"
      v-model:pagination="pagination"
      v-model:pageNumber="pagination.page"
      :totalPages="totalPages"
      :loading="loading"
      status
      reserved
      @request="findItems"
    >
      <template #top-left>
        <h-button color="primary" label="新建产品" @click="toCreate" />
      </template>

      <template #body-cell-category="props">
        <q-td key="category" :props="props">
          {{ props.row.category ? props.row.category.categoryName : "" }}
        </q-td>
      </template>

      <template #body-cell-nodeType="props">
        <q-td key="nodeType" :props="props">
          {{ getDictionaryItemDisplay("NodeType", props.row.nodeType) }}
        </q-td>
      </template>

      <template #body-cell-gatewayProtocol="props">
        <q-td key="gatewayProtocol" :props="props">
          {{ getDictionaryItemDisplay("GatewayProtocol", props.row.gatewayProtocol) }}
        </q-td>
      </template>

      <template #body-cell-networkingMethod="props">
        <q-td key="networkingMethod" :props="props">
          {{ getDictionaryItemDisplay("NetworkingMethod", props.row.networkingMethod) }}
        </q-td>
      </template>

      <template #body-cell-authenticationMode="props">
        <q-td key="authenticationMode" :props="props">
          {{ getDictionaryItemDisplay("AuthenticationMode", props.row.authenticationMode) }}
        </q-td>
      </template>

      <template #body-cell-registration="props">
        <q-td key="registration" :props="props">
          <q-toggle
            :modelValue="props.row.registration"
            @update:model-value="onRegistrationChange(props.row, $event)"
          />
        </q-td>
      </template>

      <template #body-cell-actions="props">
        <q-td key="actions" :props="props">
          <h-edit-button @click="toEdit(props.row)"></h-edit-button>
          <h-info-button @click="toInfo(props.row)"></h-info-button>
          <h-delete-button v-if="!props.row.reserved" @click="deleteItemById(props.row[rowKey])"></h-delete-button>
        </q-td>
      </template>
    </h-table>
  </div>
</template>

<script setup lang="ts">
import type { ProductEntity, ProductConditions, ProductProps } from "@herodotus/api";
import type { QTableColumnProps, HttpResult } from "@/composables/declarations";

import { useTable } from "@/composables/hooks";
import { CONSTANTS, API } from "@/configurations";
import { toast } from "@herodotus/core";
import { HDeleteButton, HEditButton, HInfoButton, HTable } from "@/components";
import { useDictionary } from "@/composables/hooks";
import Search from "./Search.vue";

defineOptions({
  name: CONSTANTS.ComponentName.IOT_PRODUCT,
  components: {
    HDeleteButton,
    HEditButton,
    HInfoButton,
    HTable,
    Search,
  },
});

const { tableRows, totalPages, pagination, loading, toEdit, toCreate, toInfo, findItems, deleteItemById, conditions } =
  useTable<ProductEntity, ProductConditions>(API.core.iotProduct(), CONSTANTS.ComponentName.IOT_PRODUCT);

const selected = ref([]);
const rowKey: ProductProps = "id";

const { getDictionaryItemDisplay } = useDictionary(
  "NodeType",
  "GatewayProtocol",
  "NetworkingMethod",
  "AuthenticationMethod",
);

const columns: QTableColumnProps = [
  { name: "productKey", field: "productKey", align: "center", label: "ProductKey" },
  { name: "productName", field: "productName", align: "center", label: "产品名称" },
  { name: "category", field: "category", align: "center", label: "所属品类" },
  { name: "nodeType", field: "nodeType", align: "center", label: "节点类型" },
  { name: "gatewayProtocol", field: "gatewayProtocol", align: "center", label: "网关协议" },
  { name: "networkingMethod", field: "networkingMethod", align: "center", label: "联网方式" },
  {
    name: "authenticationMethod",
    field: "authenticationMethod",
    align: "center",
    label: "认证方式",
  },
  { name: "registration", field: "registration", align: "center", label: "开启动态注册" },
  { name: "release", field: "release", align: "center", label: "是否发布" },
  { name: "quantity", field: "quantity", align: "center", label: "设备数量" },
  { name: "reserved", field: "reserved", align: "center", label: "保留数据" },
  { name: "status", field: "status", align: "center", label: "状态" },
  { name: "actions", field: "actions", align: "center", label: "操作" },
];

const onRegistrationChange = (item: ProductEntity, event: boolean) => {
  item.registration = event as boolean;
  API.core
    .iotProduct()
    .toggle(item)
    .then((response) => {
      const result = response as HttpResult<ProductEntity>;
      if (result.message) {
        toast.success(result.message);
      } else {
        toast.success("操作成功");
      }
    })
    .catch((error) => {
      toast.error("操作失败");
    });
};
</script>
