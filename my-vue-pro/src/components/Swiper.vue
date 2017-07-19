<template>
  <div class="swiperPage">
    <PageHeader></PageHeader>
    <h1>
      {{ msg }}
    </h1>
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->

      <swiper-slide v-for="item in items">
        <img :src="item" class="index_img">
      </swiper-slide>

      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>

    </swiper>

  </div>
</template>
<script>
  import PageHeader from './PageHeader.vue'
  import {swiper, swiperSlide} from 'vue-awesome-swiper'
//    import $ from 'jquery'
  export default {
    name: 'swiperPage',
    components: {PageHeader, swiper, swiperSlide},
    data () {
      return {
        items: [
          '/static/img/banner1.7a12782.jpg',
          '/static/img/banner2.93e85dc.jpg'
        ],
        msg: 'Welcome to Swiper',
        swiperOption: {
          notNextTick: true,
          autoplay: 2000,
          loop: true,
          pagination: '.swiper-pagination',
          paginationClickable: true,
          mousewheelControl: true
        }
      }
    },
//    定义这个sweiper对象
    computed: {
      swiper () {
        return this.$refs.mySwiper.swiper
      }
    }
  }
</script>
<style scoped>
  .swiperPage{

  }
  h1 {
    font-weight: normal;
  }
  .swiper-slide{
    width: 980px;
    height: 446px;
  }
  .index_img{
    width: 100%;
    height: 100%;
  }
</style>
