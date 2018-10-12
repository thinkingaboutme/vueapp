<template>
  <div class="alphabet">
    <ul class="alphabet-list">
      <li>A</li>
      <li>A</li>
      <li>A</li>
      <li>A</li>
      <li>A</li>
      <li>A</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CityAlphabet'
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
