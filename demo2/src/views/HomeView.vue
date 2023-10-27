<template>
  <div class="home">
    <home-image>
      <img src="Main.jpg"/>
    </home-image>
    <home-container>
    <header-text>
      UNITED FAMILY
    </header-text>
    <sub-header-text>
      PERFECT PLACE FOR YOUR LOVED ONE
    </sub-header-text>
    <button-container>
      <but>
      <button>
        Contact Us Today
      </button>
      </but>
      <but2>
      <button>
        Learn More
      </button>
      </but2>
    </button-container>
  </home-container>
<div-line>

</div-line>
<contact>
  <con>
    Hello
  </con>
  <con>
    Goodbye
  </con>
</contact>
  </div>
</template>

<style scroped>
@media (min-width: 1024px) {
  .home {
    min-height: 120vh;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
  }
  contact{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: absolute;
    align-self: center;
    bottom: -40px;
    width:90%;
    height: 30px;

  }
  div-line{
    width: 90%;
    height:1px;
    background-color: white;
    opacity: .3;
    align-self: center;
    position: absolute;
    bottom: 15px;
  }
  home-container{
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: center;
    width: 600px;
    text-align: center;
  }
  header-text{
    font-size:100px;
    color: white;
    padding: 10px;
  }
  sub-header-text{
    font-size:20px;
    color:white;
    padding:10px;
  }
  button-container{
    display: flex;
    flex-direction: row;
    padding:20px;
  }
  button{
    width:100%;
    height: 100%;;
    border-radius: 10px;
    background-color:transparent;
    border-color: transparent;
    font-size:20px;
    color:white;

  }
  but{
    width:200px;
    height: 50px;
    border-radius: 10px;
    margin-right: 1%;
    background-color: #2c4d57;
  }
  but:hover{
    background-color: #968b57;
  }
  but2{
    width:200px;
    height: 50px;
    border-radius: 10px;
    background-color: #4c4845;
  }
  but2:hover{
    background-color: #726d6a;
  }
  home-image{
    width: 100%;
    height: 120%;
    position:fixed;
    z-index:-1;
    margin-top: 10%;
  }
  img{
    width: 100%;
    filter:  brightness(70%);
  }
}
</style>