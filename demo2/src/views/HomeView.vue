<script setup>
function navigateToServices(){
  console.log("pushed")
    this.$router.push({ name:'services' })

}
</script>

<template>
      <home-image>
      <img class="homeimg" src="/stock6.jpg"/>
    </home-image>
  <div class="home">

    <home-container>
    <header-text>
      DUCKWEED<br> MARKETING
    </header-text>
    <sub-header-text>
      PERFECT PLACE FOR YOUR LOVED ONE
    </sub-header-text>
    <button-container>
      <but>
        <RouterLink class="button" to="/about">
      Contact Us
    </RouterLink>
      </but>
      <but2>
      <RouterLink class="button" to="/about">
      Learn More
    </RouterLink>
      </but2>
    </button-container>
  </home-container>
  <block7>
    <div-line></div-line>
<contact>
  <con>
    <circ>
    <a href="https://www.nationalgeographic.com/" target="_blank">
    <v-icon hover animation="float" animationSpeed="slow" name="hi-mail" scale="2" fill="white" class="i-con"/>
  </a>
</circ>
    <mtext>
      hello@duckweedmarketing.com
    </mtext>
  </con>
  <con>
    <circ>
    <a href="https://www.nationalgeographic.com/" target="_blank">
    <v-icon hover animation="float" animationSpeed="slow" name="bi-telephone-fill" scale="2" fill="white" class="i-con"/>
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
    <underline2></underline2>
  </block1-text-box>
  <block1-paragraph-box>
   <div style="padding:2%;align-self: center;">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero voluptas, repellendus odio dignissimos aut placeat? Eum tenetur maiores nostrum nobis.</div> 
  </block1-paragraph-box>
</block1>
<block2>
  <block2-image>
    <img src="/aboutimage.jpg" class="homeimg1">
  </block2-image>
  <block2-text-box>
   <div style="padding:15px;">
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto maiores autem iure accusamus atque adipisci libero, tempore commodi veritatis labore.

<br><br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, vero rem! Rerum odit necessitatibus distinctio hic, maxime beatae numquam quas expedita nisi adipisci reprehenderit sed, dignissimos, ea doloremque at cumque!

<br><br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eius autem perspiciatis culpa praesentium debitis, illo quis deleniti neque quasi nam quos enim iure quaerat ullam voluptates laudantium non tempora.
   </div>
  </block2-text-box>
</block2>
<block3>
  <block3-header>
    Our Services
  </block3-header>
  <block3-container>
    <RouterLink class="block3-button" to="/services">
      <v-icon hover animation="float" animationSpeed="slow" name="hi-mail" scale="3" class="ic-on" />
      Assisted Living
    </RouterLink>
    <RouterLink class="block3-button" to="/services">
      <v-icon hover animation="float" animationSpeed="slow" name="hi-mail" scale="3" class="ic-on"/>
      Respite Care
    </RouterLink>
    <RouterLink class="block3-button" to="/services">
      <v-icon hover animation="float" animationSpeed="slow" name="hi-mail" scale="3" class="ic-on"/>
      Independent Caregivers
    </RouterLink>
  </block3-container>
</block3>
<block4>
<block4-header>We believe and operate our agency with...</block4-header>
<underline>bbbbbbbbb</underline>
<block4-container>
<block4-containerbaby>
<block4-bheader>Excellence</block4-bheader>
<br>
<br>
<block4-p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod veniam aliquid omnis consequuntur similique beatae voluptatum alias pariatur a iusto.</block4-p>
<br>
<br>
<br>
<br>
<block4-bheader>Integrity</block4-bheader>
<br>
<br>
<block4-p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti beatae iure cumque officiis temporibus necessitatibus reprehenderit voluptate voluptates. Quidem, consequatur.</block4-p>
<br>
<br>
<br>
<br>
<block4-bheader>Service</block4-bheader>
<br>
<br>
<block4-p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error ullam quibusdam velit laudantium explicabo neque! Accusamus, quia accusantium.</block4-p>
</block4-containerbaby>
<block4-containerbaby>
<block4-bheader>Flexibility</block4-bheader>
<br>
<br>
<block4-p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde molestiae natus atque consectetur numquam.</block4-p>
<br>
<br>
<br>
<br>
<block4-bheader>Responsiveness</block4-bheader>
<br>
<br>
<block4-p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur atque quis beatae voluptate molestiae.</block4-p>
</block4-containerbaby>
</block4-container>
</block4>

<block5>
<block5-container>
  <block5-header>Know More About Duckweed</block5-header>
  <RouterLink class="router-link" to="/gallery">Explore Our Full Gallery!</RouterLink>
  <photo-container>
        <photo-box>
          <img src="/Gallert.jpg" class="imgimg" >
        </photo-box>
        <photo-box>
          <img src="/Gallert.jpg" class="imgimg">
        </photo-box>
      </photo-container>
      <photo-container>
        <photo-box>
          <img src="/Gallert.jpg" class="imgimg">
        </photo-box>
        <photo-box>
          <img src="/Gallert.jpg" class="imgimg">
        </photo-box>
      </photo-container>
</block5-container>
</block5>
<bigbox>
    <box3>
      <box-child2>
      <h4>Contact Us Today</h4>
      <p4>Reach out to us so we can provide you with the exceptional care that you deserve!</p4>
    </box-child2>
      <RouterLink class="routerlink" to="/contact">Get in Touch</RouterLink>
    </box3>
</bigbox>

  </div>
</template>

<style scoped>
@media (min-width: 1025px) {
  mtext{
    color: white;
    font-size: 30px;
    margin-left: 10px;
  }
  circ{
    background-color: #2c3d57;
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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;  
    padding-top: 10%;
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
    margin-top:100px;
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
  .button{
    width:100%;
    height: 100%;
    border-radius: 10px;
    background-color:transparent;
    border-color: transparent;
    font-size: 20px;
    color:white;
    text-decoration: none;
    margin-left: 50px;
  }
  but{
    width:200px;
    height: 40px;
    padding-top: 15px;
    border-radius: 10px;
    margin-right: 1%;
    background-color: #2c3d57;
  }
  but:hover{
    background-color: #968b57;
  }
  but2{
    width:200px;
    height: 40px;
    padding-top: 15px;
    border-radius: 10px;
    background-color: #4c4845;
  }
  but2:hover{
    background-color: #726d6a;
  }
  home-image{
    top:0;
    width: 100%;
    position:fixed;
    z-index:-1;
    margin-left: -10px;
  }
  img{
    width: 100%;
    filter:  brightness(70%);
  }
  block1{
    width:100.98%;
    height: 300px;
    background-color: #e7e9ef;


    display: flex;
    flex-direction:row;
    justify-content: center;
    align-items: center;
  }
  block2{
    width:100.98%;
    height: 800px;
    background-color:#fbfbfc;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    padding-top: 2%;
  }
  block2-image{
    width:33%;
    margin-left: 5%;
  }
  block2-text-box{
    width: 30%;
    padding: 1%;
    background-color: white;
    border-top-style: solid;
    border-right-style:solid;
    border-top-width:10px;
    border-right-width:10px;
    border-top-color:#2c3d57;
    border-right-color:#2c3d57;
    font-size:18px;
    color:#2c3d57;
    box-shadow: -5px 10px 10px #888888;
    line-height: 155%;
    
  }
  block3{
    width: 100.98%;
    height:600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fbfbfc;
  }
  block3-header{
    font-size:75px;
    color:#968b57;
    margin-bottom:20px;
  }
  block3-container{
    width: 75%;
    height: 40%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly ;
    align-items: center;
  }
  .block3-button{
    width:25%;
    height: 70%;
    border-style: solid;
    border-width:1px;
    border-color: #dfdfdf;
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
    background-color:#2c3d57;
    border-width:0px;
    color:white;
  }

  block4{
    background-color: #fbfbfc;
    display: flex;
    flex-direction: column;
    width: 100.98%;
    align-items: center;
  }
  block4-header {
    font-size: 40px;
    color: #2c3d57;
  }
  underline {
    color: #fbfbfc;
    border: 5px solid #000;
    border-bottom: none;
    border-left: none;
    border-right: none;
  }
  block4-container {
    justify-content: center;
    width: 75%;
    display: flex;
    flex-direction: row;
  }
  block4-containerbaby{
    width: 50%;
    margin: 5%;
  }
  block4-bheader{
    font-size: 25px;
    color:#968b57;
    font-weight: bold;
  }
  block4-p {
    font-size: 20px;
    color: #475671;
  }
  block5{
    background-color: #fbfbfc;
    display: flex;
    flex-direction: column;
    width: 100.98%;
    justify-content: center;
    align-items: center;
    padding-bottom: 5%;
  }
  block5-container {
    width:75%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    padding-bottom: 2%;
    padding-top: 5%;
  }

  block5-header {
    font-size: 35px;
    color:#2c3d57;
  }
  .router-link {
    background-color: #2c3d57;
    text-decoration: none;
    color: white;
    padding: 1%;
    margin-bottom: 5%;
    margin-top: 3%;
  }
  photo-container {
    display: flex;
    flex-direction: row;
  }
  photo-box {
    padding: 1%;
  }
  bigbox {
  width: 100.98%;
  background-color: #fbfbfc;
  height: auto;
}

box3 {
  width: 65%;
  background-color: #968b57;
  display: flex;
  flex-direction: row;
  height: 100%;
  margin-bottom: 8%;
  margin-top: 8%;
  margin-left: 20%;
  border-radius: 15px;
}

box-child2 {
  padding-left: 13%;
  display: flex;
  flex-direction: column;
  color: white;
  padding-bottom: 5%;
}

h4 {
  font-size: 40px;
}

p4 {
  font-size: 20px;
}

.routerlink{
  margin-top: 10%;
  margin-left: 7%;
  text-decoration: none;
  background-color: #2c3d57;
  margin-bottom: auto;
  color: white;
  font-size: 20px;
  align-items: center;
  padding-top: 15px;
  padding-left: 30px;
  padding-bottom: 15px;
  padding-right: 30px;
  border-radius: 15px;
}
  block7{
    display:flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    width: 90%;
    
  }
  block1-paragraph-box{
    width:40%;
    height:90%;
    font-size: 20px;
    color:#2c3d57;
    padding-top: 3%;
    line-height: 2;
    padding-right:5%;
  }
  block1-text-box{
    width:48%;
    height:90%; 
    display:flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
  }
  underline2 {
    border: 5px solid #000;
    width: 20%;
    border-bottom: none;
    margin-left: 5%;
    margin-top: 1%;
  }
  block1-text{
    font-size:60px;
    color:#968b57;
    margin-left:20px;
    margin-top:20px;
  }
}
/*Tablet*/
@media  (min-width:480px) and (max-width: 1024px) {
  mtext{
    color: white;
    font-size: 18px;
    margin-left: 10px;
  }
  .i-con {
    scale: 0.7;
  }
  circ{
    background-color: #2c3d57;
    width: 50px;
    height:50px;
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
    margin-top: 8%;
  }
  contact{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    align-self: center;
    bottom: 25px;
    width:90%;
    height: 100px;

  }
  div-line{
    width: 90%;
    height:1px;
    background-color: white;
    opacity: .5;
    align-self: center;
    bottom: 200px;
    margin-top:25px;
  }
  home-container{
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: left;
    width: 90%;
    text-align: left;
    margin-top:55px;
  }
  header-text{
    font-size:40px;
    color: white;
    padding: 10px;
  }
  sub-header-text{
    font-size:15px;
    color:white;
    padding:10px;
  }
  button-container{
    display: flex;
    flex-direction: row;
    padding:10px;
  }
  .button{
    width:100%;
    height: 100%;
    border-radius: 10px;
    background-color:transparent;
    border-color: transparent;
    font-size: 15px;
    color:white;
    text-decoration: none;
    margin-left: 30px;
  }
  but{
    width:130px;
    height: 30px;
    border-radius: 10px;
    margin-right: 2%;
    background-color: #2c3d57;
  }
  but:hover{
    background-color: #968b57;
  }
  but2{
    width:130px;
    height: 30px;
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
    width:100.98%;
    height: 301px;
    background-color: #e7e9ef;
    display: flex;
    flex-direction:row;
    justify-content: center;
    align-items: center;
    margin-top: -2%;
  }
  block2{
    width:100.98%;
    height: 801px;
    background-color:#fbfbfc;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding-top: 2%;
  }
  block2-image{
    width:33%;
    margin-left: 5%;
  }
  block2-text-box{
    width: 70%;
    padding: 1%;
    background-color: white;
    border-top-style: solid;
    border-right-style:solid;
    border-top-width:10px;
    border-right-width:10px;
    border-top-color:#2c3d57;
    border-right-color:#2c3d57;
    font-size:18px;
    color:#2c3d57;
    box-shadow: -5px 10px 10px #888888;
    line-height: 155%;
    
  }
  block3{
    width: 100.98%;
    height:600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fbfbfc;
  }
  block3-header{
    font-size:75px;
    color:#968b57;
    margin-bottom:20px;
  }
  block3-container{
    width: 75%;
    height: 40%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly ;
    align-items: center;
  }
  .block3-button{
    width:25%;
    height: 70%;
    border-style: solid;
    border-width:1px;
    border-color: #dfdfdf;
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
    background-color:#2c3d57;
    border-width:0px;
    color:white;
  }

  block4{
    background-color: #fbfbfc;
    display: flex;
    flex-direction: column;
    width: 100.98%;
    align-items: center;
    margin-top: -2px;
  }
  block4-header {
    font-size: 40px;
    color: #2c3d57;
    margin-left: 7%;
  }
  underline {
    color: #fbfbfc;
    border: 5px solid #000;
    border-bottom: none;
    border-left: none;
    border-right: none;
  }
  block4-container {
    justify-content: center;
    width: 75%;
    display: flex;
    flex-direction: row;
  }
  block4-containerbaby{
    width: 50%;
    margin: 5%;
  }
  block4-bheader{
    font-size: 25px;
    color:#968b57;
    font-weight: bold;
  }
  block4-p {
    font-size: 20px;
    color: #475671;
  }
  block5{
    background-color: #fbfbfc;
    display: flex;
    flex-direction: column;
    width: 100.98%;
    justify-content: center;
    align-items: center;
    padding-bottom: 5%;
  }
  block5-container {
    width:75%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    padding-bottom: 2%;
    padding-top: 5%;
  }

  block5-header {
    font-size: 35px;
    color:#2c3d57;
  }
  .router-link {
    background-color: #2c3d57;
    text-decoration: none;
    color: white;
    padding: 1%;
    margin-bottom: 5%;
    margin-top: 3%;
  }
  photo-container {
    display: flex;
    flex-direction: row;
  }
  photo-box {
    padding: 1%;
  }
  bigbox {
  width: 100.98%;
  background-color: #fbfbfc;
  height: auto;
  margin-top: -1%;
}

box3 {
  width: 65%;
  background-color: #968b57;
  display: flex;
  flex-direction: row;
  height: 100%;
  margin-bottom: 8%;
  margin-top: 8%;
  margin-left: 20%;
  border-radius: 15px;
}

box-child2 {
  padding-left: 13%;
  display: flex;
  flex-direction: column;
  color: white;
  padding-bottom: 5%;
}

h4 {
  font-size: 30px;
}

p4 {
  font-size: 15px;
}

.routerlink{
  margin-top: 10%;
  margin-right: 5%;
  text-decoration: none;
  background-color: #2c3d57;
  margin-bottom: auto;
  color: white;
  font-size: 15px;
  align-items: center;
  padding-top: 10px;
  padding-left: 25px;
  padding-bottom: 10px;
  padding-right: 25px;
  border-radius: 15px;
}
  block7{
    display:flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    width: 90%;
    
  }
  block1-paragraph-box{
    width:40%;
    height:90%;
    font-size: 17px;
    color:#2c3d57;
    padding-top: 3%;
    line-height: 2;
    padding-right:5%;
  }
  block1-text-box{
    width:48%;
    height:90%; 
    display:flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
  }
  underline2 {
    border: 5px solid #000;
    width: 20%;
    border-bottom: none;
    margin-left: 5%;
    margin-top: 1%;
  }
  block1-text{
    font-size:60px;
    color:#968b57;
    margin-left:20px;
    margin-top:20px;
  }
}
/*Mobile*/
@media  (min-width:0px) and (max-width: 479px) {
  mtext{
    color: white;
    font-size: 10px;
    margin-left: 10px;
  }
  .i-con{
    scale: 0.5;
  }
  circ{
    background-color: #2c3d57;
    width: 30px;
    height:30px;
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
    margin-top: -8%;
  }
    .home {
    width: 101%;  
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 5%;
  }
  contact{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    align-self: center;
    width:90%;
    height: 100px;
    margin-top: -10px;
  }
  div-line{
    width: 90%;
    height:0.5px;
    background-color: white;
    opacity: .5;
    align-self: center;
    margin-top: 5px;
  }
  home-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    text-align: center;
    margin-top: 50px;
  }
  header-text{
    font-size:25px;
    color: white;
    padding: 5px;
  }
  sub-header-text{
    font-size:10px;
    color:white;
    padding:5px;
  }
  button-container{
    display: flex;
    flex-direction: row;
    padding:5px;
  }
  .button{
    width:100%;
    height: 100%;
    border-radius: 10px;
    background-color:transparent;
    border-color: transparent;
    font-size: 10px;
    color:white;
    text-decoration: none;
    margin-left: 0px;
  }
  but{
    width:75px;
    height: 20px;
    border-radius: 10px;
    margin-right: 1%;
    background-color: #2c3d57;
  }
  but:hover{
    background-color: #968b57;
  }
  but2{
    width:75px;
    height: 20px;
    border-radius: 10px;
    background-color: #4c4845;
  }
  but2:hover{
    background-color: #726d6a;
  }
  home-image{
    position:fixed;
    z-index:-1;
  }
  .homeimg{
    width: 100%;
    filter:  brightness(70%);
    height: 300px;
  }
  block1{
    width:100%;
    height: 200px;
    background-color: #e7e9ef;
    display: flex;
    flex-direction:row;
    justify-content: center;
    align-items: center;
    margin-top: -42px;
  }
  block2{
    width:100.98%;
    height: 700px;
    background-color:#fbfbfc;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding-top: 2%;
  }
  .homeimg1 {
    width: 200px;
  }
  block2-text-box{
    width: 65%;
    padding: 1%;
    background-color: white;
    border-top-style: solid;
    border-right-style:solid;
    border-top-width:10px;
    border-right-width:10px;
    border-top-color:#2c3d57;
    border-right-color:#2c3d57;
    font-size:13px;
    color:#2c3d57;
    box-shadow: -5px 10px 10px #888888;
    line-height: 155%;
    
  }
  block3{
    width: 100.98%;
    height:300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fbfbfc;
    margin-top: -1%;
  }
  block3-header{
    font-size:30px;
    color:#968b57;
  }
  block3-container{
    width: 75%;
    height: 40%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly ;
    align-items: center;
  }
  .block3-button{
    width:25%;
    height: 50%;
    border-style: solid;
    border-width:1px;
    border-color: #dfdfdf;
    border-radius: 5%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    padding: 15px;
    color:#968b57;
    font-size: 10px;
  }
  .block3-button:hover{
    background-color:#2c3d57;
    border-width:0px;
    color:white;
  }
  .ic-on {
    scale: 1;
  }

  block4{
    background-color: #fbfbfc;
    display: flex;
    flex-direction: column;
    width: 100.98%;
    align-items: center;
    margin-top: -1px;
  }
  block4-header {
    font-size: 23px;
    color: #2c3d57;
  }
  underline {
    color: #fbfbfc;
    border: 1px solid #000;
    border-bottom: none;
    border-left: none;
    border-right: none;
  }
  block4-container {
    justify-content: center;
    align-items: center;
    width: 75%;
    display: flex;
    flex-direction: column;
  }
  block4-containerbaby{
    width: 65%;
    margin: 5%;
  }
  block4-bheader{
    font-size: 20px;
    color:#968b57;
    font-weight: bold;
  }
  block4-p {
    font-size: 15px;
    color: #475671;
  }
  block5{
    background-color: #fbfbfc;
    display: flex;
    flex-direction: column;
    width: 100.98%;
    justify-content: center;
    align-items: center;
    padding-bottom: 5%;
    margin-top: -1px;
  }
  block5-container {
    width:75%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 2%;
    padding-top: 5%;
    background-color: #fbfbfc;
  }

  block5-header {
    font-size: 25px;
    color:#2c3d57;
  }

  photo-container {
    display: flex;
    flex-direction: row;
  }
  photo-box {
    padding: 1%;
  }
  bigbox {
  width: 100%;
  background-color: #fbfbfc;
  height: auto;
}
  .router-link {
    background-color: #2c3d57;
    text-decoration: none;
    color: white;
    padding: 1%;
    margin-bottom: 5%;
    margin-top: 3%;
  }
box3 {
  width: 80%;
  align-items: center;
  background-color: #968b57;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  margin-left: 10%;
}

box-child2 {
  padding: 10%;
  display: flex;
  flex-direction: column;
  color: white;
  padding-bottom: 10%;
}

h4 {
  font-size: 30px;
}

p4 {
  font-size: 15px;
}

.routerlink{
  margin-top: 10%;
  margin-right: 5%;
  text-decoration: none;
  background-color: #2c3d57;
  margin-bottom: 15px;
  color: white;
  font-size: 15px;
  align-items: center;
  padding-top: 10px;
  padding-left: 25px;
  padding-bottom: 10px;
  padding-right: 25px;
  border-radius: 15px;
}
  block7{
    display:flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    width: 90%;
    
  }
  block1-paragraph-box{
    width:40%;
    height:90%;
    font-size: 10px;
    color:#2c3d57;
    padding-top: 3%;
    line-height: 2;
    padding-right:5%;
  }
  block1-text-box{
    width:48%;
    height:90%; 
    display:flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
  }
  underline2 {
    border: 2px solid #000;
    width: 20%;
    border-bottom: none;
    margin-left: 10%;
    margin-top: 1%;
  }
  block1-text{
    font-size:25px;
    color:#968b57;
    margin-left:20px;
    margin-top:20px;
  }
  .imgimg {
    width: 175px;
  }
}
</style>