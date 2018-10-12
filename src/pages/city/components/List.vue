<template>
  <div class="list" ref="wapper">
    <div>
      <div class="list-area">
        <div class="list-title border-topbottom">当前城市</div>
        <div class="list-wapper">
          <div class="list-item">{{this.city}}</div>
        </div>
      </div>
      <div class="list-area">
        <div class="list-title border-topbottom">热门城市</div>
        <div class="list-wapper">
          <div
            class="list-item"
            v-for="item of hot"
            :key="item.id"
          >
            {{item.name}}
          </div>
        </div>
      </div>
      <div
        class="list-area"
        v-for="(city, key) of cities"
        :key="key"
        :ref="key"
      >
        <div class="list-title border-topbottom">{{key}}</div>
        <div class="list-wapper">
          <div
            class="list-city border-bottom"
            v-for="item of city"
            :key="item.id"
          >
            {{item.name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    city: String,
    hot: Array,
    cities: Object,
    better: String
  },
  watch: {
    better () {
      if (this.better) {
        this.scroll.scrollToElement(this.$refs[this.better][0])
      }
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wapper)
  }
}
</script>

<style lang="stylus" scoped>
  .list
    overflow:hidden
    position: absolute
    top: 1.72rem
    left:0
    right:0
    bottom:0
    .list-area
      .list-title
        background: #eeeeee
        padding-left: .2rem
        line-height: .6rem
        font-size: .26rem
      .list-wapper
        display:flex
        background:#fff
        flex-wrap:wrap
        .list-item
          width:25%
          border:1px solid #ccc
          text-align: center
          line-height: .44rem
          border-radius:.06rem
          margin:.2rem .2rem
        .list-city
          width:100%
          padding-left: .2rem
          line-height: .80rem
</style>
