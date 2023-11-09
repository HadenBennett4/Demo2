<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <root>
  <header>
      <img class="header-image" src="../src/assets/headerimage.jpg">
      <nav>
        <RouterLink class="router-link" to="/">Home</RouterLink>
        <RouterLink class="router-link" to="/about">About</RouterLink>
        <RouterLink class="router-link" to="/services">Services</RouterLink>
        <RouterLink class="router-link" to="/faq">Faq</RouterLink>
        <RouterLink class="router-link" to="/gallery">Gallery</RouterLink>
        <RouterLink class="router-link" to="/contact">Contact</RouterLink>
      </nav>
      <boxy>
        <a href="https://www.nationalgeographic.com/" target="_blank" class="icons">
          <v-icon name="bi-facebook" scale="1" fill="black" />
          </a>
        <a href="https://www.nationalgeographic.com/" target="_blank" class="icons">
          <v-icon name="bi-linkedin" scale="1" fill="black"/>
          </a>
        </boxy>
        <p>(420) 696-6969</p>

  </header>
<RouterView/>
<footer>
  <footer1>
  <box>
    <h2>UNITED FAMILY</h2>
    <p2>PROVIDE PERFECT CARE FOR YOUR LOVED ONE</p2>
    <tinybox>
    <a href="https://www.nationalgeographic.com/" target="_blank" class="iconic">
          <v-icon name="bi-facebook" scale="1.5" fill="white"/>
          </a>
        <a href="https://www.nationalgeographic.com/" target="_blank" class="iconic">
          <v-icon name="bi-linkedin" scale="1.5" fill="white"/>
          </a></tinybox>
  </box>
  <box1>
    <h3>Overview</h3>
    <nav1>
        <RouterLink class="routerlink" to="/">Home</RouterLink>
        <RouterLink class="routerlink" to="/services">Services</RouterLink>
        <RouterLink class="routerlink" to="/gallery">Gallery</RouterLink>
      </nav1>
  </box1>
  <box3>
  <h5>Infromation</h5>
  <nav1>
    <RouterLink class="routerlink" to="/about">About</RouterLink>
    <RouterLink class="routerlink" to="/faq">Faq</RouterLink>
    <RouterLink class="routerlink" to="/contact">Contact</RouterLink>
  </nav1>
  </box3>
  <box2>
   <h4>Get in Touch</h4>
   <smallbox>
   <v-icon hover animation="float" animationSpeed="slow" name="bi-telephone-fill" scale="1.5" fill="white" class="icon"/>
   <p3>(696) 420-6969</p3>
  </smallbox>
  <br>
  <smallbox>
   <v-icon style="margin-left:10px" hover animation="float" animationSpeed="slow" name="hi-mail" scale="1.5" fill="white" class="icony"/>
   <p3>hello@duckweedmarketing.com</p3>
  </smallbox>
  </box2>
  </footer1>
  <hr class="page-break-line">
  <p4 >Website produced and powered by Duckweed Marketing 2023</p4>
</footer>
</root>
</template>

<style scoped>
@media (min-width: 1024px) {
root{
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  margin:0;
}
header {
  height: 110px;
  width: 100%;
  top: 0;
  display: flex;
  flex-direction:row;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  position: fixed;
  font-family: sans-serif;
  font-weight: bold;
  z-index:2;
}

nav {
  display: flex;
  align-items: center;
  justify-content: center;
  width:600px;
}

.router-link {
  margin-right:50px;
  align-items: bottom;
  text-decoration: none;
  color: #2c3d57;
  font-size: 20px;
}

.router-link:hover {
  color:#968b57;
}

nav a.router-link-exact-active {
  color: #968b57;
}

.header-image {
  width:145px;
  height:auto;
}

p {
  width: 200px;
  height: 20px;
  font-size: 15px;
  display: flex;
  background-color: #968b57;
  padding: 0.5%;
  border-radius: 20px;
  color: white;
  justify-content: center;
  align-items: center;
}
.icons {
  display: flex;
  flex-direction: row;
  padding: 20%;
}
boxy {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width:50px;
}

footer {
  width: 100.98%;
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #2c3d57;
  padding-top: 5%;
  position: relative;
  bottom: 0;
  margin-left:-0.5%;
  margin-bottom: -0.5%;
  
}
footer1 {
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: row;
}
box {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 10%;
  padding-right: 10%;
}
h2 {
  width: 100%;
  color: #fbfbfc;
  padding-bottom: 5%;
  font-size: 40px;
  font-weight: normal;
}
p2 {
  width: 100%;
  color:#fbfbfc;
  padding-bottom: 10%;
}
.iconic {
  padding-right:5%;
}
tinybox {
  display: flex;
  flex-direction: row;
}
box1 {
display: flex;
flex-direction: column;
width: 100%;
margin-right: -10%;
}
h3 {
  color: #fbfbfc;
  font-size: 25px;
}
.routerlink{
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: #fbfbfc;
  margin-bottom: 5%;
}
box3 {
  width: 100%;
  margin-top: -1%;
  margin-right: -10%;
}
h5 {
  color: #fbfbfc;
  font-size: 25px;
}
box2 {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: -0.5%;
}
h4 {
  color: #fbfbfc;
  font-size: 25px;
}
smallbox {
  background-color: #293241;
  width: 80%;
  height: 20%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  border-radius: 5px;
}
p3 {
  color: #fbfbfc;
  padding-left: 5%;
  padding-top: 3%;
}
.icon{
  margin-left: 20%;
}
.page-break-line {
  width: 80%;
}
p4 {
  color: #fbfbfc;
  padding-left: 10%;
  padding-top: 1%;
  padding-bottom: 5%;
}

}
</style>
