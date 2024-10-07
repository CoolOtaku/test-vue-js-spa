<template>
  <div class="product-details">
    <br>
    <img class="img-details" :src="`/${product.image}`" alt="Product Image" />
    <br>
    <router-link to="/">↩︎ Повернутися</router-link>
    <br>
    <h1>{{ product.name }}</h1>
    <br>
    <p class="green">Ціна: {{ product.price }} $</p>
    <br>
    <p>{{ product.description }}</p>
  </div>
</template>

<script>
import products from '../../public/products.json';

export default {
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      product: {}
    };
  },
  created() {
    const productId = this.id;
    this.product = products.find(prod => prod.id == productId) || {};
  }
};
</script>

<style>
.product-details {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
}

.img-details {
  height: 400px;
  border-radius: 15px;
}
</style>
