<template>
  <q-card flat>
    <q-markup-table>
      <tbody>
        <tr>
          <th style="text-align: right; width: 10%">产品名称：</th>
          <td style="width: 15%">{{ entity.product ? entity.product.productName : '' }}</td>
          <th style="text-align: right; width: 10%">ProductKey：</th>
          <td style="width: 15%">{{ entity.product ? entity.product.productKey : '' }}</td>
          <th style="text-align: right; width: 10%">认证方式：</th>
          <td style="width: 15%">
            {{
              entity.product ? getDictionaryItemDisplay('AuthenticationMethod', entity.product.authenticationMode) : ''
            }}
          </td>
        </tr>

        <tr>
          <th style="text-align: right; width: 10%">节点类型：</th>
          <td style="width: 15%">
            {{ entity.product ? getDictionaryItemDisplay('NodeType', entity.product.nodeType) : '' }}
          </td>
          <th style="text-align: right; width: 10%">DeviceName：</th>
          <td style="width: 15%">{{ entity.deviceName }}</td>
          <th style="text-align: right; width: 10%">IP 地址：</th>
          <td style="width: 15%">-</td>
        </tr>

        <tr>
          <th style="text-align: right; width: 10%">创建时间：</th>
          <td style="width: 15%">
            {{ entity.createTime ? defaultFormat(String(entity.createTime)) : '' }}
          </td>
          <th style="text-align: right; width: 10%">激活时间：</th>
          <td style="width: 15%">-</td>
          <th style="text-align: right; width: 10%">最后上线时间：</th>
          <td style="width: 15%">-</td>
        </tr>

        <tr>
          <th style="text-align: right; width: 10%">最后离线时间：</th>
          <td style="width: 15%">-</td>
          <th style="text-align: right; width: 10%">当前状态：</th>
          <td style="width: 15%">-</td>
          <th style="text-align: right; width: 10%"></th>
          <td style="width: 15%">-</td>
        </tr>
      </tbody>
    </q-markup-table>
  </q-card>
</template>

<script setup lang="ts">
import type { DeviceEntity } from '@herodotus/api';

import { useDictionary, useDateTime } from '@/composables/hooks';

defineOptions({ name: 'HDeviceInformationTab' });

const entity = defineModel<DeviceEntity>({
  default: () => ({}) as DeviceEntity,
  required: true,
});

const { defaultFormat } = useDateTime();
const { getDictionaryItemDisplay } = useDictionary('NodeType', 'AuthenticationMethod');
</script>
