<template>
  <div class="gallery" @click="handleClickClose">
    <div class="swiper">
      <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide >
          <img class="swiper-img" src="http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_800x800_70debc93.jpg" />
        </swiper-slide>
        <swiper-slide >
          <img class="swiper-img" src="http://img1.qunarzz.com/sight/p0/1709/76/7691528bc7d7ad3ca3.img.png_800x800_9ef05ee7.png" />
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailGallery',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observer: true,
        observeParents: true
      }
    }
  },
  methods: {
    handleClickClose () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .gallery >>> .swiper-container
      overflow:inherit
  .gallery
    position:absolute
    top:0
    left:0
    right:0
    bottom:0
    background: #000
    display:flex
    flex-direction:column
    justify-content:center
    .swiper
      width:100%
      height:0
      padding-bottom:100%
      .swiper-img
       width:100%
      .swiper-pagination
        color: #ffffff
        bottom: -1rem
</style>
