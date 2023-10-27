<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <h1>
      <img class="header-image" src="../src/assets/headerimage.jpg">
    </h1>
      <nav>
        <RouterLink class="router-link" to="/">Home</RouterLink>
        <RouterLink class="router-link" to="/about">About</RouterLink>
        <RouterLink class="router-link" to="/services">Services</RouterLink>
        <RouterLink class="router-link" to="/faq">Faq</RouterLink>
        <RouterLink class="router-link" to="/gallery">Gallery</RouterLink>
        <RouterLink class="router-link" to="/contact">Contact</RouterLink>
      </nav>
        <a href="https://www.nationalgeographic.com/" target="_blank" class="icons">
          <v-icon name="bi-facebook" scale="1" fill="black" />
          </a>
        <a href="https://www.nationalgeographic.com/" target="_blank" class="icons">
          <v-icon name="bi-linkedin" scale="1" fill="black"/>
          </a>
      <p>(420)696-6969</p>
  </header>
<RouterView/>
</template>

<style scoped>
header {
  height: 12vh;
  width: 110%;
  display: flex;
  flex-direction:row;
  justify-content: center;
  align-items: center;
  background-color: white;
  position: fixed;
  font-family: sans-serif;
  font-weight: bold;
  z-index:1;
}

nav {
  align-items: right;
  justify-content: right;
  display: flex;
  margin-left: 10%;
}

.router-link {
  margin-right: 15%;
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
  width:25%;
  height:auto;
  margin-left: 20%;
  margin-top: 1%;
}

p {
  width: 100%;
  font-size: 20px;
  display: flex;
}
.icons {
  display: flex;
  flex-direction: row;
  margin:0.3%;
}


</style>
