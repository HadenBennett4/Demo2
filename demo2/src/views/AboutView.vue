<template>
  <div class="about">
    <about-image>
      <img src="Main.jpg"/>
  </about-image> 
  <container>
    <h1>About Us</h1>
    <p>Bring you care with over 30 years of expirience</p>
  </container>
    <box>
      <a href="https://www.nationalgeographic.com/" target="_blank" class="icons">
          <v-icon name="bi-facebook" scale="1" fill="black" /> 
        </a>
        <p1>Over 30 years of healthcare expirience</p1>
        <a href="https://www.nationalgeographic.com/" target="_blank" class="icons">
          <v-icon name="bi-linkedin" scale="1" fill="black"/>
          </a>
          <p1>Quality Care Services</p1>
        <a href="https://www.nationalgeographic.com/" target="_blank" class="icons">
          <v-icon name="bi-facebook" scale="1" fill="black" />
          </a>
          <p1>Highly expirenced employees</p1>
    </box>
    <box1>
      <h2>Our Mission Statement</h2>
      <box-child>
        <p3> Working together to create a sense of community, our dedicated and compassionate staff will strive to exceed your expections. We aim to make a difference in the lives of those we serve by providing exceptional care and services, and remembering that you are the reason we are here.</p3>
      </box-child>
      <about-image1>
        <img src="Main.jpg"/>
    </about-image1>
    </box1>
    <box2>
      <about-image2>
        <img src="Main.jpg"/>
    </about-image2>
      <h3>Our Vision</h3>
      <box-child>
        <p3>Our strategic vision is to create and sustain a leading high-quality service that allows individuals to live as independently as possible.
        We personalize our services to meet your situation with respect, efficiency, and compassion, fostering independence, preserving dignity and improving the quality of life. </p3>
      </box-child>
    </box2>
    <box3>
      <h4>Let Us Help!</h4>
      <p4>Let us help give you the peace of mind you deserve.</p4>
      <RouterLink class="router-link" to="/contact">Contact</RouterLink>
    </box3>
  </div>
</template>

<style scoped>
.about{
  display: flex;
  flex-direction: column;
  padding-top: 15%;
}
.header-image {

}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
