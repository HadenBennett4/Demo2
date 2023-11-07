<script setup>
function navigateToServices(){
  console.log("pushed")
    this.$router.push({ name:'services' })

}
</script>

<template>
      <home-image>
      <img src="stock6.jpg"/>
    </home-image>
  <div class="home">

    <home-container>
    <header-text>
      UNITED<br> FAMILY
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
  <block7>
    <div-line></div-line>
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
  </block7>




<block1>
  <block1-text-box>
    <block1-text>
      Why  choose us?
    </block1-text>
  </block1-text-box>

  <block1-paragraph-box>
   <div style="padding:2%;align-self: center;">United Family is guided by more than 30 years of experience and a continuous commitment to providing seniors with the care they deserve. We are pleased to serve the lovely city of Forney, Texas, and the surrounding areas with top-notch assisted living and short-term care services.</div> 
  </block1-paragraph-box>
</block1>
<block2>
  <block2-image>
    <img src="aboutimage.jpg">
  </block2-image>
  <block2-text-box>
   <div style="padding:15px;">
    Our team of professionals is dedicated to meeting the needs of our residents by using the skills and abilities that God has given them.

<br><br>United Family is an Assisted Living residency that offers a secure, friendly, and loving environment that feels like home. Our team of professionals who serve and support our residents is what sets us apart.

<br><br>Each team member is carefully selected and trained in our culture and beliefs. Customer service, dedication to dignity, and kindest towards our residents are the three main pillars of the system under which we work.
   </div>
  </block2-text-box>
</block2>
<block3>
  <block3-header>
    Our Services
  </block3-header>
  <block3-container>
    <RouterLink class="block3-button" to="/services">
      <v-icon hover animation="float" animationSpeed="slow" name="hi-mail" scale="3" />
      Assisted Living
    </RouterLink>
    <RouterLink class="block3-button" to="/services">
      <v-icon hover animation="float" animationSpeed="slow" name="hi-mail" scale="3" />
      Assisted Living
    </RouterLink>
    <RouterLink class="block3-button" to="/services">
      <v-icon hover animation="float" animationSpeed="slow" name="hi-mail" scale="3" />
      Assisted Living
    </RouterLink>

  </block3-container>
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
    align-items: center;
    justify-content: center;
    width: 100%;  
  }
  contact{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    align-self: center;
    bottom: 25px;
    width:90%;
    height: 200px;

  }
  div-line{
    width: 90%;
    height:1px;
    background-color: white;
    opacity: .5;
    align-self: center;
    bottom: 200px;
    margin-top:160px;
  }
  home-container{
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: left;
    width: 90%;
    text-align: left;
    margin-top:200px;
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
    position:fixed;
    z-index:-1;
  }
  img{
    width: 100%;
    filter:  brightness(70%);
  }
  block1{
    width:103%;
    height: 300px;
    background-color: rgb(241, 241, 241);


    display: flex;
    flex-direction:row;
    justify-content: center;
    align-items: center;
  }
  block2{
    width:103%;
    height: 800px;
    background-color:rgb(236, 227, 227);
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  }
  block2-image{
    width:33%;
  }
  block2-text-box{
    width: 35%;
    height: 75%;
    background-color: white;
    border-top-style: solid;
    border-right-style:solid;
    border-top-width:10px;
    border-right-width:10px;
    border-top-color:#2c4d57;
    border-right-color:#2c4d57;
    font-size:25px;
    color:#2c4d57;
    box-shadow: 0px 10px 10px 0px #888888;
    line-height: 140%;
    
  }
  block3{
    width: 103%;
    height:600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
  }
  block3-header{
    font-size:75px;
    color:#968b57;
    margin-bottom:20px;
  }
  block3-container{
    width: 90%;
    height: 40%;

    display: flex;
    flex-direction: row;
    justify-content: space-evenly ;
    align-items: center;
  }
  .block3-button{
    width:30%;
    height: 70%;

    border-style: solid;
    border-width:1px;
    border-color: #dfdfdf;
    border-opacity:.5;
    border-radius: 5%;

    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    padding: 15px;
    color:#968b57;
    font-size: 25px;
  }
  .block3-button:hover{
    background-color:#2c4d57;
    border-width:0px;
    color:white;
  }

  block4{

  }
  block5{

  }
  block6{

  }
  block7{
    display:flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    width: 90%;
  }
  block1-paragraph-box{
    width:48%;
    height:90%;
    background-color:rgb(235, 235, 235);
    font-size: 30px;
    color:#2c4d57;
  }
  block1-text-box{
    width:48%;
    height:90%; 
    display:flex;
    flex-direction: row;
    justify-content: start;
    align-items: start;
  }
  block1-text{
    font-size:60px;
    color:#968b57;
    margin-left:20px;
    margin-top:20px;
  }
}
</style>