<template>
    <div id="app4"> 
      {{getcost()}} 
        
        <div>
     <apexchart width="500" type="pie" :options="chartOptions" :series="series"></apexchart>
   </div>
   {{costsss}},{{cost2}}
      </div>
      
       
</template>

<script>
export default {
  props:["names"],
    data: function() {
      return {
        
        costsss:0,
        cost2:0,
          restrorentcost:0,
          marketcost:0,
          utilitieacost:0,
          sportcost:0,
          
        series: [],
          chartOptions: {
            chart: {
              width: 380,
              type: 'pie',
            },
            labels: ['Restaurants Cost', 'Market Cost', 'Utilities Cost', 'Sports & Leisure Cost'],
            responsive: [{
              breakpoint: 480,
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
                  for(let i=0;i<this.names.data.costs.length;i++)
                  {
                    if(i<=7)
                    {
                      this.costsss=Math.round(Number(this.costsss)+Number(this.names.data.costs[i].cost));
                      //this.restrorentcost=Math.round(Number(this.costsss)+Number(this.names.data.costs[i].cost));
                    
                    }
                    else if(i>=8 && i <=26)
                    {
                     this.marketcost=Math.round(Number(this.costsss)+Number(this.names.data.costs[i].cost));
                    }
                    else if(i>=35 && i <=37)
                    {
                      
                        this.utilitieacost=Math.round(Number(this.costsss)+Number(this.names.data.costs[i].cost));
                    }
                    else if(i>=38 && i <=40)
                    {
                        this.sportcost=Math.round(Number(this.costsss)+Number(this.names.data.costs[i].cost));
                    }
                    
                    
                  }
                      this.restrorentcost=this.costsss; 






            this.series.push(this.restrorentcost);
            this.series.push(this.marketcost);
            this.series.push(this.utilitieacost);
            this.series.push(this.sportcost);
           
      }
    },
};

</script>