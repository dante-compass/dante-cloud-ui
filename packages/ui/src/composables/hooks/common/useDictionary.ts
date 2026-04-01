import type { Dictionary } from '@herodotus/core';

import { isEmpty } from 'lodash-es';
import { useDictionaryStore } from '@/composables/stores';

export default function useDictionary(category: string, ...others: string[]) {
  const dictionaryStore = useDictionaryStore();

  const options = ref<Dictionary[]>([]);

  onBeforeMount(async () => {
    options.value = getDictionary();
    if (!isEmpty(others)) {
      // others 不为空，那么一定是设置了多个字典，可能会出现其中某个字典，前端没有缓存数据的情况
      // 所以只要 others 不为空，fetchCategory 就会分析哪个字典不存在，如果有缺失的字典，就会去后台查询补充进来
      await dictionaryStore.fetchCategory(category, ...others);
    } else {
      if (isEmpty(options.value)) {
        await dictionaryStore.fetchByCategory(category);
      }
    }
    nextTick(() => {
      if (isEmpty(options.value)) {
        options.value = getDictionary();
      }
    });
  });

  const getDictionary = (item: string = category): Dictionary[] => {
    const result = dictionaryStore.getDictionary(item);
    // 防止使用时 VSCODE 提示类型 Dictionary[] | undifined 问题
    return result ? result : [];
  };

  const getDictionaryItem = (key: string, value: string) => {
    return dictionaryStore.getDictionaryItem(key, value);
  };

  const getDictionaryItemDisplay = (key: string, value: string) => {
    return dictionaryStore.getDictionaryItemDisplay(key, value);
  };

  const isShow = computed(() => {
    return !isEmpty(options.value);
  });

  return {
    options,
    isShow,
    getDictionary,
    getDictionaryItem,
    getDictionaryItemDisplay,
  };
}
