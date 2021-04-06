<template>
    <div class="costofliving">
        <header>
            <div class="heading">
            <span>Cost of living in {{names.data.city}} </span>
            
          </div>
          <div class="heading2">
              <p >Cost of living is amount of money an invidual need to maintain their standard life </p>
          </div>
          
        </header>
        <b-container>
            <b-row>
                <b-col class="back text-dark" cols="5">
                    <div>
                        {{getdistrict()}}
                        <div><h1>Current Weather:</h1><b>{{Math.round(weathers.data.main.temp)}}</b><sup>o</sup>C
                               <span> {{weathers.data.weather[0].main}}, </span>
                               <span>{{weathers.data.weather[0].description}}, </span>
                               <span>pressure:- {{weathers.data.main.pressure}}, humidity:- {{weathers.data.main.humidity}}
                                 <br> <span class="airqulity"> wind speed:-</span> {{weathers.data.wind.speed}}<br>
                                  <span class="airqulity">Air quality</span> {{airquality.data.aqi}}
                                  <div v-if="airquality.data.aqi <=50">
                                      
                                                        Good  <div class="col-sm-3" ><img src="../assets/smili.png"></div>
                                                        </div>
                                                        <div v-else-if="airquality.data.aqi >=51 && airquality.data.aqi <=100">
                                                        Moderate <div class="col-sm-3" ><img src="../assets/moderate.png"></div>
                                                        </div>
                                                        <div v-else-if="airquality.data.aqi >=101 && airquality.data.aqi <=150">
                                                        Unhealthy for sensitive Groups <div class="col-sm-3" ><img src="../assets/sensitive.png"></div>
                                                        </div>
                                                        <div v-else-if="airquality.data.aqi >=151 && airquality.data.aqi <=150">
                                                        Unhealthy  <div class="col-sm-3" ><img src="../assets/unhealthy.png"></div>
                                                        </div>
                                                         <div v-else-if="airquality.data.aqi >=2001 && airquality.data.aqi <=300">
                                                       Very  Unhealthy <div class="col-sm-3" ><img src="../assets/unhealthy.png"></div>
                                                        </div>
                                                        <div v-else>
                                                        Hazardous <div class="col-sm-3" ><img src="../assets/haazardous.png"></div>
                                                        </div>
                               </span>
                        
                        
                        </div>
                        {{district}}
                    </div>
     
                </b-col>
                <b-col>
                    <se></se>
                    <ss></ss>
                </b-col>
               
            </b-row>
        </b-container>
        <div calss="ctable">
           
            <table id="cost">
                <tbody>
                    <tr>
                        <th>Restaurants</th>
                        <th>Average Cost</th>
                        <th>Range</th>
                    </tr>
                    
                    <tr v-for="(items,index) in names.data.costs"   v-bind:key="items" >
                        <td v-if="index<=7">{{items.item}}</td>
                        <td v-if="index<=7">{{items.cost}}</td>
                        <td v-if="index<=7">Min: {{items.range.low}}
                            <b-progress :value="value" class="w-25">
                         <b-progress-bar variant="primary" :value="items.range.low"></b-progress-bar>
                         <b-progress-bar variant="success" :value="items.cost"></b-progress-bar>
                         <b-progress-bar variant="info" :value="items.range.high"></b-progress-bar> 
                             </b-progress>
                            Max: {{items.range.high}}
                        </td>
                        
                    </tr>
                    <tr>
                        <th>Markets</th>
                        <th>Average Cost</th>
                        <th>Range</th>
                    </tr>
                    <tr v-for="(items,index) in names.data.costs" v-bind:key="items" >
                        <td v-if="index>=8 && index <=26">{{items.item}}</td>
                        <td v-if="index>=8 && index <=26">{{items.cost}}</td>
                        <td v-if="index>=8 && index <=26">Min: {{items.range.low}}
                            <b-progress :value="value" class="w-25">
                         <b-progress-bar variant="primary" :value="items.range.low"></b-progress-bar>
                         <b-progress-bar variant="success" :value="items.cost"></b-progress-bar>
                         <b-progress-bar variant="info" :value="items.range.high"></b-progress-bar> 
                             </b-progress>
                            Max: {{items.range.high}}</td> 
                    </tr>
                     <tr>
                        <th>Transportation</th>
                        <th>Average Cost</th>
                        <th>Range</th>
                    </tr>
                    <tr v-for="(items,index) in names.data.costs" v-bind:key="items" >
                        <td v-if="index>=27 && index <=34">{{items.item}}</td>
                        <td v-if="index>=27 && index <=34" >{{items.cost}}</td>
                        <td v-if="index>=27 && index <=34">Min: {{items.range.low}}
                            <b-progress :value="value" class="w-25">
                         <b-progress-bar variant="primary" :value="items.range.low"></b-progress-bar>
                         <b-progress-bar variant="success" :value="items.cost"></b-progress-bar>
                         <b-progress-bar variant="info" :value="items.range.high"></b-progress-bar> 
                             </b-progress>
                            Max: {{items.range.high}}</td> 
                    </tr>
                     <tr>
                        <th>Utilities (Monthly)</th>
                        <th>Average Cost</th>
                        <th>Range</th>
                    </tr>
                    <tr v-for="(items,index) in names.data.costs" v-bind:key="items" >
                        <td v-if="index>=35 && index <=37">{{items.item}}</td>
                        <td v-if="index>=35 && index <=37">{{items.cost}}</td>
                        <td v-if="index>=35 && index <=37">{{items.range.low}},{{items.range.high}}</td> 
                    </tr>
                    <tr>
                        <th>Sports And Leisure</th>
                        <th>Average Cost</th>
                        <th>Range</th>
                    </tr>
                    <tr v-for="(items,index) in names.data.costs" v-bind:key="items" >
                        <td v-if="index>=38 && index <=40">{{items.item}}</td>
                        <td v-if="index>=38 && index <=40">{{items.cost}}</td>
                        <td v-if="index>=38 && index <=40">{{items.range.low}},{{items.range.high}}</td> 
                    </tr>
                     <tr>
                        <th>Childcare</th>
                        <th>Average Cost</th>
                        <th>Range</th>
                    </tr>
                    <tr v-for="(items,index) in names.data.costs" v-bind:key="items" >
                        <td v-if="index>=41 && index <=42">{{items.item}}</td>
                        <td v-if="index>=41 && index <=42">{{items.cost}}</td>
                        <td v-if="index>=41 && index <=42">{{items.range.low}},{{items.range.high}}</td> 
                    </tr>
                    <tr>
                        <th>Clothing And Shoes</th>
                        <th>Average Cost</th>
                        <th>Range</th>
                    </tr>
                    <tr v-for="(items,index) in names.data.costs" v-bind:key="items" >
                        <td v-if="index>=43 && index <=46">{{items.item}}</td>
                        <td v-if="index>=43 && index <=46">{{items.cost}}</td>
                        <td v-if="index>=43 && index <=46">{{items.range.low}},{{items.range.high}}</td> 
                    </tr>
                     <tr>
                        <th>Rent Per Month</th>
                        <th>Average Cost</th>
                        <th>Range</th>
                    </tr>
                    <tr v-for="(items,index) in names.data.costs" v-bind:key="items" >
                        <td v-if="index>=47 && index <=50">{{items.item}}</td>
                        <td v-if="index>=47 && index <=50">{{items.cost}}</td>
                        <td v-if="index>=47 && index <=50">{{items.range.low}},{{items.range.high}}</td> 
                    </tr>
                     <tr>
                        <th>Buy Apartment Price</th>
                        <th>Average Cost</th>
                        <th>Range</th>
                    </tr>
                    <tr v-for="(items,index) in names.data.costs" v-bind:key="items" >
                        <td v-if="index>=51 && index <=52">{{items.item}}</td>
                        <td v-if="index>=51 && index <=52">{{items.cost}}</td>
                        <td v-if="index>=51 && index <=52">{{items.range.low}},{{items.range.high}}</td> 
                    </tr>
                    <tr>
                        <th>Salaries And Financing</th>
                        <th>Average Cost</th>
                        <th>Range</th>
                    </tr>
                    <tr v-for="(items,index) in names.data.costs" v-bind:key="items" >
                        <td v-if="index>=53">{{items.item}}</td>
                        <td v-if="index>=53">{{items.cost}}</td>
                        <td v-if="index>=53">{{items.range.low}},{{items.range.high}}</td> 
                    </tr>
                    
                     
                </tbody>
            </table>
           <br><br><br>
        </div>
        <!-- {{airquality}},<span>hello</span>
        {{restrocost}} -->
 
        </div>
</template>
<script>
//import axios from 'axios'

import se from './selected.vue'
import vjh from './selected.vue'
export default {
    props:["names","weathers"],
    components:{"ss":se,
    "stry":vjh},
    data()
    {
        return{
            district:"",
            datef:"",
            lon:"",
            lat:"",
            sunrise:"",
            sunset:"",
            airquality:"",
            sddata:[]
           
        
        }

    },
    methods:{
        getdistrict()
        {
            this.lon=this.weathers.data.coord.lon,
            this.lat=this.weathers.data.coord.lat,
            this.district=this.weathers.data.name,
            this.sunset=this.weathers.data.sys.sunset,
            this.sunrise=this.weathers.data.sys.sunrise

            fetch(`https://api.waqi.info/feed/geo:${this.lat};${this.lon}/?token=04f8e6e7236856e690b509623648721f071eb9cc`)
            .then((x) => x.json())
            .then((data) => {
            if (data.status != "ok") throw data.reason;
              this.airquality=data;});

        //      fetch("https://indian-cities-api-nocbegfhqg.now.sh/cities")
        // .then(response => response.json())
        // .then(data => (this.sddata = data));
            
        },
        
    },
    mounted(){
    //      axios
    //   .get('https://api.waqi.info/feed/geo:28.67;77.22/?token=04f8e6e7236856e690b509623648721f071eb9cc')
    //   .then(response => (this.airquality = response))
        // axios.get('https://api.waqi.info/feed/geo:28.67;77.22/?token=04f8e6e7236856e690b509623648721f071eb9cc')
        //     .then((resp)=>{
        //         this.airquality=resp;
        //     }).catch((error)=>{
        //         alert(error);
        //     })

    }

   
    
}
</script>
<style scoped>
.costofliving{
    background-image: url("https://wallpapercave.com/wp/zLoGts2.jpg");
  background-position: center;
background-attachment: fixed;
background-repeat: no-repeat;



}
#cost {
     background-image: url("https://wallpapercave.com/wp/mX9qsPt.jpg");
    table-layout: auto;
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 80%;
  color: white;
  
}

#cost td, #cost th {
  border: 1px solid #ddd;
  padding: 6px;
  
}



#cost tr:hover {background-color:skyblue;color: black;}

#cost th {
  padding-top: 8px;
  padding-bottom: 8px;
  text-align: center;
 background-color: black;
  color: white;
}
.heading{
    font-size: 40px;
    text-align: center;
    font-family: 'Rowdies', cursive;
}
.heading2{
    font-size: 30px;
    text-align: center;
   font-family: 'Pacifico', cursive;


}
.ctable{
    background-color: tan;
}
.back{
    background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSt8T_xj-KntSLD79TwLv4zhyqdo4aq7qNx6A&usqp=CAU");
    padding: 20px 10px;
    border-radius: 50px;
    color: black;
    margin: 10px 40px;


}
.airqulity
{
        font-size: 20px;
        font-weight: bold;
}
</style>