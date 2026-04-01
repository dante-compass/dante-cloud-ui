import type { Domain, Conditions, Tree } from '@herodotus/core';

import { AbstractService } from '@herodotus/core';

export default function useTreeItems<C extends Conditions, I extends Domain>(
  AbstractService: AbstractService<I>,
  immediate = true,
) {
  const treeItems = ref<Tree[]>([]) as Ref<Tree[]>;
  const loading = ref<boolean>(false);
  const conditions = ref({}) as Ref<C>;

  const fetchTree = (params: Conditions = {}) => {
    AbstractService.fetchTree(params).then((result) => {
      const data = result.data as Array<Tree>;
      if (data) {
        treeItems.value = data;
      } else {
        treeItems.value = [];
      }
    });
  };

  watch(
    () => conditions.value,
    (newValue) => {
      fetchTree(newValue);
    },
    {
      deep: true,
      immediate: immediate,
    },
  );

  return {
    loading,
    conditions,
    treeItems,
    fetchTree,
  };
}
