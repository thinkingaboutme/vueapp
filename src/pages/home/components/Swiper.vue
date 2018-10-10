<template>
  <div class="swiper">
    <swiper :options="swiperOption">
    <!-- slides -->
    <swiper-slide v-for="item of swiperList" :key="item.id">
      <img class="swiper-img" :src="item.imgUrl" />
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1809/31/da037478f37cf202.jpg_750x200_a02cf862.jpg'
      },
      {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1809/ff/1bf7d3a4f6591002.jpg_750x200_40809f2a.jpg'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .swiper >>> .swiper-pagination-bullet-active
    background:#fff
  .swiper
    overflow:hidden
    width:100%
    height:0
    padding-bottom:26.67%
    background:#eee
    .swiper-img
      width:100%
</style>
