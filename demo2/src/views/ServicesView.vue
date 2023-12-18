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
  <div class="Services" v-if="!isMobile()">
    <about-image>
      <img src="/stock3.jpg" class="aboutimg" />
    </about-image>
    <container>
      <h1>We provide the best services!</h1>
      <p>Lorem ipsum dolor sit amet.</p>
    </container>
    <box1>
      <box-child>
        <h2>Assisted Living</h2>
        <p2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore distinctio iure perferendis dolorem vel. Voluptatem hic qui consequatur aspernatur, et vel impedit iste mollitia rerum?</p2>
        <h6>Assisted Living Services:</h6>
        <ul class="checklist">
          <li>Lorem, ipsum.</li>
          <li>Lorem.</li>
          <li>Lorem ipsum dolor sit.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem, ipsum dolor.</li>
          <li>Lorem, ipsum.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem, ipsum dolor.</li>
          <li>Lorem</li>
          <li>Lorem, ipsum dolor.</li>
        </ul>
      </box-child>
      <about-image1>
        <img src="/serviceimage.jpg" style="width: 550px;">
      </about-image1>
    </box1>
    <box2>
      <about-image2>
        <img src="/serviceimage2.jpg" style="width: 550px;" />
      </about-image2>
      <box-child1>
        <h3>Respite Care</h3>
        <p3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, exercitationem tenetur quibusdam aut veniam, quisquam nesciunt quos corrupti modi, esse nihil accusantium impedit praesentium! Deserunt quod autem facilis molestias nihil. </p3>
        <h7>Respite Care Services:</h7>
        <ul class="checklist">
          <li>Lorem ipsum dolor sit.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem, ipsum dolor.</li>
        </ul>
      </box-child1>
    </box2>
    <box4>
      <box-child3>
        <h5>Independant Caregivers</h5>
        <p5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi deserunt eum nemo dolorem doloribus unde beatae, vitae temporibus qui accusamus, distinctio nam debitis alias minima corrupti, ipsam obcaecati voluptatum asperiores?</p5>
        <h8>Independent Caregiving Service:</h8>
        <ul class="checklist">
          <li>Lorem ipsum dolor sit.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem, ipsum dolor.</li>
        </ul>
      </box-child3>
      <about-image3>
        <img src="/serviceimage3.jpg" style="width: 550px;" />
      </about-image3>
    </box4>
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

  <div class="Services" v-if="isMobile()">
    <about-image>
      <img src="/stock3.jpg" class="aboutimg" />
    </about-image>
    <container>
      <h1>We provide the best services!</h1>
      <p>Lorem ipsum dolor sit amet.
      </p>
    </container>
    <box1>
      <box-child>
        <h2>Assisted Living</h2>
        <p2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit in iure vel quo ullam nulla ipsum doloribus beatae perferendis provident! Ut quod temporibus eum placeat!</p2>
        <h6>Assisted Living Services:</h6>
        <ul class="checklist">
          <li>Lorem, ipsum.</li>
          <li>Lorem.</li>
          <li>Lorem ipsum dolor sit.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem, ipsum dolor.</li>
          <li>Lorem, ipsum.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem, ipsum dolor.</li>
          <li>Lorem</li>
          <li>Lorem, ipsum dolor.</li>
        </ul>
      </box-child>
      <about-image1>
        <img src="/serviceimage.jpg" style="width: 325px; margin-left: 30px;">
      </about-image1>
    </box1>
    <box1>
      <box-child>
        <h3>Respite Care</h3>
        <p3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae porro quae eveniet, minima consequuntur cupiditate blanditiis nostrum sit dolor officia enim excepturi tempore libero saepe necessitatibus nemo repellat consectetur beatae. </p3>
        <h7>Respite Care Services:</h7>
        <ul class="checklist">
          <li>Lorem ipsum dolor sit.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem, ipsum dolor.</li>
        </ul>
      </box-child>
      <about-image1>
        <img src="/serviceimage2.jpg" style="width: 300px; margin-left: 30px;" />
      </about-image1>
    </box1>

    <box1>
      <box-child>
        <h5>Independant Caregivers</h5>
        <p5>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus quisquam debitis deleniti nihil! Dignissimos, accusamus consectetur veritatis magni nobis aspernatur corrupti, magnam obcaecati dolore doloremque assumenda ipsam modi molestiae voluptate.</p5>
        <h8>Independent Caregiving Service:</h8>
        <ul class="checklist">
          <li>Lorem ipsum dolor sit.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem, ipsum dolor.</li>
        </ul>
      </box-child>
    </box1>

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
</template>

<style scoped>
@media (min-width: 1025px) {
  .Services {
    min-height: 120vh;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 10%;
    color: #fbfbfc;
  }

  about-image {
    top: 0;
    width: 100%;
    position: fixed;
    z-index: -1;
  }

  .aboutimg {
    width: 100%;
    filter: brightness(60%);
  }

  container {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 5%;
    color: white;
  }

  h1 {
    font-size: 50px;
  }

  p {
    font-size: 20px;
    margin-bottom: 20%;
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

  box4 {
    width: 100.9%;
    background-color: #fbfbfc;
    padding-top: 8%;
    display: flex;
    flex-direction: row;
  }

  box-child {
    display: flex;
    flex-direction: column;
    width: 60%;
    padding-left: 12%;
    padding-right: 5%;
    margin-left: 5%;

  }

  box-child3 {
    display: flex;
    flex-direction: column;
    width: 60%;
    padding-left: 12%;
    padding-right: 5%;
    margin-left: 5%;
    margin-top: -5%;
  }

  h2 {
    font-size: 40px;
    font-weight: normal;
    color: #2c3d57;
    text-decoration: underline;
    text-decoration-thickness: 5px;
    text-decoration-color: black;
    padding-left: 10%;
  }

  h5 {
    font-size: 40px;
    font-weight: normal;
    color: #2c3d57;
    text-decoration: underline;
    text-decoration-thickness: 5px;
    text-decoration-color: black;
    padding-left: 10%;
  }

  p2 {
    font-size: 22px;
    color: #2c3d57;
    padding: 10%;
    padding-top: 0%;
    border: #2c3d57;
    line-height: 2;
  }

  p5 {
    font-size: 22px;
    color: #2c3d57;
    padding: 10%;
    padding-top: 0%;
    ;
    border: #2c3d57;
    line-height: 2;
  }

  about-image1 {
    padding-right: 20%;
    margin-top: 8%;
  }

  about-image3 {
    padding-right: 20%;
  }

  box2 {
    display: flex;
    flex-direction: row;
    background-color: #fbfbfc;
    width: 100.9%;
    padding-top: 0%;
  }

  box-child1 {
    display: flex;
    flex-direction: column;
    padding-left: 5%;
    padding-right: 15%;
    margin-right: 5%;
  }

  h3 {
    font-size: 40px;
    font-weight: normal;
    color: #2c3d57;
    text-decoration: underline;
    text-decoration-thickness: 5px;
    text-decoration-color: black;
    padding-left: 10%;
    padding-top: 10%;
  }

  p3 {
    font-size: 22px;
    color: #2c3d57;
    padding: 10%;
    padding-top: 0%;
    padding-bottom: 15%;
    line-height: 2;
  }

  about-image2 {
    padding-left: 20%;
    padding-top: 8%;
  }

  bigbox {
    width: 100.9%;
    height: 200px;
    background-color: #fbfbfc;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 1%;
  }

  box3 {
    width: 65%;
    height: 100%;
    background-color: #968b57;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    border-radius: 15px;
  }

  box-child2 {
    width: 50%;
    height: 50%; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    color: white;  
  }

  h4 {
    font-size: 40px;
  }

  p4 {
    font-size: 20px;
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

  h6 {
    font-size: 25px;
    margin-left: 10%;
    margin-top: -5%;
  }

  h7 {
    font-size: 25px;
    margin-left: 10%;
    padding-bottom: 7%;
  }

  h8 {
    font-size: 25px;
    margin-left: 10%;
    padding-bottom: 7%;
  }

  .checklist {
    list-style: none;
    font-size: 22px;
    line-height: 2em;
    color: #2c3d57;
    margin-top: -5%;
  }

  .checklist li::before {
    content: '\2713';
    color: black;
    margin-right: 20px;
  }

}
/* Tablet */
@media (min-width:480px) and (max-width: 1024px) {
  .Services {
    min-height: 120vh;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 10%;
    color: #fbfbfc;
  }

  about-image {
    top: 0;
    width: 100%;
    position: fixed;
    z-index: -1;
  }

  .aboutimg {
    width: 100%;
    filter: brightness(60%);
  }

  container {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 5%;
    color: white;
  }

  h1 {
    font-size: 40px;
  }

  p {
    font-size: 20px;
    margin-bottom: 20%;
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
    flex-direction: column;
    margin-bottom: -1px;
  }

  box4 {
    width: 100.9%;
    background-color: #fbfbfc;
    padding-top: 8%;
    display: flex;
    flex-direction: row;
  }

  box-child {
    display: flex;
    flex-direction: column;
    width: 60%;
    padding-left: 12%;
    padding-right: 5%;
    margin-left: 5%;

  }

  box-child3 {
    display: flex;
    flex-direction: column;
    width: 60%;
    padding-left: 12%;
    padding-right: 5%;
    margin-left: 5%;
    margin-top: -5%;
  }

  h2 {
    font-size: 40px;
    font-weight: normal;
    color: #2c3d57;
    text-decoration: underline;
    text-decoration-thickness: 5px;
    text-decoration-color: black;
    padding-left: 10%;
  }

  h5 {
    font-size: 40px;
    font-weight: normal;
    color: #2c3d57;
    text-decoration: underline;
    text-decoration-thickness: 5px;
    text-decoration-color: black;
    padding-left: 10%;
  }

  p2 {
    font-size: 22px;
    color: #2c3d57;
    padding: 10%;
    padding-top: 0%;
    border: #2c3d57;
    line-height: 2;
  }

  p5 {
    font-size: 22px;
    color: #2c3d57;
    padding: 10%;
    padding-top: 0%;
    ;
    border: #2c3d57;
    line-height: 2;
  }

  about-image1 {
    margin-top: 5%;
    margin-left: 30%;
  }


  box2 {
    display: flex;
    flex-direction: row;
    background-color: #fbfbfc;
    width: 100.9%;
    margin: 5%;
  }

  box-child1 {
    display: flex;
    flex-direction: column;
    padding-left: 5%;
    padding-right: 15%;
    margin-right: 5%;
  }

  h3 {
    font-size: 40px;
    font-weight: normal;
    color: #2c3d57;
    text-decoration: underline;
    text-decoration-thickness: 5px;
    text-decoration-color: black;
    padding-left: 10%;
    padding-top: 10%;
  }

  p3 {
    font-size: 22px;
    color: #2c3d57;
    padding: 10%;
    padding-top: 0%;
    padding-bottom: 15%;
    line-height: 2;
  }

  bigbox {
    width: 100.9%;
    height: 50%;
    background-color: #fbfbfc;
    height: auto;
    margin-top: -1px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-bottom: 1%;
  }

  box3 {
    width: 75%;
    height: 100%;
    background-color: #968b57;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

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

  h6 {
    font-size: 25px;
    margin-left: 10%;
    margin-top: -5%;
  }

  h7 {
    font-size: 25px;
    margin-left: 10%;
    padding-bottom: 7%;
  }

  h8 {
    font-size: 25px;
    margin-left: 10%;
    padding-bottom: 7%;
  }

  .checklist {
    list-style: none;
    font-size: 22px;
    line-height: 2em;
    color: #2c3d57;
    margin-top: -5%;
  }

  .checklist li::before {
    content: '\2713';
    color: black;
    margin-right: 20px;
  }

}
/* Mobile */
@media  (min-width:0px) and (max-width: 479px) {
  .Services {
    min-height: 120vh;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 10%;
    color: #fbfbfc;
  }

  about-image {
    top: 0;
    position: fixed;
    z-index: -1;
    margin-top: 8%;
    width:200%;
  }

  .aboutimg {
    width: 100%;
    filter: brightness(60%);
  }

  container {
    display: flex;
    flex: 1;
    flex-direction: column;
    text-align: center;
    align-items: center;
    color: white;
    margin-top: 30px;
  }

  h1 {
    font-size: 40px;
  }

  p {
    font-size: 20px;
    margin-bottom: 10%;
  }

  p1 {
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    margin: 2%;
    font-size: 20px;
    align-items: center;
  }

  box1 {
    width: 100%;
    background-color: #fbfbfc;
    padding-top: 8%;
    display: flex;
    flex-direction: column;
    padding-left: 10%;
  }

  box4 {
    width: 100.9%;
    background-color: #fbfbfc;
    padding-top: 8%;
    display: flex;
    flex-direction: column;
  }

  box-child {
    display: flex;
    flex-direction: column;
    width: 99%;

  }

  box-child3 {
    display: flex;
    flex-direction: column;
    width: 60%;
    padding-left: 12%;
    padding-right: 5%;
    margin-left: 5%;
    margin-top: -5%;
  }

  h2 {
    font-size: 40px;
    font-weight: normal;
    color: #2c3d57;
    text-decoration: underline;
    text-decoration-thickness: 5px;
    text-decoration-color: black;
  }

  h5 {
    font-size: 40px;
    font-weight: normal;
    color: #2c3d57;
    text-decoration: underline;
    text-decoration-thickness: 5px;
    text-decoration-color: black;
  }

  p2 {
    font-size: 22px;
    color: #2c3d57;
    padding: 10%;
    padding-top: 0%;
    border: #2c3d57;
    line-height: 2;
    margin-left: -8%;
  }

  p5 {
    font-size: 22px;
    color: #2c3d57;
    padding: 10%;
    padding-top: 0%;
    margin-left: -8%;
    border: #2c3d57;
    line-height: 2;
  }


  about-image3 {
    padding-left: 10%;
  }

  box2 {
    display: flex;
    flex-direction: row;
    background-color: #fbfbfc;
    width: 100.9%;
    padding-top: 0%;
  }

  box-child1 {
    display: flex;
    flex-direction: column;
    padding-left: 5%;
    padding-right: 15%;
    margin-right: 5%;
  }

  h3 {
    font-size: 40px;
    font-weight: normal;
    color: #2c3d57;
    text-decoration: underline;
    text-decoration-thickness: 5px;
    text-decoration-color: black;
    padding-top: 10%;
  }

  p3 {
    font-size: 22px;
    color: #2c3d57;
    padding: 10%;
    padding-top: 0%;
    padding-bottom: 15%;
    line-height: 2;
    margin-left: -8%;
  }

  about-image2 {
    margin-left: 10%;
  }

  bigbox {
    width: 105%;
    background-color: #fbfbfc;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: -1px;
    padding-bottom: 1%;
  }

  box3 {
  width: 80%;
  align-items: center;
  background-color: #968b57;
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: 15px;
  margin-left: 25px;
  text-align: center;
}
h4 {
  font-size: 30px;
}

p4 {
  font-size: 15px;
}
.router-link{
  margin-top: 10%;
  margin-left: 0%;
  text-decoration: none;
  background-color: #2c3d57;
  margin-bottom: auto;
  color: white;
  font-size: 20px;
  align-items: center;
  padding-top: 10px;
  padding-left: 30px;
  padding-bottom: 10px;
  padding-right: 30px;
  border-radius: 15px;
  margin-bottom: 20px;
}

  h6 {
    font-size: 25px;
    margin-left: 10%;
    margin-top: -5%;
  }

  h7 {
    font-size: 25px;
    margin-left: 10%;
    padding-bottom: 7%;
  }

  h8 {
    font-size: 25px;
    margin-left: 10%;
    padding-bottom: 7%;
  }

  .checklist {
    list-style: none;
    font-size: 22px;
    line-height: 2em;
    color: #2c3d57;
    margin-top: -5%;
    padding: 5%;
  }

  .checklist li::before {
    content: '\2713';
    color: black;
    margin-right: 20px;
  }

}</style>