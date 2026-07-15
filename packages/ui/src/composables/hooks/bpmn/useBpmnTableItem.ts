import type { Entity } from "@herodotus/core";

import { useBaseTableItem } from "@/composables/hooks";

export default function useBpmnTableItem<E extends Entity>(componentName: string) {
  const { editedItem, operation, overlay, title } = useBaseTableItem<E>(componentName);

  return {
    editedItem,
    operation,
    title,
    overlay,
  };
}
