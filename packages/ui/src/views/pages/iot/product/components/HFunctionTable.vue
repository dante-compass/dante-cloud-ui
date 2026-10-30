<template>
  <div>
    <h-table
      :rows="tableRows"
      :columns="headers"
      :row-key="rowKey"
      selection="single"
      v-model:selected="selected"
      v-model:pagination="pagination"
      v-model:pageNumber="pagination.page"
      :totalPages="totalPages"
      :loading="loading"
      status
      reserved
      flat
      @request="fetchItems"
    >
      <template #top-left>
        <h-button color="primary" label="新建功能" @click="openDialogForCreate" />
      </template>

      <template #body-cell-dimension="props">
        <q-td key="dimension" :props="props">
          <q-chip v-if="props.row.dimension" color="getDimensionColor(value)">
            {{ getDictionaryItemDisplay('Dimension', props.row.dimension) }}
          </q-chip>
        </q-td>
      </template>

      <template #body-cell-type="props">
        <q-td key="type" :props="props">
          <q-chip v-if="getPropertyType(props.row)" color="purple">
            {{ getPropertyType(props.row) }}
          </q-chip>
        </q-td>
      </template>

      <template #body-cell-specs="props">
        <q-td key="specs" :props="props">
          <div v-if="isBoolSpec(props.row)">
            布尔值：
            <h-spec-chip :spec="getItemsSpecs(props.row)"></h-spec-chip>
          </div>
          <div v-else-if="isEnumSpec(props.row)">
            枚举值：
            <h-spec-chip :spec="getItemsSpecs(props.row)"></h-spec-chip>
          </div>
          <div v-else>{{ displayDataType(props.row) }}</div>
        </q-td>
      </template>

      <template #body-cell-actions="props">
        <q-td key="actions" :props="props">
          <h-action-edit-button @click="openDialogForEdit(props.row)"></h-action-edit-button>
          <h-action-delete-button
            v-if="!props.row.reserved"
            @click="deleteItemById(props.row[rowKey])"
          ></h-action-delete-button>
        </q-td>
      </template>
    </h-table>
    <h-add-function-dialog
      v-model="openDialog"
      v-model:entity="entity"
      :product-id="productId"
      :product-key="productKey"
      :status="status"
      @success="fetchItems"
    ></h-add-function-dialog>
  </div>
</template>

<script setup lang="ts">
import type {
  TslFunctionEntity,
  TslFunctionProps,
  Specification,
  BoolSpecs,
  EnumSpecs,
  TslStatus,
} from '@herodotus/api';
import type { QTableColumnProps } from '@/composables/declarations';

import { useDictionary } from '@/composables/hooks';
import { useTslEntity, useTslFunctionTable } from '../../composables/hooks';
import { PAGE_NAME } from '@/configurations';

import HAddFunctionDialog from './HAddFunctionDialog.vue';
import HSpecChip from './HSpecChip.vue';

defineOptions({ name: PAGE_NAME.IOT_TSL_FUNCTION, components: { HAddFunctionDialog, HSpecChip } });

interface Props {
  productKey: string;
  productId: string;
}

const props = defineProps<Props>();

const { tableRows, totalPages, pagination, loading, deleteItemById, findFunctionsByPage, getPropertyType } =
  useTslFunctionTable();
const { getDictionaryItemDisplay } = useDictionary('Dimension', 'ArgumentType', 'CallType', 'EventType');
const { getPropertyArgumentSpecs, createEmptyFunction } = useTslEntity();

const selected = ref<Array<string>>([]);
const rowKey: TslFunctionProps = 'id';

const headers: QTableColumnProps = [
  { name: 'dimension', field: 'dimension', align: 'center', label: '功能类型' },
  { name: 'name', field: 'name', align: 'center', label: '功能名称' },
  { name: 'identifier', field: 'identifier', align: 'center', label: '标识符' },
  { name: 'type', field: 'type', align: 'center', label: '数据类型' },
  { name: 'specs', field: 'specs', align: 'left', label: '数据定义' },
  { name: 'actions', field: 'actions', align: 'center', label: '操作' },
];

const openDialog = shallowRef(false);
const entity = ref({}) as Ref<TslFunctionEntity>;
const status = shallowRef('create') as Ref<TslStatus>;

const isBoolSpec = (item: TslFunctionEntity) => {
  const specs = getPropertyArgumentSpecs(item);
  return specs && specs.dataType.type === 'bool';
};

const isEnumSpec = (item: TslFunctionEntity) => {
  const specs = getPropertyArgumentSpecs(item);
  return specs && specs.dataType.type === 'enum';
};

const displayDataType = (item: TslFunctionEntity) => {
  if (item.dimension === 'properties') {
    const specs = getPropertyArgumentSpecs(item);
    if (specs) {
      switch (specs.dataType.type) {
        case 'int':
        case 'float':
        case 'double':
          if (specs.dataType.specs.min && specs.dataType.specs.max) {
            return '取值范围：' + specs.dataType.specs.min + '~' + specs.dataType.specs.max;
          } else {
            return '取值范围：- ';
          }
        case 'text':
          return '数据长度：' + specs.dataType.specs.length;
        default:
          return '-';
      }
    }
  } else {
    return '';
  }
};

const getItemsSpecs = (item: TslFunctionEntity) => {
  return getPropertyArgumentSpecs(item) as Specification<BoolSpecs> | Specification<EnumSpecs>;
};

const getDimensionColor = (dimension: string) => {
  switch (dimension) {
    case 'services':
      return 'green';
    case 'events':
      return 'yellow';
    default:
      return 'blue';
  }
};

const openDialogForCreate = () => {
  entity.value = createEmptyFunction(props.productId, props.productKey);
  openDialog.value = true;
  status.value = 'create';
};

const openDialogForEdit = (item: TslFunctionEntity) => {
  entity.value = item;
  openDialog.value = true;
  status.value = 'edit';
};

watch(
  () => props.productId,
  (newValue) => {
    findFunctionsByPage(newValue);
  },
);

const fetchItems = () => {
  findFunctionsByPage(props.productId);
};
</script>
