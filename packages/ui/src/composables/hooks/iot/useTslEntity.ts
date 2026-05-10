import type { Specification, Specs, StructSpecs } from "@herodotus/api";

import { cloneDeep } from "lodash-es";

export default function useTslEntity() {
  const EmptyNormalAttribute = {
    identifier: "",
    name: "",
    dataType: { type: "int", specs: {} },
  } as Specification<Specs>;

  const EmptyStructAttribute = {
    identifier: "",
    name: "",
    dataType: { type: "struct", specs: [] },
  } as Specification<StructSpecs>;

  const createEmptyNormalArgument = () => {
    return cloneDeep(EmptyNormalAttribute);
  };

  const createEmptyStructArgument = () => {
    return cloneDeep(EmptyStructAttribute);
  };

  return {
    createEmptyNormalArgument,
    createEmptyStructArgument,
  };
}
