import type { TslFunctionEntity, TslFunctionConditions } from "@herodotus/api";

import { useTable, useDictionary } from "@/composables/hooks";
import { API, PAGE_NAME } from "@/configurations";
import useTslEntity from "./useTslEntity";

export default function useTslFunctionTable() {
  const { pagination, tableRows, loading, totalPages, deleteItemById, findItemsByPage } = useTable<
    TslFunctionConditions,
    TslFunctionEntity
  >(API.core.iotTslFunction(), PAGE_NAME.IOT_TSL_FUNCTION);
  const { getPropertyArgumentType } = useTslEntity();
  const { getDictionaryItemDisplay } = useDictionary("ArgumentType");

  const fetchFunctionsByPage = (productId: string, dimension?: "properties" | "events" | "services") => {
    if (productId) {
      if (!dimension) {
        findItemsByPage(pagination.value.page, pagination.value.rowsPerPage, { productId: productId });
      } else {
        findItemsByPage(pagination.value.page, pagination.value.rowsPerPage, {
          productId: productId,
          dimension: dimension,
        });
      }
    }
  };

  const findFunctionsByPage = (productId: string) => {
    fetchFunctionsByPage(productId);
  };

  const findPropertiesByPage = (productId: string) => {
    fetchFunctionsByPage(productId, "properties");
  };

  const findEventsByPage = (productId: string) => {
    fetchFunctionsByPage(productId, "events");
  };

  const findServicesByPage = (productId: string) => {
    fetchFunctionsByPage(productId, "services");
  };

  const getPropertyType = (item: TslFunctionEntity) => {
    if (item.dimension === "properties") {
      const type = getPropertyArgumentType(item);
      if (type) {
        return getDictionaryItemDisplay("ArgumentType", type);
      }
    }
    return "";
  };

  return {
    pagination,
    tableRows,
    loading,
    totalPages,
    deleteItemById,
    getPropertyType,
    findFunctionsByPage,
    findPropertiesByPage,
    findEventsByPage,
    findServicesByPage,
  };
}
