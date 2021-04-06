<template>
   <div>
       {{getcost()}} 
       <span class="heading">Food Price in {{names.data.city}}</span>
        
       <div id="ctable">
       <table  id="cost">
           <tbody>
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
           </tbody>

        </table>
        </div>
   <div>
      
 
   </div>
   <br>
             <b-container fluid class="text-light text-center piechart">
            <b-row class="mb-3">
             <b-col md="8" class="p-6 bg-light">
           
        <apexchart width="750" type="pie" :options="chartOptions" :series="series"></apexchart>
          
        </b-col>
            </b-row>
             </b-container>        

   </div> 




</template>



<script>


export default {
    props:["names"],
 data: function() {
      return {
        
        
          c1:0,c2:0,c3:0,c4:0,c5:0,c6:0,c7:0,c8:0, c9:0,c10:0,c11:0,c12:0,c13:0,c14:0,c15:0,c16:0,
          c17:0,c18:0,c19:0,
          ss:[],
        series: [],
          chartOptions: {
            chart: {
              width: 750,
              type: 'pie',
            },
            labels: ["Milk","Loaf of fresh Bread (500g)","Rice(white),(1kg)","Eggs (regular) (12)","Local Cheese (1kg)","Chicken Fillets (1kg)","Buffalo Round (1kg) (or Equivalent Back Leg Red Meat)","Apples (1kg)","Banana (1kg)","Oranges (1kg)","Tomato (1kg)","Potato (1kg)","Onion (1kg)","Lettuce (1 head)","Water (1.5 liter bottle)"],
            responsive: [{
              breakpoint: 600,
              options: {
                chart: {
                  width: 200
                },
                legend: {
                  position: 'bottom'
                }
              }
            }]
          },
          
      }
    },
     methods:{
      getcost(){
          
               this.c1=this.names.data.costs[8].cost;
               this.c2=this.names.data.costs[9].cost;
               this.c3=this.names.data.costs[10].cost;
               this.c4=this.names.data.costs[11].cost;
               this.c5=this.names.data.costs[12].cost;
               this.c6=this.names.data.costs[13].cost;
               this.c7=this.names.data.costs[14].cost;
               this.c8=this.names.data.costs[15].cost;
               this.c9=this.names.data.costs[16].cost;
               this.c10=this.names.data.costs[17].cost;
               this.c11=this.names.data.costs[18].cost;
               this.c12=this.names.data.costs[19].cost;
               this.c13=this.names.data.costs[20].cost;
               this.c14=this.names.data.costs[21].cost;
               this.c15=this.names.data.costs[22].cost;
      
              

               this.series.push(Number(this.c1));
               this.series.push(Number(this.c2));
               this.series.push(Number(this.c3));
               this.series.push(Number(this.c4));
               this.series.push(Number(this.c5));
               this.series.push(Number(this.c6));
               this.series.push(Number(this.c7));
               this.series.push(Number(this.c8));
               this.series.push(Number(this.c9));
               this.series.push(Number(this.c10));
               this.series.push(Number(this.c11));
               this.series.push(Number(this.c12));
               this.series.push(Number(this.c13));
               this.series.push(Number(this.c14));
               this.series.push(Number(this.c15));
            
               
               

                  
           
      }
    },
        
    
};
</script>
 
<style scoped>
#cost {
    table-layout: auto;
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 80%;
  
}

#cost td, #cost th {
  border: 1px solid #ddd;
  padding: 6px;
  
}



#cost tr:hover {background-color: #ddd;}

#cost th {
  padding-top: 8px;
  padding-bottom: 8px;
  text-align: center;
  background-color: teal;
  color: white;
}
.heading{
    font-size: 40px;
    text-align: center;
}
.ctable{
    background-color: tan;
}
.back{
    padding: 10px 10px;
    border: 8px solid black;
    margin: 10px 10px;
}
.piechart{
        position: relative;
        /* background-color: aqua;
        width:600px; */
        
}
.heading{
    text-align: center;
    font-size: 40px;
    font-family: 'Playfair Display', serif;
}
</style>