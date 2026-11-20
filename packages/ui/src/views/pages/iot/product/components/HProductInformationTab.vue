<template>
  <q-card>
    <q-card-section>
      <q-markup-table class="text-body-large">
        <tbody>
          <tr>
            <th style="text-align: right; width: 10%">产品名称：</th>
            <td style="width: 15%">{{ entity.productName }}</td>
            <th style="text-align: right; width: 10%">节点类型：</th>
            <td style="width: 15%">{{ getDictionaryItemDisplay('NodeType', entity.nodeType) }}</td>
            <th style="text-align: right; width: 10%">创建时间：</th>
            <td style="width: 15%">{{ entity.createTime ? defaultFormat(String(entity.createTime)) : '' }}</td>
            <th style="width: 10%"></th>
            <td style="width: 15%"></td>
          </tr>

          <tr>
            <th style="text-align: right; width: 10%">所属品类：</th>
            <td style="width: 15%">{{ entity.category ? entity.category.name : '' }}</td>
            <th style="text-align: right; width: 10%">认证方式：</th>
            <td style="width: 15%">
              {{ getDictionaryItemDisplay('AuthenticationMethod', entity.authenticationMode) }}
            </td>
            <th style="text-align: right; width: 10%">联网协议：</th>
            <td style="width: 15%">{{ getDictionaryItemDisplay('NetworkingMethod', entity.networkingMethod) }}</td>
            <th style="width: 10%"></th>
            <td style="width: 15%"></td>
          </tr>

          <tr>
            <th style="text-align: right; width: 10%">动态注册：</th>
            <td style="width: 15%">
              <v-switch
                :model-value="entity.registration"
                :label="entity.registration ? '开启' : '关闭'"
                size="small"
                density="compact"
                hide-details
                class="pa-0"
                @update:model-value="onRegistrationChange(entity, $event)"
              ></v-switch>
            </td>
            <th style="text-align: right; width: 10%">产品状态：</th>
            <td style="width: 15%">{{ entity.release }}</td>
            <th style="text-align: right; width: 10%">产品描述：</th>
            <td style="width: 15%">{{ entity.description ? entity.description : '-' }}</td>
            <th style="width: 10%"></th>
            <td style="width: 15%"></td>
          </tr>
        </tbody>
      </q-markup-table>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
// Type Import
import type { HttpResult } from '@herodotus/core';
import type { ProductEntity } from '@herodotus/api';

// Import
import { toast } from '@herodotus/core';
import { useDictionary, useDateTime } from '@/composables/hooks';
import { API } from '@/configurations';

// Vue Define
defineOptions({ name: 'HProductInformationTab' });

const entity = defineModel<ProductEntity>({
  default: () => ({}) as ProductEntity,
  required: true,
});

// Hooks
const { defaultFormat } = useDateTime();
const { getDictionaryItemDisplay } = useDictionary(
  'NodeType',
  'GatewayProtocol',
  'NetworkingMethod',
  'AuthenticationMethod',
);

// Methods
const onRegistrationChange = (item: ProductEntity, event: boolean | null) => {
  item.registration = event as boolean;
  API.core
    .iotProduct()
    .toggle(item)
    .then((response) => {
      const result = response as HttpResult<ProductEntity>;
      if (result.message) {
        toast.success(result.message);
      } else {
        toast.success('操作成功');
      }
    })
    .catch((error) => {
      toast.error('操作失败');
    });
};
</script>
