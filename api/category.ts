import { type $Fetch } from "ofetch";
import { FetchMethod } from "~/types/enums/fetchVerbs";

export const category = (fetcher: $Fetch) => {
  return {
    getAllCategories() {
      return fetcher("/products/categories", { method: FetchMethod.GET });
    },
  };
};
