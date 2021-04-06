<template>
  <div id="app3">
   
    <p>{{cost}}</p>
  </div>
</template>

<script>
import axios from 'axios'


export default {
  name: 'app3',
  data(){
    return {
      city:"ranchi",
      //notes: [],
      cost:[]
    }
  },
  mounted(){
     axios.get(`http://localhost:5000/${this.city}`)
      .then((response)=>{
        this.cost=response;
      })
      .catch((error)=>{
        console.log("unhandle");
      })
    
  }
}
</script>
<style>

</style>
