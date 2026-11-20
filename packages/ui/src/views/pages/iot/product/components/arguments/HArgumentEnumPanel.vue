<template>
  <div>
    <h-field-label text="布尔值" required></h-field-label>
    <h-container class="pa-0 mt-4">
      <h-row v-for="(entry, index) in entries" :key="index">
        <h-column cols="5">
          <v-text-field
            v-model="entry.key"
            density="compact"
            placeholder="编号如'0'"
            :disabled="disabled"
            hide-details
            :rules="[(v: string) => !!v || '枚举条目不能为空']"
          ></v-text-field>
        </h-column>
        <h-column cols="1" align-self="center" class="text-center">~</h-column>
        <h-column cols="5">
          <h-text-field
            v-model="entry.value"
            density="compact"
            placeholder="对该枚举项的描述"
            :disabled="disabled"
            hide-details
            :rules="[(v: string) => !!v || '枚举条目描述不能为空']"
          ></h-text-field>
        </h-column>
        <h-column cols="1">
          <h-tsl-button v-if="isNotOnlyOneEntry()" text="删除" @click="removeEntry(index)"></h-tsl-button>
        </h-column>
      </h-row>
    </h-container>
    <h-tsl-button text="+ 添加条目" @click="addEntry" />
  </div>
</template>

<script setup lang="ts">
import type { TslStatus, Specification, EnumSpecs } from '@herodotus/api';

import { isEmpty } from 'lodash-es';

import { useTslStatus } from '../../../composables/hooks';

import { HDictionarySelect } from '@/components/library/HDictionary';
import HTslButton from './HTslButton.vue';

defineOptions({ name: 'HArgumentEnumPanel', components: { HDictionarySelect, HTslButton } });

interface Props {
  status?: TslStatus;
}

const props = withDefaults(defineProps<Props>(), {
  status: 'create',
});

const model = defineModel<Specification<EnumSpecs>>({
  default: () => ({}) as Specification<EnumSpecs>,
});

const { disabled } = useTslStatus(() => props.status);

// 内部维护的条目列表
interface Entry {
  key: string;
  value: string;
}
const entries = ref<Entry[]>([]);
// 防止循环同步的标志
let isSyncingFromModel = false;

// 将外部 Record 同步到内部 entries
const syncFromModel = (data: Record<string, string>) => {
  isSyncingFromModel = true;

  if (isEmpty(data)) {
    entries.value = [{ key: '', value: '' }];
  } else {
    // 将对象转为条目数组，过滤掉空 key
    const list: Entry[] = Object.entries(data)
      .filter(([k]) => !isEmpty(k))
      .map(([key, value]) => ({ key, value }));

    entries.value = list;
  }

  nextTick(() => {
    isSyncingFromModel = false;
  });
};

// 将内部 entries 同步到外部 model
const syncToModel = () => {
  if (isSyncingFromModel) return;

  // 过滤掉空 key 的条目，构建新对象（重复 key 时后者覆盖前者）
  const newObj: Record<string, string> = {};
  for (const entry of entries.value) {
    if (!isEmpty(entry.key)) {
      newObj[entry.key] = entry.value;
    }
  }

  // 仅当内容真正变化时才更新
  if (JSON.stringify(newObj) !== JSON.stringify(model.value.dataType.specs)) {
    model.value.dataType.specs = newObj;
  }
};

// 判断是否为唯一的空条目
const isNotOnlyOneEntry = () => {
  return entries.value.length !== 1;
};

// 添加新空条目
const addEntry = () => {
  entries.value.push({ key: '', value: '' });
};

// 删除指定条目
const removeEntry = (index: number) => {
  // 不允许删除唯一的空占位条目
  if (isNotOnlyOneEntry()) {
    entries.value.splice(index, 1);
  }
};

// 监听外部 model 的变化（深层），同步回内部 entries
watch(
  () => model.value.dataType.specs,
  (newValue) => {
    syncFromModel(newValue ?? {});
  },
  { deep: true, immediate: true },
);

// 监听内部 entries 变化，同步到外部 model
watch(
  entries,
  () => {
    syncToModel();
  },
  { deep: true },
);
</script>
