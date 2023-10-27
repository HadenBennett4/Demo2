<template>
  <div class="home">
    <home-image>
      <img src="Main.jpg"/>
    </home-image>
    <header-text>

    </header-text>
    <sup-header-text>

    </sup-header-text>
    <button-container>
      <button>
        Contact us Today
      </button>
      <button>
        Learn More 
      </button>
    </button-container>
  </div>
</template>

<style scroped>
@media (min-width: 1024px) {
  .home {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
  home-image{
    width: 100%;
    height: 100%;
    position:fixed;
    z-index:-1;
  }
  img{
    width: 100%;
  }
}
</style>