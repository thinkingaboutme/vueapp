<template>
  <div class="city">
    <city-header></city-header>
    <city-search></city-search>
    <city-list
      :city="city"
      :hot="hotCity"
      :cities="cities"
      :better="better"
    ></city-list>
    <city-alphabet
      :cities="cities"
      @change="handleClickBetter"
    ></city-alphabet>
  </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
import axios from 'axios'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      city: '',
      hotCity: [],
      cities: {},
      better: ''
    }
  },
  methods: {
    handleClickBetter (better) {
      this.better = better
    },
    getCityInfo () {
      axios.get('/static/mock/city.json')
        .then(this.getCityInfoSucc)
    },
    getCityInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.city = data.city
        this.hotCity = data.hotCities
        this.cities = data.cities
      }
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style>
</style>
