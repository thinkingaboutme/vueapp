<template>
  <div>
    <div class="search">
      <input type="text" v-model="keyword" class="search-input" placeholder="输入城市名或拼音" />
    </div>
    <div class="search-conent" v-show="keyword">
      <ul>
        <li
          class="search-item border-bottom"
          v-for="item of list"
          :key="item.id"
        >
          {{item.name}}
        </li>
        <li class="search-item border-bottom" v-show="!list.length">没有找到数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearInterval(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .search
    height: .64rem
    background: #00bcd4
    padding:.1rem .2rem
    display:flex
    .search-input
      flex:1
      border-radius:.06rem
      text-align:center
      color: #666
  .search-conent
    overflow: hidden
    position: absolute
    top: 1.72rem
    left:0
    right:0
    bottom:0
    background: #eee
    z-index:99
    .search-item
      line-height: .62rem
      padding-left: .2rem
      background: #ffffff
</style>
