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
      <img src="stock3.jpg" class="aboutimg" />
    </about-image>
    <container>
      <h1>We proviced the best services!</h1>
      <p>More than 30 years of experience</p>
    </container>
    <box1>
      <box-child>
        <h2>Assisted Living</h2>
        <p2>Our abilities vary as we become older. We're here to find out what you want to do and to support you in
          achieving that goal. We'll create a personal care plan that emphasizes your talents and offers the specific
          assistance you require to lead the life you desire.</p2>
        <h6>Assisted Living Services:</h6>
        <ul class="checklist">
          <li>Assistance with hygiene and personal care</li>
          <li>Mobility Assistance</li>
          <li>Health care services coordination</li>
          <li>Transportation to appointments</li>
          <li>Medication management</li>
          <li>Nutricious meals</li>
          <li>Social activities and outings</li>
          <li>House keeping</li>
          <li>Laundry</li>
          <li>Lawn maintenance and repairs</li>
        </ul>
      </box-child>
      <about-image1>
        <img src="serviceimage.jpg" style="width: 550px;">
      </about-image1>
    </box1>
    <box2>
      <about-image2>
        <img src="serviceimage2.jpg" style="width: 550px;" />
      </about-image2>
      <box-child1>
        <h3>Respite Care</h3>
        <p3>Respite care, often known as a short-term stay, is an excellent alternative for seniors who wish to give their
          regular caregivers a break, rehabilitate from surgery or other medical complications, or test the waters before
          making us your new home. Our visitors will enjoy the same amenities as our full-time residents. </p3>
        <h7>Respite Care Services:</h7>
        <ul class="checklist">
          <li>Assisting with necessities of daily living</li>
          <li>Promoting awareness of home safety</li>
          <li>Maintaing daily routines</li>
        </ul>
      </box-child1>
    </box2>
    <box4>
      <box-child3>
        <h5>Independant Caregivers</h5>
        <p5>An independent caregiver gets hired directly by the person's family needing care and has no affiliation with a
          caregiving agency. They provide the necessary caregiving services and work with the family to determine their
          loved one's care needs.</p5>
        <h8>Independent Caregiving Service:</h8>
        <ul class="checklist">
          <li>Maintaining a safe and comfortable home enviroment</li>
          <li>Encouraging socialization and participation in community activities</li>
          <li>The abilty to provide care across a variety of settings, including group homes and day service programs</li>
        </ul>
      </box-child3>
      <about-image3>
        <img src="serviceimage3.jpg" style="width: 550px;" />
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
      <img src="stock3.jpg" class="aboutimg" />
    </about-image>
    <container>
      <h1>We proviced the best services!</h1>
      <p>More than 30 years of experience</p>
    </container>
    <box1>
      <box-child>
        <h2>Assisted Living</h2>
        <p2>Our abilities vary as we become older. We're here to find out what you want to do and to support you in
          achieving that goal. We'll create a personal care plan that emphasizes your talents and offers the specific
          assistance you require to lead the life you desire.</p2>
        <h6>Assisted Living Services:</h6>
        <ul class="checklist">
          <li>Assistance with hygiene and personal care</li>
          <li>Mobility Assistance</li>
          <li>Health care services coordination</li>
          <li>Transportation to appointments</li>
          <li>Medication management</li>
          <li>Nutricious meals</li>
          <li>Social activities and outings</li>
          <li>House keeping</li>
          <li>Laundry</li>
          <li>Lawn maintenance and repairs</li>
        </ul>
      </box-child>
      <about-image1>
        <img src="serviceimage.jpg" style="width: 325px; margin-left: 30px;">
      </about-image1>
    </box1>
    <box1>
      <box-child>
        <h3>Respite Care</h3>
        <p3>Respite care, often known as a short-term stay, is an excellent alternative for seniors who wish to give their
          regular caregivers a break, rehabilitate from surgery or other medical complications, or test the waters before
          making us your new home. Our visitors will enjoy the same amenities as our full-time residents. </p3>
        <h7>Respite Care Services:</h7>
        <ul class="checklist">
          <li>Assisting with necessities of daily living</li>
          <li>Promoting awareness of home safety</li>
          <li>Maintaing daily routines</li>
        </ul>
      </box-child>
      <about-image1>
        <img src="serviceimage2.jpg" style="width: 300px; margin-left: 30px;" />
      </about-image1>
    </box1>

    <box1>
      <box-child>
        <h5>Independant Caregivers</h5>
        <p5>An independent caregiver gets hired directly by the person's family needing care and has no affiliation with a
          caregiving agency. They provide the necessary caregiving services and work with the family to determine their
          loved one's care needs.</p5>
        <h8>Independent Caregiving Service:</h8>
        <ul class="checklist">
          <li>Maintaining a safe and comfortable home enviroment</li>
          <li>Encouraging socialization and participation in community activities</li>
          <li>The abilty to provide care across a variety of settings, including group homes and day service programs</li>
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
    padding-left: 30%;
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