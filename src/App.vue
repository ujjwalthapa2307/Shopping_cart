<template>
  <div id="app">
    <Header/>
    <ProductList/>
    <hr>
    <ShoppingCart/>
    <Footer/>
  </div>
</template>

<script>
import Footer from './components/Footer'
import Header from './components/Header'
import ProductList from './components/ProductList'
import ShoppingCart from './components/ShoppingCart'
export default {
  name: 'app',
  components: {
    ProductList,
    ShoppingCart,
    Header,
    Footer
  }
}
</script>

<style>
</style>
