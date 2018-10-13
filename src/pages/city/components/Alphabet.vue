<template>
  <div class="alphabet">
    <ul class="alphabet-list">
      <li
        v-for="item of letters"
        :key="item"
        :ref="item"
        @click="handleClickBetter"
        @touchstart="handleTouchstart"
        @touchmove="handleTouchmove"
        @touchend="handleTouchend"
      >
        {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  data () {
    return {
      touchStatus: false,
      timer: null
    }
  },
  methods: {
    handleClickBetter (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchstart () {
      this.touchStatus = true
    },
    handleTouchmove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearInterval(this.timer)
        }
        let _this = this
        this.timer = setInterval(function () {
          const touchY = e.targetTouches[0].clientY
          const startY = _this.$refs['A'][0].offsetTop
          const index = Math.floor((touchY - startY) / 20)
          _this.$emit('change', _this.letters[index])
        }, 16)
      }
    },
    handleTouchend () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .alphabet
    width: .44rem
    position: absolute
    right:0
    top:0
    bottom:0
    display:flex
    flex-direction:column
    justify-content:center
    .alphabet-list
      text-align:center
      line-height: .4rem
      color: #00bcd4
</style>
