<template>
  <div>
    <div class="list" v-for="(item, index) of list" :key="index">
      <div class="list-item border-bottom">
        <span class="item-icon"></span>
        {{item.title}}
      </div>
      <div v-if="item.children" class="item-children">
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  .list-item
    line-height: .8rem
    .item-icon
      display:inline-block
      width: .36rem
      height: .36rem
      background:url("http://s.qunarzz.com/piao/image/touch/sight/detail.png") 0 -0.45rem no-repeat
      background-size:0.4rem 3rem
      position: relative
      left: .2rem
      top: .1rem
      margin-right: .2rem
  .item-children
    padding:0 .2rem
</style>
