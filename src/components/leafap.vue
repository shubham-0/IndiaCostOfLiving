<template>
    <div><h1>check</h1>
    <!-- <button v-on:click="getWeatherData">Get Weather Data</button>
     <div>{{weatherDataList}}</div> 
    <div v-for="wlist in weatherDataList" v-bind:key="wlist">
      <div v-if="wlist.city=='ranchi'">{{wlist.city}},{{wlist.crime}}
      </div>
      </div>
    

     <b-button variant="primary">Primary</b-button>
  <b-button variant="secondary">Secondary</b-button>
  <b-button variant="success">Success</b-button>
  <b-button variant="danger">Danger</b-button>
  <b-button variant="warning">Warning</b-button>
  <b-button variant="info">Info</b-button>
  <b-button variant="light">Light</b-button>
  <b-button variant="dark">Dark</b-button> -->

  


    </div>

    
</template>
<script>
export default {
  name: "Weather",
  data() {
    return {
      weatherDataList: []
    };
  },
  methods: {
    getWeatherData() {
      fetch("weather.json")
        .then(response => response.json())
        .then(data => (this.weatherDataList = data));
    }
  }
}
</script>

