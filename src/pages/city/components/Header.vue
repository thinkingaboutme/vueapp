<template>
  <div class="header">
    城市选择
    <router-link tag="span" class="iconfont header-back" to="/">&#xe624;</router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
  .header
    height: .88rem
    line-height: .88rem
    font-size: .32rem
    color: #ffffff
    text-align: center
    background: #00bcd4
    position:relative
    .header-back
      width: .64rem
      position: absolute
      left:0
      top:0
      font-weight:bold
</style>
