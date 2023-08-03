<template>
  <div class="wrapper">
    <input v-focus @keydown.enter="button(this.productValue)" v-model="productValue" class="product-value" placeholder="Введите название продукта">
    <button @click="button(this.productValue)" class="addProduct">Добавить продукт</button>
    <transition-group name="product_list">
      <li
          class="product-element"
          v-for="product in products"
          :key="product.id"
      >
        <div :class="{checked : product.value}" class="element">{{ product.product }}</div>
        <div @click="checkProduct(product)" v-if="!product.value" class="checkProduct">Не куплено</div>
        <div @click="checkProduct(product)" v-else class="checkProduct">Куплено</div>
      </li>
    </transition-group>
  </div>
</template>

<script>

import {mapActions, mapGetters, mapMutations, mapState} from "vuex";

export default {
  data() {
    return {
      productValue: '',
    }
  },
  methods: {
    ...mapMutations ({
      setProducts: 'setProducts'
    }),
    ...mapActions ({
      checkProduct: 'checkProduct',
      addProduct: 'addProduct'
    }),
    button(product) {
      this.addProduct(product)
      this.productValue = ''
    }
  },
  computed: {
    ...mapState({
      products: state => state.products
    }),
    ...mapGetters({
      sortedProducts: 'sortedProducts'
    })
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.product-element {
  display: flex;
  justify-content: space-between;
  padding: 15px;
  border: 1px solid lightseagreen;
  align-items: center;
}
.wrapper {
  padding: 25px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.addProduct {
  padding: 20px;
  margin-bottom: 20px;
  cursor: pointer;
}
.checkProduct {
  padding: 5px;
  border: 1px solid darkgrey;
  cursor: pointer;
}
.checked {
  text-decoration-line: line-through;
}
.product-value {
  padding: 20px;
}
.product_list-item {
  display: inline-block;
  margin-right: 10px;
}
.product_list-enter-active,
.product_list-leave-active {
  transition: all .5s ease;
}
.product_list-enter-from,
.product_list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}
.product_list-move {
  transition: transform 0.8s ease;
}
</style>
