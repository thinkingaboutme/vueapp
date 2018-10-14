<template>
  <div class="header">
    <router-link tag="div" class="header-abs" to="/" v-show="showAbs">
      <span class="iconfont header-abs-icon">&#xe624;</span>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      城市选择
      <router-link tag="span" class="iconfont header-back-fixed" to="/">&#xe624;</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    windowScroll () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        const opacity = top / 140
        this.opacityStyle = { opacity: opacity > 1 ? 1 : opacity }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.windowScroll)
  }
}
</script>

<style lang="stylus" scoped>
  .header-abs
    width: .8rem
    height: .8rem
    line-height: .8rem
    background: rgba(0, 0 ,0 ,.7)
    position:absolute
    top: .2rem
    left: .2rem
    border-radius: .4rem
    color: #ffffff
    text-align:center
    .header-abs-icon
      font-size: .32rem
  .header-fixed
    height: .88rem
    line-height: .88rem
    font-size: .32rem
    color: #ffffff
    text-align: center
    background: #00bcd4
    position: fixed
    top:0
    left:0
    right:0
    .header-back-fixed
      width: .64rem
      position: absolute
      left:0
      top:0
      font-weight:bold
</style>
