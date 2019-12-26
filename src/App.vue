<template>
  <div id="app">
    <Header/>
    <div id="nav">
    <router-link to="/"></router-link>
    <router-link to="/products"></router-link>
    </div>
    <router-view />
    <Footer/>
  </div>
</template>

<script>
import Footer from './components/Footer'
import Header from './components/Header'

export default {
  name: 'app',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
</style>
