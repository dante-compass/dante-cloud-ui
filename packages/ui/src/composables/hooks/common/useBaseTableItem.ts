import type { Domain } from "@herodotus/core";

import { useRoute } from "vue-router";
import { OperationEnum } from "@herodotus/core";

import { useElementStore, useDetailPage } from "@herodotus/framework";

/**
 * 表格条目基础定义
 *
 * 详情编辑(三级路由)页接收表格通过 vue-router push 的参数内容
 *
 * @param <I> 输入值类型。传递给三级路由页面操作数据类型。通常为输入和输出为相同的实体类型，也可为非实体的 Dto 类型
 * @returns
 */
export default function useBaseTableItem<I extends Domain>(componentName = "") {
  const { parseComponentName, goBack } = useDetailPage();

  const route = useRoute();
  const store = useElementStore();

  const editedItem = ref({}) as Ref<I>;
  const operation = ref(OperationEnum.CREATE) as Ref<OperationEnum>;
  const additional = ref({}) as Ref<Record<string, unknown>>;
  const title = shallowRef("");
  const overlay = shallowRef(false);
  const parentComponentName = shallowRef("");
  const currentComponentName = shallowRef(componentName);

  onMounted(() => {
    parseParam();
  });

  const generateTitle = (content: string, operation: OperationEnum) => {
    if (operation) {
      switch (operation) {
        case OperationEnum.CREATE:
          return "新建" + content;
        case OperationEnum.EDIT:
          return "编辑" + content;
        case OperationEnum.AUTHORIZE:
          return "配置" + content;
        case OperationEnum.INFO:
          return "查看" + content;
        default:
          return content;
      }
    } else {
      return content;
    }
  };

  const parseParam = () => {
    currentComponentName.value = parseComponentName(componentName, route);
    if (currentComponentName.value) {
      const params = store.getRoutePushParam(currentComponentName.value);
      if (params) {
        if (params.item) {
          const item = JSON.parse(params.item as string);
          editedItem.value = item;
        }
        if (params.operation) {
          operation.value = params.operation as OperationEnum;
          title.value = generateTitle(route.meta.title as string, operation.value);
        }

        if (params.additional) {
          additional.value = JSON.parse(params.additional as string);
        }

        if (params.parentName) {
          parentComponentName.value = params.parentName;
        }
      }
    }
  };

  const onReturn = () => {
    goBack(parentComponentName.value, currentComponentName.value);
  };

  return {
    editedItem,
    operation,
    additional,
    title,
    overlay,
    onReturn,
  };
}
