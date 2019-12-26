<template lang="html">
  <div>
    <ProductList />
    <ShoppingCart />
  </div>
</template>

<script>
import ProductList from '@/components/ProductList';
import ShoppingCart from '@/components/ShoppingCart';
export default {
  components: {
    ProductList,
    ShoppingCart
  }
}
</script>

<style lang="css" scoped>
</style>
