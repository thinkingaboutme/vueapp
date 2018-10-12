<template>
  <div class="search">
    <input type="text" class="search-input" placeholder="输入城市名或拼音" />
  </div>
</template>

<script>
export default {
  name: 'CitySearch'
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
</style>
