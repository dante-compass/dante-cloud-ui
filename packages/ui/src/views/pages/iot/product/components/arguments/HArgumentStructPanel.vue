<template>
  <div>
    <h-row>
      <h-column cols="3"><h-label text="JSON 对象："></h-label></h-column>
      <h-column cols="9" class="align-self-start">
        <h-tsl-button text="+ 添加参数" @click="onCreate"></h-tsl-button>
      </h-column>
    </h-row>

    <q-list dense bordered separator class="rounded-borders">
      <q-item v-for="(item, i) in model.dataType.specs" :key="i">
        <q-item-section top>
          <q-item-label class="q-mt-sm">
            参数名称:
            <span class="text-weight-medium">{{ item.name }}</span>
          </q-item-label>
        </q-item-section>

        <q-item-section side>
          <h-tsl-button v-if="isEdit" text="编辑" @click="onEdit(item)"></h-tsl-button>
          <h-tsl-button text="删除" @click="onDelete(item)"></h-tsl-button>
        </q-item-section>
      </q-item>
    </q-list>

    <h-secondary-adding-dialog
      v-model="openDialog"
      :argument="originalArgument"
      :status="status"
      @save="onAddParameter"
    ></h-secondary-adding-dialog>
  </div>
</template>

<script setup lang="ts">
import type { TslStatus, Specification, StructSpecs, Specs } from '@herodotus/api';

import { isEmpty, remove, findIndex } from 'lodash-es';

import { useTslStatus, useTslEntity } from '../../../composables/hooks';

import HSecondaryAddingDialog from './HSecondaryAddingDialog.vue';
import HTslButton from './HTslButton.vue';

defineOptions({ name: 'HArgumentStructPanel', components: { HSecondaryAddingDialog, HTslButton } });

interface Props {
  status?: TslStatus;
}

const props = withDefaults(defineProps<Props>(), {
  status: 'create',
});

const model = defineModel<Specification<StructSpecs>>({
  default: () => ({ identifier: '', name: '', dataType: { type: 'struct', specs: [] } }),
});

const { isView, isEdit } = useTslStatus(() => props.status);
const { createEmptyNormalSpecification } = useTslEntity();

const openDialog = ref(false);
const originalArgument = ref(createEmptyNormalSpecification()) as Ref<Specification<Specs>>;

const showBorder = computed(() => {
  return !isEmpty(model.value);
});

const deleteItem = (item: Specification<Specs>) => {
  remove(model.value.dataType.specs, (i) => {
    return i.identifier === item.identifier;
  });
};

const onCreate = () => {
  originalArgument.value = createEmptyNormalSpecification();
  openDialog.value = true;
};

const onEdit = (item: Specification<Specs>) => {
  originalArgument.value = item;
  openDialog.value = true;
};

const onDelete = (item: Specification<Specs>) => {
  deleteItem(item);
};

const onAddParameter = (item: Specification<Specs>) => {
  if (isEmpty(model.value.dataType.specs)) {
    model.value.dataType.specs = [];
  }

  if (isEdit.value) {
    // 判断 identifier 是否已经修改
    if (originalArgument.value.identifier !== item.identifier) {
      // 如果 identifier 被修改，则删除原对象，再添加新对象
      deleteItem(originalArgument.value);
      model.value.dataType.specs = [...model.value.dataType.specs, item];
    } else {
      // 如果 identifier 未修改，则找到原对象，进行覆盖对象
      const index = findIndex(model.value.dataType.specs, (i) => {
        return i.identifier === item.identifier;
      });

      if (index !== -1) {
        // 如果存在，直接替换
        model.value.dataType.specs[index] = item;
      }

      // 如果不存在，那么应该出现了数据异常，目前不做任何处理
    }
  } else {
    model.value.dataType.specs = [...model.value.dataType.specs, item];
  }
};
</script>
