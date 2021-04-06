<template>
  <div id="ap">
    <div>
  
       <b-navbar class="navbarback">
        
      <div class="">
        <div class=" ">
          <a>
            <span class="header title is-size-1">Where should you <span class="live">Live?</span></span>
          </a>
          <div class="navbar-item">
          <b-form-input type="text" v-bind:placeholder="shan" v-model="sear" @keypress="cityfunction"></b-form-input>
          </div>
       
        <div class="navbar-item">
          <b-form-select v-model="selected">
      <option v-for="option in options" v-bind:value="option.value" v-bind:key="option">{{option.text}}  </option>    
            </b-form-select> 
        </div>
          
        </div>
        
     

      </div>
    </b-navbar>
    </div>
    
   
    <div>
     
     <component v-bind:names="cost" v-bind:weathers="weather" v-bind:citys="searchcity" v-bind:is="selected"></component>
     
    </div>
    
   
  </div>
</template>

<script>
import axios from 'axios'

import wetherreport from '../components/wetherreport.vue'
import cocofliving from '../components/costofliving2.vue'
import select from '../components/selected.vue'
import leafapi from '../components/leafap.vue'
import jill from  '../components/jilla.vue'
import strt from '../components/startcont.vue'
//import footer from '../components/footer.vue'
import foodprice from '../components/foodCost.vue'
import signup from '../components/signup.vue'
import  granim from '../components/granim.vue'
import quality from '../components/qualityoflife.vue'


export default {
  name: 'ap',
  components: {"weatherfor":wetherreport,
                "cocof":cocofliving,
                 "selecte":select,
                 "sleaf":leafapi,
                 "ji":jill,
                 "str":strt,
                 "foodp":foodprice,
                 "sigup":signup,
                 "gram":granim,
                 "qlty":quality},
  data(){
    return {
      shan:"Search city.......",
      sear:"",
      compweather:"weatherfor",
      naame:"shubham",
      dropdown:"",
      searchcity:"",
      city:"ranchi",
      notes: [],
      cost:[],
      //  listofapi:[{name:"Cost of living" ,value:"cocof"},{name:"Health Care",value:"selecte"},
      //       {name:"Property Price",value:"sleaf"},{name:"Quality of life",value:"sleaf"},{name:"Taxi fare",value:"ji"},{name:"Traffic",value:"7"},
      //       {name:"Education Cost",value:"10"}],
       data:"",
        selected: 'str',
    options: [
      {text:"what you are looking for?",value:"str"},
      {text:"Quality of Life",value:"qlty"},
      { text: 'Cost of living', value: 'cocof' },
      { text: 'Health care', value: 'selecte' },
      { text: 'Property price', value: 'sleaf' },
      {text:"Quality of life",value:"sleaf"},
      {text:"Taxi fare",value:"ji"},
      {text:"Food Price",value:"foodp" },
      {text:"Education Cost",value:"gram"}
    ],
    weather:"",
    }
  },
  methods: {
   
   
    cityfunction(e){
      if(e.key=="Enter")
      {
        this.san=this.sear,
        this.searchcity=this.sear,
        //console.log("this id");
        //this.searchcityent=this.searchcity;
         
        
        // fetch('c.txt')
         axios.get(`http://localhost:5000/${this.searchcity}`)
      .then((response)=>{
        this.cost=response;
        
      })
      .catch((error)=>{
        alert(error);
       // console.log("unhandle");
      }),
      axios(`https://api.openweathermap.org/data/2.5/weather?q=${this.searchcity}&units=metric&appid=6c860b49b9e1dc5df9a61e1d8095e376`)
            .then((res)=>{this.weather=res;
            }).catch((error)=>{
              alert(error);
            }),
    this.sear=""
      }
    }
  },

  mounted(){
            
    

    
  }
  
 }
</script>
<style>
#ap {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  /* -webkit-font-smoothing: antialiased; */
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
.wether{
  width:100%;
}

.title {
  font-family: 'Modak', cursive;
}
.live{
  color: skyblue;
}

.header{
  color: aliceblue;
}
.logsin{
  
  float: right;
}

.navbarback {
    background-image: url("https://wallpaperaccess.com/full/1782494.jpg");
}

</style>
