<script setup lang="ts">
import { type Product } from "@/types/models/product";
interface Props {
  product: Product;
}
const props = defineProps<Props>();
</script>

<template>
  <div class="product">
    <p>{{ product.title }} - ${{ product.price }}</p>
    <br />
    <img :src="product.image" alt="" />
    <br />
    <p>{{ product.description }}</p>
  </div>
</template>

<style scoped>
.product {
  padding: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
  color: rgba(0, 0, 0, 0.6);
  border-radius: 4px;
}

.product img {
  height: 80px;
}
</style>
