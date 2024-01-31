<script setup lang="ts">
import { onMounted } from "vue";
import type { Category } from "~/types/models/category";
import type { Product } from "~/types/models/product";

const { $api } = useNuxtApp();

const products = ref<Product[]>([]);
const categories = ref<Category[]>([]);

onMounted(() => {
  (async () => {
    const [productsRes, categoriesRes] = await Promise.all([
      $api.products.getProducts(),
      $api.category.getAllCategories(),
    ]);

    products.value = productsRes;
    categories.value = categoriesRes;
  })();
});

const newProduct = ref({
  title: "My Title",
  category: "Any One",
  description: "my description",
  image: "imageurl",
  price: 344,
});
</script>

<template>
  <div>
    <button @click="$api.products.addNewProduct(newProduct)">
      Add New product - Does Nothing but makes a Request
    </button>
    <br />
    <br />
    <br />

    <template v-if="categories.length">
      <div>
        <h1>Categories</h1>
        <div class="category-list">
          <p v-for="category in categories" :key="category">
            {{ category }}
          </p>
        </div>
      </div>
    </template>

    <hr />

    <template v-if="products.length">
      <div>
        <h1>Products</h1>
        <div class="products-list">
          <ProductSingleProduct
            v-for="product in products"
            :key="product.id"
            :product="product"
          />
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped>
.products-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}
</style>
