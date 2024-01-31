import { category, products } from "~/api";
import ofetchInstance from "~/ofetch";

export default defineNuxtPlugin(() => {
  const api = {
    category: category(ofetchInstance),
    products: products(ofetchInstance),
  };

  return {
    provide: {
      api: api,
    },
  };
});
