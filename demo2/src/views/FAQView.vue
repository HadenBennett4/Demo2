<template>
    <div class="faq">
      <about-image>
      <img src="stock4.jpg" class="aboutimg"/>
    </about-image>
    <box>
      <h1>Frequently Asked Questions</h1>
      </box>
      <box1>
        <box-child>
        <h2>Questions?</h2>
        <underline>bbbbbbbbbbbbbb</underline>
        <br>
        <img src="faq.jpg" style="width:750px" class="faqimg">
      </box-child>
      <pp>FAQ PORTION</pp>
      </box1>
      <box2>
        <pp>FAQ PORTION</pp>
        <box2-child>
          <h3>About Covid-19 Precautions</h3>
          <underline2>bbbbbbbbbbbbbb</underline2>
          <br>
          <img src="faq2.jpg" style="width:750px">
          </box2-child>
      </box2>
      <bigbox>
    <box3>
      <box3-child>
      <h4>Let us help you!</h4>
      <p4>Let us help give you the peace of mind you deserve.</p4>
    </box3-child>
      <RouterLink class="router-link" to="/contact">CONTACT US</RouterLink>
    </box3></bigbox>
    </div>
  </template>
  
  <style scoped>
  @media (min-width: 1024px) {
    .faq {
    min-height: 120vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 10%;
    color: #fbfbfc;
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
  filter: brightness(65%);
}
box {
  font-size: 30px;
  margin-top: 5%;
}
box1 {
  width:100%;
  background-color: #fbfbfc;
  display: flex;
  flex-direction: row;
  margin-top: 10%;
}
box-child {
  width: 50%;
  padding-left: 10%;
  padding-top: 5%;
}
h2 {
 color: #968b57;
 font-size: 40px;
 margin-bottom: 1%;
}
underline {
  width:50%;
  border: 5px solid #000;
  border-bottom: none;
  border-left: none;
  border-right: none;
  padding-top: -5%;
  color: #fbfbfc;
}
pp {
  color: black;
  width: 50%;
}
box2 {
  background-color: #fbfbfc;
  width: 100%;
  display: flex;
  flex-direction: row;
  padding-top: 8%;
}
h3 {
  color: #968b57;
  font-size: 40px;
  margin-bottom: 1%;
}
underline2 {
  width:50%;
  border: 5px solid #000;
  border-bottom: none;
  border-left: none;
  border-right: none;
  padding-top: -5%;
  color: #fbfbfc;
}
bigbox {
  width: 100%;
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

box3-child {
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
  