<template>
  <div>
    <h-row>
      <h-column cols="3"><h-label :text="label"></h-label></h-column>
      <h-column cols="9" class="align-self-start">
        <h-tsl-button text="+ 添加参数" @click="onCreate"></h-tsl-button>
      </h-column>
    </h-row>

    <q-list dense bordered separator class="rounded-borders">
      <q-item v-for="(item, i) in model" :key="i">
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

    <h-primary-adding-dialog
      v-model="openDialog"
      :argument="originalArgument.specs"
      :status="status"
      @save="onAddParameter"
    ></h-primary-adding-dialog>
  </div>
</template>

<script setup lang="ts">
import type { TslStatus, TslArgumentEntity, Specification, Specs } from '@herodotus/api';

import { isEmpty, remove, findIndex } from 'lodash-es';

import { useTslStatus, useTslEntity } from '../../../composables/hooks';

import HPrimaryAddingDialog from './HPrimaryAddingDialog.vue';
import HTslButton from './HTslButton.vue';

defineOptions({ name: 'HParameters', components: { HTslButton, HPrimaryAddingDialog } });

interface Props {
  label?: string;
  status?: TslStatus;
}

const props = withDefaults(defineProps<Props>(), {
  label: '输出参数：',
  status: 'create',
});

const model = defineModel<Array<TslArgumentEntity>>({
  default: () => [],
});

const { isEdit } = useTslStatus(() => props.status);
const { createEmptyNormalArgument } = useTslEntity();

const openDialog = shallowRef(false);
const originalArgument = ref(createEmptyNormalArgument()) as Ref<TslArgumentEntity>;

const isShowList = computed(() => {
  return !isEmpty(model.value) && model.value.length >= 1;
});

const showBorder = computed(() => {
  return !isEmpty(model.value);
});

const deleteItem = (item: TslArgumentEntity) => {
  remove(model.value, (i) => {
    return i.identifier === item.identifier;
  });
};

const onCreate = () => {
  originalArgument.value = createEmptyNormalArgument();
  openDialog.value = true;
};

const onEdit = (item: TslArgumentEntity) => {
  originalArgument.value = item;
  openDialog.value = true;
};

const onDelete = (item: TslArgumentEntity) => {
  deleteItem(item);
};

const onAddParameter = (item: Specification<Specs>) => {
  const argument = {
    identifier: item.identifier,
    name: item.name,
    type: item.dataType.type,
    specs: item,
  } as TslArgumentEntity;

  if (isEmpty(model.value)) {
    model.value = [];
  }

  if (isEdit.value) {
    if (originalArgument.value.id) {
      // 设置 id，以保证后端进行数据更新
      argument['id'] = originalArgument.value.id;

      // 如果 identifier 未修改，则找到原对象，进行覆盖对象
      const index = findIndex(model.value, (i) => {
        return i.id === originalArgument.value.id;
      });

      if (index !== -1) {
        // 如果存在，直接替换
        model.value[index] = argument;
      }

      // 如果不存在，那么应该出现了数据异常，目前不做任何处理
    }
  } else {
    // 直接使用 model.value.push 无法触发响应式
    model.value = [...model.value, argument];
  }
};
</script>
