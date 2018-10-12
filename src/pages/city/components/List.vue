<template>
  <div class="list">
    <div class="list-area">
      <div class="list-title border-topbottom">当前城市</div>
      <div class="list-wapper">
        <div class="list-item">长沙</div>
      </div>
    </div>
    <div class="list-area">
      <div class="list-title border-topbottom">热门城市</div>
      <div class="list-wapper">
        <div class="list-item">长沙</div>
        <div class="list-item">长沙</div>
        <div class="list-item">长沙</div>
        <div class="list-item">长沙</div>
        <div class="list-item">长沙</div>
        <div class="list-item">长沙</div>
      </div>
    </div>
    <div class="list-area">
      <div class="list-title border-topbottom">A</div>
      <div class="list-wapper">
        <div class="list-city border-bottom">阿拉善</div>
        <div class="list-city border-bottom">阿拉善</div>
        <div class="list-city border-bottom">阿拉善</div>
        <div class="list-city border-bottom">阿拉善</div>
        <div class="list-city border-bottom">阿拉善</div>
        <div class="list-city border-bottom">阿拉善</div>
        <div class="list-city border-bottom">阿拉善</div>
      </div>
    </div>
    <div class="list-area">
      <div class="list-title border-topbottom">B</div>
      <div class="list-wapper">
        <div class="list-city border-bottom">阿拉善</div>
        <div class="list-city border-bottom">阿拉善</div>
        <div class="list-city border-bottom">阿拉善</div>
        <div class="list-city border-bottom">阿拉善</div>
        <div class="list-city border-bottom">阿拉善</div>
        <div class="list-city border-bottom">阿拉善</div>
        <div class="list-city border-bottom">阿拉善</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CityList'
}
</script>

<style lang="stylus" scoped>
  .list
    .list-area
      .list-title
        background: #eeeeee
        padding-left: .2rem
        line-height: .6rem
        font-size: .26rem
      .list-wapper
        display:flex
        background:#fff
        flex-wrap:wrap
        .list-item
          width:25%
          border:1px solid #ccc
          text-align: center
          line-height: .44rem
          border-radius:.06rem
          margin:.2rem .2rem
        .list-city
          width:100%
          padding-left: .2rem
          line-height: .80rem
</style>
