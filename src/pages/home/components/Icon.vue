<template>
  <div class="icon">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon-warpper" v-for="item of page" :key="item.id">
          <img :src="item.imgUrl" class="icon-img" />
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcon',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination'
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  .icon >>> .swiper-slide
    width:100%
    height:0
    padding-bottom:50%
    display:flex
    flex-wrap: wrap
    .icon-warpper
      width:25%
      height:0
      margin-top: .1rem
      padding-bottom:20%
      overflow:hidden
      position: relative
      text-align: center
      .icon-img
        width:60%
      .icon-desc
        line-height: .44rem
        font-size: .28rem
</style>
