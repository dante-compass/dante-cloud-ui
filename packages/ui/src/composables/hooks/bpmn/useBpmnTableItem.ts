import type { Entity } from '@herodotus/core';

import { useBaseTableItem } from '@/composables/hooks';

export default function useBpmnTableItem<E extends Entity>() {
  const { editedItem, operation, overlay, title } = useBaseTableItem<E>();

  return {
    editedItem,
    operation,
    title,
    overlay,
  };
}
