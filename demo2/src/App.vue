<script setup lang="js">
import { RouterLink, RouterView } from 'vue-router'
import {ref,onMounted,onUnmounted} from 'vue'


const windowWidth = ref(window.innerWidth)
const windowHeight = ref(window.innerHeight)
const handleResize = () => {
  windowWidth.value = window.innerWidth
  windowHeight.value = window.innerHeight
}
onMounted(() => {
  window.addEventListener('resize', handleResize)
})
onUnmounted(() => {
  window.addEventListener('resize', handleResize)
})


function isMobile() {
  return windowWidth.value <=1024;
};


 const showNavBar = ref(false);
 const setShowNavBar = () => {
  showNavBar.value = !showNavBar.value;
  console.log(showNavBar.value)
 };
</script> 

<template>
  <root v-if="!isMobile()">
  <header>
      <img class="header-image" src="/duck.png">
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
          <v-icon name="bi-facebook" scale="2" fill="black" />
          </a>
        <a href="https://www.nationalgeographic.com/" target="_blank" class="icons">
          <v-icon name="bi-linkedin" scale="2" fill="black"/>
          </a>
        </boxy>
        <p>(469) 734-7027</p>

  </header>
<RouterView/>
<footer>
  <footer1>
  <box>
    <h2>DUCKWEED MARKETING</h2>
    <p2>PROVIDE PERFECT CARE FOR YOUR LOVED ONE</p2>
    <tinybox>
    <a href="https://www.nationalgeographic.com/" target="_blank" class="iconic">
          <v-icon name="bi-facebook" scale="1.5" fill="white"/>
          </a>
        <a href="https://www.nationalgeographic.com/" target="_blank" class="iconic">
          <v-icon name="bi-linkedin" scale="1.5" fill="white"/>
          </a>
      </tinybox>
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
   <p3>(469) 734- 7027</p3>
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



<root v-if="isMobile()">
  <div v-if="showNavBar===false">
    <header>
      <img class="header-image" src="../src/assets/headerimage.jpg">
          <v-icon class="nav-bar-button" @click="setShowNavBar()" name="bi-justify" scale="2" fill="black"/>
  </header>
  <RouterView/>
  <footer>
  <footer1>
  <box>
    <h2>DUCKWEED MARKETING</h2>
    <p2>PROVIDE PERFECT CARE FOR YOUR LOVED ONE</p2>
    <tinybox>
    <a href="https://www.nationalgeographic.com/" target="_blank" class="iconic">
          <v-icon name="bi-facebook" scale="1.5" fill="white"/>
          </a>
        <a href="https://www.nationalgeographic.com/" target="_blank" class="iconic">
          <v-icon name="bi-linkedin" scale="1.5" fill="white"/>
          </a>
      </tinybox>
  </box>
  <bigbox>
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
</bigbox>
  </footer1>
  <hr class="page-break-line">
  <p4 >Website produced and powered by Duckweed Marketing 2023</p4>
</footer>
  </div>
  <div v-if="showNavBar===true" class="nav-container">
    <nav>
        <RouterLink @click="setShowNavBar()" class="router-link" to="/">Home</RouterLink>
        <RouterLink @click="setShowNavBar()" class="router-link" to="/about">About</RouterLink>
        <RouterLink @click="setShowNavBar()" class="router-link" to="/services">Services</RouterLink>
        <RouterLink @click="setShowNavBar()" class="router-link" to="/faq">Faq</RouterLink>
        <RouterLink @click="setShowNavBar()" class="router-link" to="/gallery">Gallery</RouterLink>
        <RouterLink @click="setShowNavBar()" class="router-link" to="/contact">Contact</RouterLink>
        <div class="router-link" style="margin-top:20%
        ">Call us now:</div>
      <call-now-button>(469) 734-7027</call-now-button>
      </nav>
          <v-icon class="nav-bar-button2" @click="setShowNavBar()" name="bi-x-lg" scale="2" fill="white" />
    </div>
</root>
</template>

<style scoped>
/* desktop */
@media (min-width: 1025px) {
root{
  display: flex;
  flex-direction: column;
  margin:0;
}
header {
  height: 130px;
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
  width:100px;
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

/* Tablet */
@media (min-width: 480px) and (max-width:1024px) {
  root{
  width:100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
}
call-now-button{
  background-color: #968b57;
  color:#fbfbfc;
  border-radius:50px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding:1%;
  width:150px;
  height:30px;
  margin-top:15px;
}
header {
  height: 7%;
  width: 100%;
  top: 0;
  background-color: white;
  position: fixed;
  font-family: sans-serif;
  font-weight: bold;
  z-index:2;
}

nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: #293241;
}

.router-link {
  text-decoration: none;
  color: white;
  font-size: 20px;
  margin-top: 15px;
}

.router-link:hover {
  color:#968b57;
}

nav a.router-link-exact-active {
  color: #968b57;
}

.header-image {
  width:70px;
  height:auto;
  margin: 3%;
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
  width:500px;
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
  
}
footer1 {
  width: 90%;
  height: 50vh;
  align-items: center;
  justify-content: center;
}
box {
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;
}
h2 {
  width: 100%;
  color: #fbfbfc;
  font-size: 30px;
  font-weight: normal;
}
p2 {
  width: 100%;
  color:#fbfbfc;
  font-size: 10px;
  padding-bottom: 5%;
}
.iconic {
  margin-left: 5%;
}
tinybox {
  display: flex;
  flex-direction: row;
  margin-left: 40%;
  margin-bottom: -5%;
}
bigbox {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 20%;
}
box1 {
display: flex;
flex-direction: column;
width: 50%;
margin: 5%;
margin-left: 0px;
}
h3 {
  color: #fbfbfc; 
  font-size: 15px;
  margin-bottom: 5%;
  padding-top: 10px;
}
box3 {
  width: 50%;
}
h5 {
  color: #fbfbfc;
  font-size: 15px;
  margin-bottom: 5%;
}
.routerlink{
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: #fbfbfc;
  margin-bottom: 5%;
  font-size: 10px;
}
.page-break-line {
  width: 80%;
}
p4 {
  color: #fbfbfc;
  padding-top: 1%;
  padding-bottom: 5%;
  font-size: 10px;
}
.nav-bar-button2{
  position: absolute;
    right: 0;
    top: 0;
    margin-top: 2%;
    margin-right: 2%;
}
.nav-bar-button{
    position: absolute;
    right: 0;
    top: 0;
    margin-top: 2%;
    margin-right: 2%;

    
  }
  .nav-container{
    background-color: #293241;
    fill-opacity: .9;
    width:100%;
    height: 100vh;

  }
  nav {
    margin: 0;
    padding: 0;
  }
}

/*Mobile*/
@media (min-width:0px) and (max-width: 479px) {
root{
  width:100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
}
call-now-button{
  background-color: #968b57;
  color:#fbfbfc;
  border-radius:50px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding:1%;
  width:150px;
  height:30px;
  margin-top:15px;
}
header {
  height: 7%;
  width: 103%;
  top: 0;
  background-color: white;
  position: fixed;
  font-family: sans-serif;
  font-weight: bold;
  z-index:2;
}

nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: #293241;
}

.router-link {
  text-decoration: none;
  color: white;
  font-size: 20px;
  margin-top: 15px;
}

.router-link:hover {
  color:#968b57;
}

nav a.router-link-exact-active {
  color: #968b57;
}

.header-image {
  width:50px;
  height:auto;
  margin: 15px;
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
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #2c3d57;
  padding-top: 5%;
  position: relative;
  bottom: 0;
  margin-top: 10%;
  
}
footer1 {
  width: 100%;
  height: 50vh;
  align-items: center;
  justify-content: center;
  margin-left: -70px;
}
box {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 20%;
}
h2 {
  width: 100%;
  color: #fbfbfc;
  font-size: 30px;
  font-weight: normal;
}
p2 {
  width: 100%;
  color:#fbfbfc;
  font-size: 10px;
  padding-bottom: 5%;
}
.iconic {
  padding-right:5%;
}
tinybox {
  display: flex;
  flex-direction: row;
}
bigbox {
  display: flex;
  flex-direction: row;
}
box1 {
display: flex;
flex-direction: column;
width: 50%;
margin-left: 20%;
}
h3 {
  color: #fbfbfc; 
  font-size: 15px;
  margin-bottom: 5%;
  padding-top: 10px;
}
box3 {
  width: 50%;
}
h5 {
  color: #fbfbfc;
  font-size: 15px;
  margin-bottom: 5%;
}
.routerlink{
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: #fbfbfc;
  margin-bottom: 5%;
  font-size: 10px;
}
.page-break-line {
  width: 80%;
}
p4 {
  color: #fbfbfc;
  padding-top: 1%;
  padding-bottom: 5%;
  font-size: 10px;
}
.nav-bar-button2{
  position: absolute;
    right: 0;
    top: 0;
    margin-top: 2%;
    margin-right: 2%;
}
.nav-bar-button{
    position: absolute;
    right: 0;
    top: 0; 
    margin-right:35px;
    margin-top: 10px;
    
  }
  .nav-container{
    background-color: #293241;
    fill-opacity: .9;
    width:100%;
    height: 100vh;
  }
  nav {
    margin: 0;
    padding: 0;
  }

}
</style>
<style>
body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}
</style>