<template>
  <div>
    <b-carousel
      id="carousel-fade"
      style="text-shadow: 0px 0px 2px #000"
      fade
      indicators
      img-width="1000"
      img-height="400"
    >
      <b-carousel-slide
        caption="Premium Clothing Store"
        :img-src="require('@/assets/images/home_carousel_slide/clothing.jpg')"
      ></b-carousel-slide>
      <b-carousel-slide
        caption="Our Model of Business"
        :img-src="require('@/assets/images/home_carousel_slide/e-commerce.jpg')"
      ></b-carousel-slide>
      <b-carousel-slide
        caption="Minna Nihongo Language Book"
        :img-src="require('@/assets/images/home_carousel_slide/nihon_language_book.jpg')"
      ></b-carousel-slide>
    </b-carousel>

    <div class="Address">
      <b-container class="bv-example-row">
        <b-row>
          <b-col sm="6">
            <h1>Location</h1>
            <p>Tokyo International Building<br>5 Chome-6-412 Shirokanedai <br>Minato City, Tokyo </p>
          </b-col>
          <b-col sm="6">
            <p>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51872.6964998984!2d139.6713131848127!3d35.65129910949034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f3174f8b499f%3A0xf5b4fcb68809619d!2sMac!5e0!3m2!1sen!2sjp!4v1577344636719!5m2!1sen!2sjp" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
            </p>
          </b-col>
        </b-row>
        <b-row>
          <b-col sm="6">
            <p>Opening Hours<br> Mon-Sat, 8 am - 11 pm <br>Closed Sunday</p>
          </b-col>
        </b-row>
        <b-row>
          <b-col sm="6">
            <p>Contact<br>000-3333-9999 <br>vuepratice@gmail.com</p>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>

</template>

<script>
  export default {
  }
</script>
<style scoped>
.Address {
  margin-top: 100px;
}
</style>
