import type {
  TslFunctionEntity,
  TslFunctionArgumentEntity,
  TslArgumentEntity,
  Specification,
  Specs,
} from "@herodotus/api";

import { isEmpty, cloneDeep } from "lodash-es";

export default function useTslEntity() {
  const EMPTY_NORMAL_FUNCTION_ARGUMENTS = {
    property: {} as TslArgumentEntity,
    eventOutputData: [] as TslArgumentEntity[],
    serviceOutputData: [] as TslArgumentEntity[],
    serviceInputData: [] as TslArgumentEntity[],
  } as TslFunctionArgumentEntity;

  const createEmptyNormalSpecification = (type = "int"): Specification<Specs> => {
    const domain = {
      identifier: "",
      name: "",
      dataType: { type: type, specs: type === "struct" ? [] : {} },
    } as Specification<Specs>;

    return domain;
  };

  const createEmptyNormalArgument = (type = "int"): TslArgumentEntity => {
    // 默认对象，如果涉及 id，要么不要设置，要么设置为 null
    // 如果设置为 id: ""，空串和 null 有很大差别，后端接收到则会认为是已存在的实体导致保存出错。

    const domain = {
      identifier: "",
      name: "",
      type: type,
      specs: createEmptyNormalSpecification(type),
    } as TslArgumentEntity;

    return domain;
  };

  const createEmptyFunction = (productId: string, productKey: string) => {
    return {
      dimension: "properties",
      productId: productId,
      productKey: productKey,
      required: false,
      arguments: cloneDeep(EMPTY_NORMAL_FUNCTION_ARGUMENTS),
    } as TslFunctionEntity;
  };

  const hasArguments = (item: TslFunctionEntity): boolean => {
    return !isEmpty(item) && !isEmpty(item.arguments);
  };

  const hasProperty = (item: TslFunctionEntity) => {
    return hasArguments(item) && !isEmpty(item.arguments.property);
  };

  const isSpecificationNotEmpty = (specification: Specification<Specs>) => {
    return !isEmpty(specification) && !isEmpty(specification.dataType) && !isEmpty(specification.dataType.specs);
  };

  const getFunctionArguments = (item: TslFunctionEntity): TslFunctionArgumentEntity => {
    if (hasArguments(item)) {
      return item.arguments;
    }
    return cloneDeep(EMPTY_NORMAL_FUNCTION_ARGUMENTS);
  };

  const getProperty = (item: TslFunctionEntity): TslArgumentEntity => {
    const functionArguments = getFunctionArguments(item);
    return functionArguments.property;
  };

  const getPropertyArgumentType = (item: TslFunctionEntity): string | undefined => {
    const property = getProperty(item);
    if (!isEmpty(property) && property.type) {
      return property.type;
    }
    return undefined;
  };

  const getPropertyArgumentSpecs = (item: TslFunctionEntity): Specification<Specs> | undefined => {
    const property = getProperty(item);
    if (!isEmpty(property) && property.specs) {
      return property.specs;
    }
    return undefined;
  };

  const createDefaultValue = (type: string) => {
    switch (type) {
      case "int":
        return 0;
      case "float":
        return 0.0;
      case "double":
        return 0.0;
      case "enum":
        return 0;
      case "bool":
        return 0;
      case "struct":
        return {};
      default:
        return null;
    }
  };

  return {
    EMPTY_NORMAL_FUNCTION_ARGUMENTS,
    hasArguments,
    hasProperty,
    getPropertyArgumentType,
    getPropertyArgumentSpecs,
    isSpecificationNotEmpty,
    createEmptyNormalSpecification,
    createEmptyFunction,
    createEmptyNormalArgument,
    createDefaultValue,
  };
}
