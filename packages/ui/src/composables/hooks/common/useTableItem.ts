import type { Domain, HttpResult } from "@herodotus/core";

import { AbstractService, OperationEnum } from "@herodotus/core";
import { toast } from "@herodotus/core";
import useBaseTableItem from "./useBaseTableItem";

export default function useTableItem<I extends Domain, O extends Domain = I>(
  service: AbstractService<I, O>,
  componentName: string,
) {
  const { editedItem, operation, overlay, title, additional, onReturn } = useBaseTableItem<I>(componentName);

  const isEdit = computed(() => {
    return operation.value === OperationEnum.EDIT;
  });

  const saveOrUpdate = () => {
    overlay.value = true;
    service
      .saveOrUpdate(editedItem.value)
      .then((response) => {
        const result = response as HttpResult<O>;
        overlay.value = false;
        if (result.message) {
          toast.success(result.message);
        } else {
          toast.success("保存成功");
        }
        onReturn();
      })
      .catch(() => {
        overlay.value = false;
        // 此处不弹出消息框，错误信息由 Axios 拦截器统一处理
      });
  };

  const assign = (data: any) => {
    overlay.value = true;
    service
      .assign(data)
      .then((response) => {
        const result = response as HttpResult<O>;
        overlay.value = false;
        onReturn();
        if (result.message) {
          toast.success(result.message);
        } else {
          toast.success("保存成功");
        }
      })
      .catch(() => {
        overlay.value = false;
        // 此处不弹出消息框，错误信息由 Axios 拦截器统一处理
      });
  };

  return {
    editedItem,
    operation,
    overlay,
    title,
    additional,
    onReturn,
    saveOrUpdate,
    assign,
    isEdit,
  };
}
