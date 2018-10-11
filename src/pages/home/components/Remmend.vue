<template>
  <div class="remmend">
    <div class="remmend-title">热门推荐</div>
    <div class="list">
      <div class="list-item border-bottom">
        <img class="item-img" src="http://img1.qunarzz.com/sight/p0/1710/f5/f575b0f463058f96a3.img.jpg_200x200_e772e5ef.jpg"/>
        <div class="item-right">
          <div class="item-title">宁乡炭河古城</div>
          <div class="item-desc">宁乡炭河古城</div>
          <button class="item-btn">查看详情</button>
        </div>
      </div>
      <div class="list-item border-bottom">
        <img class="item-img" src="http://img1.qunarzz.com/sight/p0/1710/f5/f575b0f463058f96a3.img.jpg_200x200_e772e5ef.jpg"/>
        <div class="item-right">
          <div class="item-title">宁乡炭河古城</div>
          <div class="item-desc">宁乡炭河古城</div>
          <button class="item-btn">查看详情</button>
        </div>
      </div>
      <div class="list-item border-bottom">
        <img class="item-img" src="http://img1.qunarzz.com/sight/p0/1710/f5/f575b0f463058f96a3.img.jpg_200x200_e772e5ef.jpg"/>
        <div class="item-right">
          <div class="item-title">宁乡炭河古城</div>
          <div class="item-desc">宁乡炭河古城</div>
          <button class="item-btn">查看详情</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeRemmend'
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
      padding:.2rem
      display:flex
      .item-img
        width: 1.68rem
        height: 1.68rem
      .item-right
        flex:1
        padding-left: .2rem
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
