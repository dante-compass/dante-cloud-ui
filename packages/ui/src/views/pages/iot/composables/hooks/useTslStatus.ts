import type { TslStatus } from "@herodotus/api";

export default function useTslStatus(status: () => TslStatus) {
  const currentStatus = computed(status);

  const isCreate = computed(() => {
    return currentStatus.value === "create";
  });

  const isEdit = computed(() => {
    return currentStatus.value === "edit";
  });

  const isView = computed(() => {
    return currentStatus.value === "view";
  });

  const disabled = computed(() => {
    return currentStatus.value === "view";
  });

  return {
    isCreate,
    isEdit,
    isView,
    disabled,
  };
}
