<template>
  <div>
    <h1 class="green">Список продуктів</h1>

    <div class="filter-section">
      <label for="price-filter">Фільтрувати за ціною:</label>
      <select id="price-filter" v-model="selectedFilter" @change="filterProducts">
        <option value="all">Усі</option>
        <option value="cheap">Дешеві</option>
        <option value="medium">Середні</option>
        <option value="expensive">Дорогі</option>
      </select>
    </div>

    <div class="product-list">
      <ProductItem
          v-for="product in filteredProducts"
          :key="product.id"
          :product="product"
      />
    </div>
  </div>
</template>

<script>
import products from '../../public/products.json';
import ProductItem from "./ProductItem.vue";

export default {
  components: {ProductItem},
  data() {
    return {
      products: products,
      filteredProducts: products,
      selectedFilter: 'all',
      minPrice: null,
      maxPrice: null,
      cheapLimit: null,
      mediumLimit: null,
    };
  },
  created() {
    this.calculatePriceRange();
  },
  methods: {
    calculatePriceRange() {
      this.minPrice = Math.min(...this.products.map(product => product.price));
      this.maxPrice = Math.max(...this.products.map(product => product.price));

      const priceRange = this.maxPrice - this.minPrice;
      this.cheapLimit = this.minPrice + priceRange / 3;
      this.mediumLimit = this.minPrice + (2 * priceRange) / 3;
    },
    filterProducts() {
      if (this.selectedFilter === 'cheap') {
        this.filteredProducts = this.products.filter(product => product.price <= this.cheapLimit);
      } else if (this.selectedFilter === 'medium') {
        this.filteredProducts = this.products.filter(product => product.price > this.cheapLimit
            && product.price <= this.mediumLimit);
      } else if (this.selectedFilter === 'expensive') {
        this.filteredProducts = this.products.filter(product => product.price > this.mediumLimit);
      } else {
        this.filteredProducts = this.products;
      }
    }
  }
};
</script>

<style>
.product-list {
  display: flex;
  flex-wrap: wrap;
}

#price-filter {
  border: 1px solid hsla(160, 100%, 37%, 1);
  background-color: hsla(160, 100%, 37%, 0.2);
  color: white;
}
</style>
