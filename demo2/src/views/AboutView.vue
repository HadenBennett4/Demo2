<template>
    
  <div class="about">
 <about-image>
      <img src="image6.jpg" class="aboutimg"/>
    </about-image>
  <container>
    <h1>About Us</h1>
    <p>Bring you care with over 30 years of experience</p>
  </container>
    <box>
      <a href="https://www.nationalgeographic.com/" target="_blank" class="icons">
          <v-icon name="bi-facebook" scale="3" fill="white"/> 
        </a>
        <p1>Over 30 years of healthcare expirience</p1>
        <a href="https://www.nationalgeographic.com/" target="_blank" class="icons">
          <v-icon name="bi-linkedin" scale="3" fill="white"/>
          </a>
          <p1>Quality Care Services</p1>
        <a href="https://www.nationalgeographic.com/" target="_blank" class="icons">
          <v-icon name="bi-facebook" scale="3" fill="white"/>
          </a>
          <p1>Highly expirenced employees</p1>
    </box>
    <box1>
      <box-child>
      <h2>Our Mission Statement</h2>
        <p2> Working together to create a sense of community, our dedicated and compassionate staff will strive to exceed your expections. We aim to make a difference in the lives of those we serve by providing exceptional care and services, and remembering that you are the reason we are here.</p2>
      </box-child>
      <about-image1>
        <img src="aboutimage.jpg" style="width: 550px;">
    </about-image1>
    </box1>
    <box2>
      <about-image2>
        <img src="aboutimage1.jpg" style="width: 550px;"/>
    </about-image2>
      <box-child1>
        <h3>Our Vision</h3>
        <p3>Our strategic vision is to create and sustain a leading high-quality service that allows individuals to live as independently as possible. <br><br>
        We personalize our services to meet your situation with respect, efficiency, and compassion, fostering independence, preserving dignity and improving the quality of life. </p3>
      </box-child1>
    </box2>
    <bigbox>
    <box3>
      <box-child2>
      <h4>Let us help you!</h4>
      <p4>Let us help give you the peace of mind you deserve.</p4>
    </box-child2>
      <RouterLink class="router-link" to="/contact">CONTACT US</RouterLink>
    </box3></bigbox>
  </div>
</template>

<style scoped>


@media (min-width: 1024px) {
  .about {
    min-height: 120vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 10%;
  }

about-image {
    top:0;
    width:100%;
    position:fixed;
    z-index:-1;
    margin-top: 8%;
}
.aboutimg {
  width:100%;
}

container{
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 8%;
  color: white;
}

h1{
  font-size: 50px;
}

p{
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
  z-index:0;
}

p1 {
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  margin: 2%;
  font-size: 20px;
  align-items: center;
}

box1 {
  width: 105%;
  background-color: #fbfbfc;
  padding-top: 8%;
  padding-left: 5%;
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

h2 /*misson statement*/{
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
  background-color: white;
  padding: 10%;
  padding-top: 15%;
  padding-bottom: 15%;
  border: #2c3d57;
}

about-image1 {
  padding-right: 20%;
}

box2 {
  display: flex;
  flex-direction: row;
  background-color: #fbfbfc;
  width: 105%;
  padding-top: 8%;
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
}

p3 {
  font-size: 22px;
  color: #2c3d57;
  background-color: white;
  padding: 10%;
  padding-top: 15%;
  padding-bottom: 15%;
}

about-image2 {
  padding-left: 20%;
  padding-top: 8%;
}

bigbox {
  width: 105%;
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

.router-link{
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
}

}
</style>
