<template>
  <div class="remmend">
    <div class="remmend-title">周末去哪儿</div>
    <div class="list">
      <div class="list-item border-bottom">
        <img class="item-img" src="http://img1.qunarzz.com/sight/source/1505/fb/302620ed8350f8.jpg_r_640x214_25a07cb4.jpg"/>
        <div class="item-right">
          <div class="item-title">宁乡炭河古城</div>
          <div class="item-desc">宁乡炭河古城</div>
        </div>
      </div>
      <div class="list-item border-bottom">
        <img class="item-img" src="http://img1.qunarzz.com/sight/source/1505/fb/302620ed8350f8.jpg_r_640x214_25a07cb4.jpg"/>
        <div class="item-right">
          <div class="item-title">宁乡炭河古城</div>
          <div class="item-desc">宁乡炭河古城</div>
        </div>
      </div>
      <div class="list-item border-bottom">
        <img class="item-img" src="http://img1.qunarzz.com/sight/source/1505/fb/302620ed8350f8.jpg_r_640x214_25a07cb4.jpg"/>
        <div class="item-right">
          <div class="item-title">宁乡炭河古城</div>
          <div class="item-desc">宁乡炭河古城</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend'
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
