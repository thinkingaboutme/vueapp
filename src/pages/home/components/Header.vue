<template>
  <div class="header">
    <div class="header-back">
      <span class="iconfont">&#xe624;</span>
    </div>
    <div class="header-search">
      <span class="iconfont">&#xe632;</span>
           输入城市/景点/游玩主题
    </div>
    <div class="header-city">
      {{city}}
      <span class="iconfont icon-jiantou">&#xe61c;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String
  }
}
</script>

<style lang="stylus" scoped>
  .header
    display:flex
    height:.88rem
    background:#00bcd4
    color:#fff
    .header-back
      width:.6rem
      text-align:center
      line-height:.88rem
      font-weight:bold
      font-size:.40rem
    .header-city
      width:1.32rem
      height:.88rem
      line-height:.88rem
      text-align:center
      .icon-jiantou
        font-size:.20rem
        margin-left:-.04rem
    .header-search
      flex:1
      height:.6rem
      background:#fff
      border-radius:.05rem
      margin-left:.2rem
      margin-top:.14rem
      color:#e4e7ea
      line-height:.6rem
      padding-left:.2rem
</style>
