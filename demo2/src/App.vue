<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <h1>
      <img class="header-image" src="../assets/headerimage.jpg">
    </h1>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/services">Services</RouterLink>
        <RouterLink to="/faq">Faq</RouterLink>
        <RouterLink to="/gallery">Gallery</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </nav>
      <div>
        <a href="https://www.nationalgeographic.com/" target="_blank">
          <v-icon name="bi-facebook" scale="2" fill="black" />
          </a>
        <a href="https://www.nationalgeographic.com/" target="_blank">
          <v-icon name="bi-linkedin" scale="2" fill="black"/>
          </a>
      </div>
      <p>(420) 696-6969</p>
  </header>
<RouterView/>
</template>

<style scoped>
header {
  height: 15vh;
  width: 100%;
  display: flex;
  flex: 1;
  flex-direction:row;
  justify-content: start;
  align-items: center;
  background-color: antiquewhite;
  position: fixed;
}


nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
