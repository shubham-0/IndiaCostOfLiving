<template>
    <div id="header">
        <nav class="navbar is-light" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" href="#">
            <span class="title is-size-1">cost of living</span>
          </a>
          <div class="navbar-item">
          <input type="text" placeholder="search city...."/>
          </div>
        <div class="navbar-item">
           <div class="dropdown">
  <button onclick="myFunction()" class="dropbtn">Dropdown</button>
  <div id="myDropdown" class="dropdown-content">
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#contact">Contact</a>
  </div>
</div>
        </div>
          
        </div>

      </div>
    </nav>
    </div>
</template>
<script>
export default {
   
    data(){
        return{
            listofapi:[{name:"What are you looking for?",link:""},{name:"Cost of living" ,link:""},{name:"Health Care",link:""},
            {name:"Property Price",link:""},{name:"Quality of life",link:""},{name:"Taxi fare",link:""},{name:"Traffic",link:""},
            {name:"Education Cost",link:""}],

        }
    },
    methods:{

    }
    
}
</script>
<style scoped>


</style>