<template>
<div id="qq">
    {{getfdata()}}
    <div id="qul">
   
                            <span class="heading">Quality of Life in {{citys}}</span>
                            <b-container fluid class="text-light text-center" v-for="dat in sddata" v-bind:key="dat">
                                <span v-if="dat.city==city">
                       <b-row class="mb-4" align-h="centre">
                           <b-col md="4" class="p-6 " align="center">
                             <b-card
                                    title="Crime"
                                    img-src="https://hoodline.imgix.net/uploads/story/image/649783/..featured_image..iStock-image4.jpg.jpg?auto=format"
                                    img-alt="Image"
                                    img-top
                                    tag="article"
                                    style="max-width: 50rem;"
                                    class="mb-3"
                                >
                                    <b-card-text>
                                        {{dat.life[0].description}} level in {{citys}} is {{dat.life[0].level.name}} <br>
                                        <b-progress :value="dat.life[0].level.value" :max="max" show-value class="mb-3"></b-progress><br>
                                        If you are looking for the city to live, crime is one of the most important accept.Here crime data is 
                                        analysis of previous data, and this percentage is average of the crime rate of that city.
                                        
                                        
                                    
                                    </b-card-text>

                                </b-card>
                           </b-col>
                       </b-row>
                            
                        

                       <b-row class="mb-4">
                           <b-col md="4" class="ml-md-auto p-6">
                            <b-card
                                    title="Health care"
                                    img-src="https://si.wsj.net/public/resources/images/JR-AA122_HEISRA_P_20190913131859.jpg"
                                    img-alt="Image"
                                    img-top
                                    tag="article"
                                    style="max-width: 50rem;"
                                    class="mb-3"
                                >
                                    <b-card-text>
                                         {{dat.life[1].description}} level in {{citys}} is {{dat.life[1].level.name}}<br>
                                          <b-progress :value="dat.life[1].level.value" :max="max" show-value class="mb-3"></b-progress><br>
                                        If you are looking for the city to live, Health Care is one of the most important accept.Here  data is 
                                        analysis of previous data, and this percentage is average of the data of that city.
                                        
                                    </b-card-text>

                                   
                            </b-card>
                           </b-col>
                       </b-row>

                        

                        <b-row class="mb-4">
                            <b-col md="4" class="p-6">
                            <b-card
                                    title="Cost of living"
                                    img-src="https://insights.dice.com/wp-content/uploads/2018/08/Cost-of-Living-Tech-Pros-Dice.png"
                                    img-alt="Image"
                                    img-top
                                    tag="article"
                                    style="max-width: 50rem;"
                                    class="mb-3"
                                >
                                    <b-card-text>
                                         {{dat.life[2].description}} level in {{citys}} is {{dat.life[2].level.name}}<br>
                                          <b-progress :value="dat.life[2].level.value" :max="max" show-value class="mb-3"></b-progress><br>
                                        If you are looking for the city to live, Cost of living is one of the most important accept.Here  data is 
                                        analysis of previous data, and this percentage is average of the data of that city.
                                    </b-card-text>

                                   
                                </b-card>

                            </b-col>
                        </b-row>

                        <b-row class="mb-4">
                            <b-col md="4" class="ml-md-auto p-6" >
                            <b-card
                                    title="Pollution"
                                    img-src="https://m.hindustantimes.com/rf/image_size_1200x900/HT/p2/2019/11/03/Pictures/weather-pollution-in-delhi_0a5819a2-fdda-11e9-aa29-bae48cf1d327.jpg"
                                    img-alt="Image"
                                    img-top
                                    tag="article"
                                    style="max-width: 50rem;"
                                    class="mb-3"
                                >
                                    <b-card-text>
                                          {{dat.life[3].description}} level in {{citys}} is {{dat.life[3].level.name}}<br>
                                          <b-progress :value="dat.life[3].level.value" :max="max" show-value class="mb-3"></b-progress><br>
                                        If you are looking for the city to live, Pollution is one of the most important accept.Here  data is 
                                        analysis of previous data, and this percentage is average of the data of that city.
                                    </b-card-text>

                                   
                                </b-card>

                            </b-col>
                        </b-row>

                         <b-row class="mb-4">
                             <b-col  md="4" class="p-6 ">
                             <b-card
                                    title="Quality Of Life"
                                    img-src="https://www.everspringhealth.com/media/k2/items/cache/3899dfe821816fbcb3db3e3b23f81585_Generic.jpg"
                                    img-alt="Image"
                                    img-top
                                    tag="article"
                                    style="max-width: 50rem;"
                                    class="mb-3"
                                >
                                    <b-card-text>
                                         {{dat.life[4].description}} level in {{citys}} is {{dat.life[4].level.name}}<br>
                                          <b-progress :value="dat.life[4].level.value" :max="max" show-value class="mb-3"></b-progress><br>
                                        If you are looking for the city to live, Quality of life is one of the most important accept.Here  data is 
                                        analysis of previous data, and this percentage is average of the data of that city.
                                    </b-card-text>

                                    
                                </b-card>

                             </b-col>
                         </b-row>
                                </span>
                            </b-container>


    </div>

</div>
    
</template>

<script>
import VueAos from 'vue-aos'
export default {
    props:["citys"],
    
    components: { VueAos },
        data(){
            return{
                sddata:"",
                city:this.citys,

            }

        },


    methods:{
        getfdata()
        {
           fetch("qualitylife.json")
        .then(response => response.json())
        .then(data => (this.sddata = data));    
        }

    }
    
}
</script>
<style scoped>
#qul{
     margin-top: 30px;
  margin-bottom: 20px;
  margin-right: 30px;
  margin-left: 30px;
 
}
.heading{
    font-size: 40px;
    font-family: 'Courier New', Courier, monospace;
    text-align: center;
    font-weight: bold;
}
#qq{
    background: linear-gradient(265deg, #040404, #d8553b, #d8be3b, #3bcfd8, #5ad2da);
    background-size: 1000% 1000%;
    -webkit-animation: AnimationName 2s ease infinite;
    -moz-animation: AnimationName 2s ease infinite;
    -o-animation: AnimationName 2s ease infinite;
    animation: AnimationName 2s ease infinite;
}
@-webkit-keyframes AnimationName {
    0%{background-position:36% 0%}
    50%{background-position:65% 100%}
    100%{background-position:36% 0%}
}
@-moz-keyframes AnimationName {
    0%{background-position:36% 0%}
    50%{background-position:65% 100%}
    100%{background-position:36% 0%}
}
@-o-keyframes AnimationName {
    0%{background-position:36% 0%}
    50%{background-position:65% 100%}
    100%{background-position:36% 0%}
}
@keyframes AnimationName {
    0%{background-position:36% 0%}
    50%{background-position:65% 100%}
    100%{background-position:36% 0%}
}


</style>