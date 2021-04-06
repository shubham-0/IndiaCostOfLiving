<template>
<div id="app2">
  <main class="main">
    <div class="search-box">
      <input type="text" v-model="query" class="search-bar" placeholder="search..." @keypress="fetchwether"/>
      <!-- <button @click="fetchwether">click</button> -->
    </div>
    <div class="wether-wrap" v-if="typeof weather.main!='undefined'">
      <div calss="location-box">
        <div class="loacation">{{weather.name}},{{weather.sys.country}}{{weather.wind}}</div>
        <div calss="date">{{calldate()}}</div>
      </div>
      <div class="wether-box">
        <div calss="temp"><b>{{Math.round(weather.main.temp)}}</b><sup>o</sup>C</div>
      </div>
      <div class="disc">{{weather.weather[0].main}},{{weather.weather[0].description}}</div>
      <img v-bind:src="'http://openweathermap.org/img/wn/'+linkimage+'.png'"/>
    </div>
  </main>
  
</div>

 
</template>

<script>
 
export default {
 
 props:["names"],
  data()
  {
    return{
      api_key:'6c860b49b9e1dc5df9a61e1d8095e376',
      url_base:'https://api.openweathermap.org/data/2.5/',
      query:"",
      weather:{},
      linkimage:"",
      
      

    }
  },
  methods:{
    fetchwether:function(e){
      if(e.key=="Enter"){
       
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.query}&units=metric&appid=6c860b49b9e1dc5df9a61e1d8095e376`)
        .then(res=>{
          return res.json();
        }).then(this.setResult);
      }
    },
    setResult(results)
    {
        this.weather=results;
        this.linkimage=results.weather[0].icon;
    },
    calldate: function () {

   

            var d = new Date();
            var mon=["January","Febuary","March","April","May","June","July","August","September","October","November","December"];
            var da=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
            let day=da[d.getDay()];
            let month=mon[d.getMonth()];
            let date=d.getDate();
            let year=d.getFullYear();

            return `${day} ${date} ${month} ${year}`;


        },
      

    },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}
.body{
   font-family: 'Montserrat', sans-serif;
   font-size: large;
    
}
.main
{
  margin: auto;
  width: 40%;
  height:350px;
  border: 3px solid #73AD21;
  padding: 10px;
 
}
input[type=text]{
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
.wether-wrap{
  width:100%;
  padding:10px 12px;
   margin: 8px 0;
  display: inline-block;
  font-size: large;
}
.wether-box{
  font-family: 'Fredoka One', cursive;
  font-size: x-large;
  
  background-color: cornsilk;
  width:100px;
  height:50px;
  padding:5px 10px;
  margin: auto;
}
.disc{
  padding:15px;
}



</style>
