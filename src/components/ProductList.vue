<template>
    <div>
      <h1>Product List</h1>
      <img
        v-if="loading"
        src="https://i.imgur.com/JfPpwOA.gif"
      >
      <ul v-else>
        <li v-for="(product, index) in products">
          <img :src="productImages[index].image" alt="productimage" height="100" width="100">
          {{product.title}} - {{product.price | currency}} - {{product.inventory}}
          <button
            :disabled="!productIsInStock(product)"
            @click="addProductToCart(product)"
          >Add to cart</button>
          <br> <br>
        </li>
      </ul>
    </div>
</template>

<script>
  import {mapState, mapGetters, mapActions} from 'vuex'
  export default {
    data () {
      return {
        loading: false,
        productIndex: 1,
        productImages: [
          {
            "image": require('@/assets/images/product-images/ipad_mini4.jpg')
          },
          {
            "image": require('@/assets/images/product-images/H&M T-Shirt White.jpg')
          },
          {
            "image": require('@/assets/images/product-images/Charli Songs CD.jpg')
          },
          {
            "image": require('@/assets/images/product-images/iphonepro11.jpg')
          },
          {
            "image": require('@/assets/images/product-images/kanji2500.jpg')
          },
          {
            "image": require('@/assets/images/product-images/jeans.jpg')
          },
          {
              "image": require('@/assets/images/product-images/timberlandshoe.jpg')
          },
          {
            "image": require('@/assets/images/product-images/rubyonrails.jpg')
          },
          {
            "image": require('@/assets/images/product-images/macbookpro.jpg')
          }
        ],
      }
    },

    computed: {
      ...mapState({
        products: state => state.products.items
      }),

      ...mapGetters('products', {
        productIsInStock: 'productIsInStock'
      })
    },

    methods: {
      ...mapActions({
        fetchProducts: 'products/fetchProducts',
        addProductToCart: 'cart/addProductToCart'
      })
    },

    created () {
      this.loading = true
      this.fetchProducts()
        .then(() => this.loading = false)
    }
  }
  // console.log(productImages[0].image);
</script>

<style scoped>

</style>
