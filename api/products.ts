import type { AddNewProductPayload } from "@/types/apiPayload/products";
import { type $Fetch } from "ofetch";
import { FetchMethod } from "~/types/enums/fetchVerbs";
import type { Product } from "~/types/models/product";

export const products = (fetcher: $Fetch) => {
  return {
    getProducts() {
      return fetcher<Product[]>("/products", {
        method: FetchMethod.GET,
      });
    },
    addNewProduct(payload: AddNewProductPayload) {
      return fetcher<Product>("/products", {
        method: FetchMethod.POST,
        body: JSON.stringify(payload),
      });
    },
  };
};
