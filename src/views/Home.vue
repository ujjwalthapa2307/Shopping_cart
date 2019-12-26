<template>
  <div>
  <b-carousel
    id="carousel-fade"
    style="text-shadow: 0px 0px 2px #000"
    fade
    indicators
    img-width="1024"
    img-height="480"
  >
    <b-carousel-slide
      caption="First slide"
      :img-src="require('@/assets/images/home_carousel_slide/clothing.jpg')"
    ></b-carousel-slide>
    <b-carousel-slide
      caption="Second Slide"
      :img-src="require('@/assets/images/home_carousel_slide/e-commerce.jpg')"
    ></b-carousel-slide>
    <b-carousel-slide
      caption="Third Slide"
      :img-src="require('@/assets/images/home_carousel_slide/nihon_language_book.jpg')"
    ></b-carousel-slide>
  </b-carousel>
</div>
</template>

<script>
  export default {
  }
</script>
<style scoped>

</style>
