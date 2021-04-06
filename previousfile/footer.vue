<template>
    <div class="footermain">
       <footer class="page-footer font-small blue">
         <div>
  <b-nav tabs class="test">
    
    <b-nav-item  ><router-link to="/">Home</router-link></b-nav-item>
    <b-nav-item><router-link to="/contact">Contact Us</router-link></b-nav-item>
    <b-nav-item><router-link to="/about">About Us</router-link></b-nav-item>
    
  </b-nav>
</div>
  <!-- Copyright -->
  <div class="footer-copyright text-center py-3">© 2020 Copyright:
    <a href="#"> <span class="span1" style="color:white">Where Should you Live?</span></a>
  </div>
  <!-- Copyright -->

</footer>
</div>
</template>
<style scoped>
.page-footer{
  margin-top: 40px;
  color:aliceblue;
background-image: url("https://wallpaperaccess.com/full/1782494.jpg");

}
a{
  color: rgb(215, 250, 238);
}
.span1{
  color:black;
  font-size: 20px;
  font-weight: bold;
 
}
</style>