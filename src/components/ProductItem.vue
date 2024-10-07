<template>
  <div class="product-card" @click="goToProduct">
    <img :src="product.image" alt="Product Image" />
    <h2>{{ product.name }}</h2>
    <p class="green">{{ product.price }} ₴</p>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    goToProduct() {
      this.$router.push(`/product/${this.product.id}`);
    }
  }
};
</script>

<style>
.product-card {
  width: 200px;
  border: 1px solid hsla(160, 100%, 37%, 1);
  border-radius: 25px;
  margin: 10px;
  padding: 10px;
  text-align: center;
  cursor: pointer;
  transition: box-shadow 0.3s;
}

.product-card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: hsla(160, 100%, 37%, 0.2);
}

.product-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 15px;
}
</style>