<template>
  <div class="home">
    <home-image>
      <img src="stock6.jpg"/>
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
    <circ>
    <a href="https://www.nationalgeographic.com/" target="_blank">
    <v-icon hover animation="float" animationSpeed="slow" name="hi-mail" scale="2" fill="white"/>
  </a>
</circ>
    <mtext>
      hello@duckweedmarketing.com
    </mtext>
  </con>
  <con>
    <circ>
    <a href="https://www.nationalgeographic.com/" target="_blank">
    <v-icon hover animation="float" animationSpeed="slow" name="bi-telephone-fill" scale="2" fill="white"/>
    </a>
  </circ>
    <mtext>
      469-7347-7027
    </mtext>
  </con>
</contact>



<block1>

</block1>
<block2>

</block2>
<block3>

</block3>
<block4>

</block4>
<block5>

</block5>
<block6>

</block6>

  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
  mtext{
    color: white;
    font-size: 30px;
    margin-left: 10px;
  }
  circ{
    background-color: #2c4d57;
    width: 70px;
    height:70px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  con{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
    .home {
    min-height: 120vh;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    position: relative;
  }
  contact{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    position: absolute;
    align-self: center;
    bottom: 25px;
    width:90%;
    height: 200px;

  }
  div-line{
    width: 90%;
    height:1px;
    background-color: white;
    opacity: .3;
    align-self: center;
    position: absolute;
    bottom: 200px;
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
  block1{
    width:100%;
    height: 200px;
    background-color: beige;
  }
  block2{

  }
  block3{

  }
  block4{

  }
  block5{

  }
  block6{

  }
}
</style>