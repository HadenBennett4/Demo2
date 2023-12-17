<script setup>
import { ref, onMounted, onUnmounted } from 'vue'


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
  return windowWidth.value <= 1024;
};


</script>
<template>
  <div v-if="isMobile()">

    <div class="about">
      <about-image>
        <img src="/stock2.jpg" class="aboutimg" />
      </about-image>
      <container>
        <h1>About Us</h1>
        <p>Bring you care with over 30 years of experience</p>
      </container>
      <box>
          <v-icon name="bi-facebook" scale="2" fill="white" class="icons"/>
          <p1>Over 30 years of healthcare expirience</p1>
          <v-icon name="bi-linkedin" scale="2" fill="white" class="icons"/>
          <p1>Quality Care Services</p1>
          <v-icon name="bi-facebook" scale="2" fill="white" class="icons"/>
          <p1>Highly expirenced employees</p1>
      </box>
      <box1>
        <box-child>
        <h2>Our Mission Statement</h2>
        <underline></underline>
        <br>
        <p2> Working together to create a sense of community, our dedicated and compassionate staff will strive to exceed
          your expections. We aim to make a difference in the lives of those we serve by providing exceptional care and
          services, and remembering that you are the reason we are here.</p2>
      </box-child>
      </box1>

      <box2>
        <box-child1>
          <h3>Our Vision</h3>
          <underline2></underline2>
          <br>
          <p3>Our strategic vision is to create and sustain a leading high-quality service that allows individuals to live
            as independently as possible. <br><br>
            We personalize our services to meet your situation with respect, efficiency, and compassion, fostering
            independence, preserving dignity and improving the quality of life. </p3>
        </box-child1>
      </box2>
      <bigbox>
        <box3>
          <box-child2>
            <h4>Let us help you!</h4>
            <p4>Let us help give you the peace of mind you deserve.</p4>
          </box-child2>
          <RouterLink class="router-link" to="/contact">CONTACT US</RouterLink>
        </box3>
      </bigbox>
    </div>



  </div>
  <div v-if="!isMobile()">
    <div class="about">
      <about-image>
        <img src="/stock2.jpg" class="aboutimg" />
      </about-image>
      <container>
        <h1>About Us</h1>
        <p>Bring you care with over 30 years of experience</p>
      </container>
      <box>
          <v-icon name="bi-facebook" scale="3" fill="white" class="icons"/>
        <p1>Over 30 years of healthcare expirience</p1>
          <v-icon name="bi-linkedin" scale="3" fill="white" class="icons"/>
        <p1>Quality Care Services</p1>
          <v-icon name="bi-facebook" scale="3" fill="white" class="icons"/>
        <p1>Highly expirenced employees</p1>
      </box>
      <box1>
        <box-child>
          <h2>Our Mission Statement</h2>
          <underline></underline>
          <br>
          <p2> Working together to create a sense of community, our dedicated and compassionate staff will strive to
            exceed your expections. We aim to make a difference in the lives of those we serve by providing exceptional
            care and services, and remembering that you are the reason we are here.</p2>
        </box-child>
        <about-image1>
          <img src="/aboutimage.jpg" style="width: 550px;">
        </about-image1>
      </box1>
      <box2>
        <about-image2>
          <img src="/aboutimage1.jpg" style="width: 550px;" />
        </about-image2>
        <box-child1>
          <h3>Our Vision</h3>
          <underline2></underline2>
          <br>
          <p3>Our strategic vision is to create and sustain a leading high-quality service that allows individuals to live
            as independently as possible. <br><br>
            We personalize our services to meet your situation with respect, efficiency, and compassion, fostering
            independence, preserving dignity and improving the quality of life. </p3>
        </box-child1>
      </box2>
      <bigbox>
        <box3>
          <box3-child>
          <h4>Let us help you!</h4>
          <p4>Let us help give you the peace of mind you deserve.</p4>
        </box3-child>
          <RouterLink class="router-link" to="/contact">CONTACT US</RouterLink>
        </box3>
      </bigbox>
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 1025px) {
  .about {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 10%;
  }

  about-image {
    top: 0;
    width: 100%;
    position: fixed;
    z-index: -1;
  }

  .aboutimg {
    width: 100%;
    filter: brightness(70%);
  }
  box3-child {
    display: flex;
    flex-direction: column;
    margin-left: 15%;
    margin-bottom: 5%;
  }

  container {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 8%;
    color: white;
  }

  h1 {
    font-size: 50px;
  }

  p {
    font-size: 20px;
  }

  box {
    width: 65%;
    height: 100px;
    margin-top: 8%;
    background-color: #2c3d57;
    padding-top: 2%;
    padding-left: 4%;
    margin-bottom: -60px;
    z-index: 0;
    border-radius: 10px;
  }

  p1 {
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    margin: 2%;
    font-size: 20px;
    align-items: center;
  }

  box1 {
    width: 100.9%;
    background-color: #fbfbfc;
    padding-top: 8%;
    display: flex;
    flex-direction: row;
  }

  box-child {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-left: 12%;
    padding-right: 5%;
    margin-left: 5%;
  }

  h2

  /*misson statement*/
    {
    font-size: 40px;
    font-weight: normal;
    color: #2c3d57;
    margin-bottom: 1%;
  }

  p2 {
    font-size: 22px;
    color: #2c3d57;
    background-color: white;
    padding: 10%;
    padding-top: 15%;
    padding-bottom: 15%;
    border: 10px solid #2c3d57;
    border-bottom: none;
    border-left: none;
    box-shadow: 0px 10px 10px 0px #888888;
  }

  about-image1 {
    padding-right: 20%;
  }

  box2 {
    display: flex;
    flex-direction: row;
    background-color: #fbfbfc;
    width: 100.9%;
    padding-top: 8%;
  }

  box-child1 {
    display: flex;
    flex-direction: column;
    padding-left: 5%;
    padding-right: 15%;
    margin-right: 5%;
    padding-bottom: 10%;
  }

  h3 {
    font-size: 40px;
    font-weight: normal;
    color: #2c3d57;
    margin-bottom: 1%;
  }

  p3 {
    font-size: 22px;
    color: #2c3d57;
    background-color: white;
    padding: 10%;
    padding-top: 15%;
    padding-bottom: 15%;
    border: 10px solid #2c3d57;
    border-bottom: none;
    border-right: none;
    box-shadow: 5px 5px 10px#888888;
  }

  about-image2 {
    padding-left: 20%;
    padding-top: 8%;

  }

  bigbox {
    width: 100.9%;
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


  h4 {
    font-size: 40px;
    color: white;
  }

  p4 {
    font-size: 20px;
    color: white;
  }

  .router-link {
    margin-top: 10%;
    margin-left: 10%;
    text-decoration: none;
    background-color: #2c3d57;
    margin-bottom: auto;
    color: white;
    font-size: 20px;
    align-items: center;
    padding-top: 20px;
    padding-left: 40px;
    padding-bottom: 20px;
    padding-right: 40px;
    border-radius: 15px;
  }

  underline {
    width: 20%;
    border: 5px solid #000;
    border-bottom: none;
    border-left: none;
    border-right: none;
    color: #fbfbfc;
  }

  underline2 {
    width: 15%;
    border: 5px solid #000;
    border-bottom: none;
    border-left: none;
    border-right: none;
    color: #fbfbfc;

  }
}
/* Tablet */
@media (min-width:480px) and (max-width: 1024px) {
  .about {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 10%;
  }

  about-image {
    top: 0;
    width: 100%;
    position: fixed;
    z-index: -1;
  }

  .aboutimg {
    width: 100%;
    filter: brightness(70%);
  }
  box3-child {
    display: flex;
    flex-direction: column;
    margin-left: 15%;
    margin-bottom: 5%;
  }

  container {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 8%;
    color: white;
  }

  h1 {
    font-size: 50px;
  }

  p {
    font-size: 20px;
  }

  box {
    width: 65%;
    height: 140px;
    margin-top: 8%;
    background-color: #2c3d57;
    padding-top: 2%;
    padding-left: 4%;
    margin-bottom: -70px;
    z-index: 0;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
  }

  p1 {
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    align-items: center;
    margin-left: 15%;
    margin-top: -7%;
    margin-bottom: 4%;
  }

  box1 {
    width: 100.9%;
    background-color: #fbfbfc;
    padding-top: 8%;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  box-child {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-left: 12%;
    padding-right: 12%;
  }

  h2 {
    font-size: 40px;
    font-weight: normal;
    color: #2c3d57;
    margin-bottom: 1%;
  }

  p2 {
    font-size: 22px;
    color: #2c3d57;
    background-color: white;
    padding: 10%;
    padding-top: 15%;
    padding-bottom: 15%;
    border: 10px solid #2c3d57;
    border-bottom: none;
    border-left: none;
    box-shadow: 0px 10px 10px 0px #888888;
  }

  about-image1 {
    padding-right: 20%;
  }

  box2 {
    background-color: #fbfbfc;
    width: 100.9%;
    padding-top: 8%;
    margin-top: -1px;
  }

  box-child1 {
    display: flex;
    flex-direction: column;
    padding-left: 12%;
    padding-right: 12%;
    padding-bottom: 10%;
  }

  h3 {
    font-size: 40px;
    font-weight: normal;
    color: #2c3d57;
    margin-bottom: 1%;
  }

  p3 {
    font-size: 22px;
    color: #2c3d57;
    background-color: white;
    padding: 10%;
    padding-top: 15%;
    padding-bottom: 15%;
    border: 10px solid #2c3d57;
    border-bottom: none;
    border-right: none;
    box-shadow: 5px 5px 10px#888888;
  }

  about-image2 {
    padding-left: 20%;
    padding-top: 8%;

  }

  bigbox {
    width: 100.9%;
    background-color: #fbfbfc;
    height: auto;
    margin-top: -1px;
  }

  box3 {
    width: 75%;
    background-color: #968b57;
    display: flex;
    flex-direction: row;
    height: 100%;
    margin-bottom: 8%;
    margin-left: 8%;
    border-radius: 15px;
    padding: 5%;
    margin-top: 8%;
  }


  h4 {
    font-size: 30px;
    color: white;
  }

  p4 {
    font-size: 20px;
    color: white;
  }

  .router-link {
    margin-top: 10%;
    margin-left: 10%;
    text-decoration: none;
    background-color: #2c3d57;
    margin-bottom: auto;
    color: white;
    font-size: 20px;
    align-items: center;
    padding-top: 20px;
    padding-left: 40px;
    padding-bottom: 20px;
    padding-right: 40px;
    border-radius: 15px;
  }

  underline {
    width: 20%;
    border: 5px solid #000;
    border-bottom: none;
    border-left: none;
    border-right: none;
    color: #fbfbfc;
  }

  underline2 {
    width: 15%;
    border: 5px solid #000;
    border-bottom: none;
    border-left: none;
    border-right: none;
    color: #fbfbfc;

  }
}
/* Mobile */
@media (min-width:0px) and (max-width: 479px) {
  .about {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin: 0;
    padding: 0;
  }

  about-image {
    top: 0;
    width: 100%;
    position: fixed;
    z-index: -1;
    margin-top: 8%;
  }

  .aboutimg {
    width: 100%;
    filter: brightness(70%);
  }

  container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    line-height: 90%;
    color: white;
    margin-top:10%;
    padding: 5%;
  }

  h1 {
    font-size: 50px;
  }

  p {
    font-size: 20px;
  }

  box {
    width: 65%;
    height: 250px;
    margin-top: 5%;
    background-color: #2c3d57;
    padding: 5%;
    z-index: 0;
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: left;
  }

  p1 {
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    margin: 2%;
    font-size: 15px;
    align-items: center;
  }

  box1 {
    width: 100%;
    background-color: #fbfbfc;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  box-child {
    width:90%;

    display: flex;
    flex-direction: column;
    background-color: #fbfbfc;
  }

  h2/*misson statement*/
    {
    font-size: 40px;
    font-weight: normal;
    color: #2c3d57;
    margin-bottom: 1%;
  }

  p2 {
    font-size: 22px;
    color: #2c3d57;
    background-color: white;
    padding: 10%;
    padding-top: 15%;
    padding-bottom: 15%;
    border: 10px solid #2c3d57;
    border-bottom: none;
    border-left: none;
    box-shadow: 0px 10px 10px 0px #888888;
  }

  about-image1 {
    padding-right: 20%;
    width: 30px;
  }

  box2 {
    width: 100%;
    background-color: #fbfbfc;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  box-child1 {
    width:90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
  }

  h3 {
    font-size: 40px;
    font-weight: normal;
    color: #2c3d57;
    margin-bottom: 1%;
  }

  p3 {
    font-size: 22px;
    color: #2c3d57;
    background-color: white;
    padding: 10%;
    padding-top: 15%;
    padding-bottom: 15%;
    border: 10px solid #2c3d57;
    border-bottom: none;
    border-right: none;
    box-shadow: 5px 5px 10px#888888;
  }

  about-image2 {
    padding-left: 20%;
    padding-top: 8%;

  }

  bigbox {
    width: 105%;
    background-color: #fbfbfc;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;  
  }

  box3 {
    width: 65%;
    background-color: #968b57;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin-bottom: 8%;
    margin-top: 8%;
    border-radius: 15px;
    text-align: center;
  }

  box-child2 {
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

  .router-link {
    margin-top: 10%;
    text-decoration: none;
    background-color: #2c3d57;
    margin-bottom: auto;
    color: white;
    font-size: 20px;
    align-items: center;
    padding: 4%;
    border-radius: 10%;
    margin-bottom: 5%;
  }

  underline {
    width: 20%;
    border: 5px solid #000;
    border-bottom: none;
    border-left: none;
    border-right: none;
    color: #fbfbfc;
  }

  underline2 {
    width: 15%;
    border: 5px solid #000;
    border-bottom: none;
    border-left: none;
    border-right: none;
    color: #fbfbfc;
  }

  a {
    text-decoration: none;
  }
}</style>