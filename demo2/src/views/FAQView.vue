<script setup>
import {ref,onMounted,onUnmounted} from 'vue'


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
  return windowWidth.value <=1024;
};

const show = ref(false);
const index = ref(0);
function changeShow(i){
  if(i === this.index){
    this.show=!this.show;
  }else{
    this.show = true;
    this.index=i
  }
}
</script>

<template>
    <div class="faq">
      <about-image>
      <img src="stock4.jpg" class="aboutimg"/>
    </about-image>
    <box>
      <h1>Frequently Asked Questions</h1>
    </box>
    <container>
      <box1>
        <box-child>
        <h2>Questions? <br><br>
        <underline>.....</underline></h2>
        <img src="faq.jpg" class="faqimg">
      </box-child>
      <faq-block>

        <question-block @click="changeShow(1)">
          <question-text>
            This is a question?
          </question-text>
          <v-icon v-if="show===true && index===1" flip="vertical" class="question-icon" name="hi-solid-chevron-down" scale="1.5"/>
          <v-icon  v-else class="question-icon" name="hi-solid-chevron-down" scale="1.5"/>
        </question-block>
        <answer-block v-if="show===true && index===1">
          This is the answer to your question. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        </answer-block>

        <question-block @click="changeShow(2)">
          <question-text>
            This is a question?
          </question-text>
          <v-icon v-if="show===true && index===2" flip="vertical" class="question-icon" name="hi-solid-chevron-down" scale="1.5"/>
          <v-icon  v-else class="question-icon" name="hi-solid-chevron-down" scale="1.5"/>
        </question-block>
        <answer-block v-if="show===true && index===2">
          This is the answer to your question. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        </answer-block>

        <question-block @click="changeShow(5)">
          <question-text>
            This is a question?
          </question-text>
          <v-icon v-if="show===true && index===5" flip="vertical" class="question-icon" name="hi-solid-chevron-down" scale="1.5"/>
          <v-icon  v-else class="question-icon" name="hi-solid-chevron-down" scale="1.5"/>
        </question-block>
        <answer-block v-if="show===true && index===5">
          This is the answer to your question. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        </answer-block>

        <question-block @click="changeShow(3)">
          <question-text>
            This is a question?
          </question-text>
          <v-icon v-if="show===true && index===3" flip="vertical" class="question-icon" name="hi-solid-chevron-down" scale="1.5"/>
          <v-icon  v-else class="question-icon" name="hi-solid-chevron-down" scale="1.5"/>
        </question-block>
        <answer-block v-if="show===true && index===3">
          This is the answer to your question. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        </answer-block>

        <question-block @click="changeShow(4)">
          <question-text>
            This is a question?
          </question-text>
          <v-icon v-if="show===true && index===4" flip="vertical" class="question-icon" name="hi-solid-chevron-down" scale="1.5"/>
          <v-icon  v-else class="question-icon" name="hi-solid-chevron-down" scale="1.5"/>
        </question-block>
        <answer-block v-if="show===true && index===4">
          This is the answer to your question. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        </answer-block> 
      </faq-block>
      </box1>
    </container>
    <container>

      <box1 v-if="!isMobile()">
        <faq-block>
          <question-block @click="changeShow(6)">
          <question-text>
            This is a question?
          </question-text>
          <v-icon v-if="show===true && index===6" flip="vertical" class="question-icon" name="hi-solid-chevron-down" scale="1.5"/>
          <v-icon  v-else class="question-icon" name="hi-solid-chevron-down" scale="1.5"/>
        </question-block>
        <answer-block v-if="show===true && index===6">
          This is the answer to your question. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        </answer-block>
        <question-block @click="changeShow(7)">
          <question-text>
            This is a question?
          </question-text>
          <v-icon v-if="show===true && index===7" flip="vertical" class="question-icon" name="hi-solid-chevron-down" scale="1.5"/>
          <v-icon  v-else class="question-icon" name="hi-solid-chevron-down" scale="1.5"/>
        </question-block>
        <answer-block v-if="show===true && index===7">
          This is the answer to your question. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        </answer-block>
        <question-block @click="changeShow(8)">
          <question-text>
            This is a question?
          </question-text>
          <v-icon v-if="show===true && index===8" flip="vertical" class="question-icon" name="hi-solid-chevron-down" scale="1.5"/>
          <v-icon  v-else class="question-icon" name="hi-solid-chevron-down" scale="1.5"/>
        </question-block>
        <answer-block v-if="show===true && index===8">
          This is the answer to your question. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        </answer-block>
        <question-block @click="changeShow(9)">
          <question-text>
            This is a question?
          </question-text>
          <v-icon v-if="show===true && index===9" flip="vertical" class="question-icon" name="hi-solid-chevron-down" scale="1.5"/>
          <v-icon  v-else class="question-icon" name="hi-solid-chevron-down" scale="1.5"/>
        </question-block>
        <answer-block v-if="show===true && index===9">
          This is the answer to your question. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        </answer-block>
        <question-block @click="changeShow(10)">
          <question-text>
            This is a question?
          </question-text>
          <v-icon v-if="show===true && index===10" flip="vertical" class="question-icon" name="hi-solid-chevron-down" scale="1.5"/>
          <v-icon  v-else class="question-icon" name="hi-solid-chevron-down" scale="1.5"/>
        </question-block>
        <answer-block v-if="show===true && index===10">
          This is the answer to your question. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </answer-block>
        </faq-block>
        <box-child>
          <h3>About Covid-19 Precautions</h3>
          <underline2>bbbbbbbbbbbbbb</underline2>
          <br>
          <img src="faq2.jpg" style="width: 600px">
          </box-child>

      </box1>
      <box1 v-if="isMobile()">
        <box-child>
          <h3>About Covid-19 Precautions</h3>
          <underline2>bbbbbbbbbbbbbb</underline2>
          <br>
          <img src="faq2.jpg" class="faq2">
          </box-child>
        <faq-block>
          <question-block @click="changeShow(6)">
          <question-text>
            This is a question?
          </question-text>
          <v-icon v-if="show===true && index===6" flip="vertical" class="question-icon" name="hi-solid-chevron-down" scale="1.5"/>
          <v-icon  v-else class="question-icon" name="hi-solid-chevron-down" scale="1.5"/>
        </question-block>
        <answer-block v-if="show===true && index===6">
          This is the answer to your question. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        </answer-block>
        <question-block @click="changeShow(7)">
          <question-text>
            This is a question?
          </question-text>
          <v-icon v-if="show===true && index===7" flip="vertical" class="question-icon" name="hi-solid-chevron-down" scale="1.5"/>
          <v-icon  v-else class="question-icon" name="hi-solid-chevron-down" scale="1.5"/>
        </question-block>
        <answer-block v-if="show===true && index===7">
          This is the answer to your question. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        </answer-block>
        <question-block @click="changeShow(8)">
          <question-text>
            This is a question?
          </question-text>
          <v-icon v-if="show===true && index===8" flip="vertical" class="question-icon" name="hi-solid-chevron-down" scale="1.5"/>
          <v-icon  v-else class="question-icon" name="hi-solid-chevron-down" scale="1.5"/>
        </question-block>
        <answer-block v-if="show===true && index===8">
          This is the answer to your question. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        </answer-block>
        <question-block @click="changeShow(9)">
          <question-text>
            This is a question?
          </question-text>
          <v-icon v-if="show===true && index===9" flip="vertical" class="question-icon" name="hi-solid-chevron-down" scale="1.5"/>
          <v-icon  v-else class="question-icon" name="hi-solid-chevron-down" scale="1.5"/>
        </question-block>
        <answer-block v-if="show===true && index===9">
          This is the answer to your question. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        </answer-block>
        <question-block @click="changeShow(10)">
          <question-text>
            This is a question?
          </question-text>
          <v-icon v-if="show===true && index===10" flip="vertical" class="question-icon" name="hi-solid-chevron-down" scale="1.5"/>
          <v-icon  v-else class="question-icon" name="hi-solid-chevron-down" scale="1.5"/>
        </question-block>
        <answer-block v-if="show===true && index===10">
          This is the answer to your question. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </answer-block>
        </faq-block>
      </box1>
    </container> 
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
  </template>
  
  <style scoped>
  @media (min-width: 1024px) {
    .faq {
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
}
.faqimg{
  width:600px;
}
.aboutimg {
  width:100%;
  filter: brightness(65%);
}
container{
  width:105%;
  background-color:#fbfbfc;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

box {
  font-size: 30px;
  width:100%;
  height: 200px;
  text-align: center;
  margin-top: 10%;
  
}
box1 {
  width:80%;
  background-color:#fbfbfc;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 100px;

}
box-child {
  width: 45%; 
}
h2 {
 color: #968b57;
 font-size: 40px;
 margin-bottom: 1%;
}
underline {
  width:20%;
  border: 5px solid #000;
  border-bottom: none;
  border-left: none;
  border-right: none;
  color: #fbfbfc;
  padding-top: 6%;
}
pp {
  color: black;
  width: 50%;
}
box2 {
  background-color: #fbfbfc;
  width: 100.9%;
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
  border-radius: 15px;
}

faq-block{
  width: 45%; 
  display: flex;
  flex-direction:column;
}
question-block{
  width:600px;
  height: 60px;
  background-color:white;
  border-radius: 1%;
  box-shadow: 0px 1px 50px -25px black;

  color:#2c3d57;  
  display:flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom:25px;
  margin-top: 30px;
}
question-text{
  margin-left: 15px;
  font-size:30px;
}
.question-icon{
  margin-right:15px;
}
answer-block{
  width:90%;
  text-align: left;
  height:150px;
  color:#2c3d57;
  font-size: 18px;
  align-self: center;
  line-height: 1.5;
}
  }

  /*Mobile*/
  @media (max-width: 480px) {
    .faq {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 10%;
    color: #fbfbfc;
    margin-left: -7px;
    }

    about-image {
    top:0;
    width:100%;
    position:fixed;
    z-index:-1;
    margin-top: 8%;
}
.faqimg{
  width:0px;
}
.aboutimg {
  width:100%;
  filter: brightness(65%);
}
container{
  width:103%;
  background-color:#fbfbfc;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

box {
  font-size: 15px;
  width:100%;
  text-align: center;
  margin-top: 5%;
  padding-bottom: 20%;
}
box1 {
  width:85%;
  background-color:#fbfbfc;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 2px;
}
box-child {
  width: 45%; 
}
h2 {
 color: #968b57;
 font-size: 40px;
 margin-bottom: -40%;
}
underline {
  width:20%;
  border: 5px solid #000;
  border-bottom: none;
  border-left: none;
  border-right: none;
  color: #fbfbfc;
  padding-top: 6%;
}
pp {
  color: black;
  width: 50%;
}
box2 {
  background-color: #fbfbfc;
  width: 100.9%;
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
  width: 100.9%;
  background-color: #fbfbfc;
  height: auto;
  margin-left: 13%;
}
box3 {
  width: 90%;
  align-items: center;
  justify-content: center;
  background-color: #968b57;
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: 15px;
}
h4 {
  font-size: 30px;
}

p4 {
  font-size: 15px;
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
  padding-top: 10px;
  padding-left: 30px;
  padding-bottom: 10px;
  padding-right: 30px;
  border-radius: 15px;
  margin-bottom: 20px;
}
.faq2 {
  width: 0px;
}
faq-block{
  width: 100%; 
  display: flex;
  flex-direction:column;
}
question-block{
  width:100%;
  height: 60px;
  background-color:white;
  border-radius: 1%;
  box-shadow: 0px 1px 50px -25px black;
  color:#2c3d57;  
  display:flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom:25px;
  margin-top: 15px;
}
question-text{
  margin-left: 15px;
  font-size:25px;
}
.question-icon{
  margin-right:15px;
}
answer-block{
  width:90%;
  text-align: left;
  height:150px;
  color:#2c3d57;
  font-size: 15px;
  align-self: center;
  line-height: 1.5;
}
  }
  </style>
  