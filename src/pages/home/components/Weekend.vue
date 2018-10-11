<template>
  <div class="remmend">
    <div class="remmend-title">周末去哪儿</div>
    <div class="list">
      <div class="list-item border-bottom" v-for="item of list" :key="item.id">
        <img class="item-img" :src="item.imgUrl"/>
        <div class="item-right">
          <div class="item-title">{{item.title}}</div>
          <div class="item-desc">{{item.desc}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  .remmend-title
    background: #eee
    line-height: .8rem
    padding-left: .2rem
  .list
    overflow:hidden
    .list-item
      .item-img
        width: 100%
        height: 3.06rem
      .item-right
        padding-left: .2rem
        padding-bottom: .1rem
        .item-title
          line-height: .6rem
          font-size: .32rem
        .item-desc
          line-height: .4rem
          font-size: .26rem
          color: #ccc
        .item-btn
          background:#ff9300
          color: #ffffff
          font-size: .32rem
          -webkit-border-radius: .06rem
          -moz-border-radius: .06rem
          border-radius: .06rem
          padding:0 .2rem
          margin-top: .2rem
</style>
