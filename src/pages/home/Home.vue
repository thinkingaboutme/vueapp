<template>
  <div class="app">
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icon></home-icon>
    <home-remmend></home-remmend>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcon from './components/Icon'
import HomeRemmend from './components/Remmend'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcon,
    HomeRemmend
  }
}
</script>

<style>
</style>
