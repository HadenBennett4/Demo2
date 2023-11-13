<script>
const WEB3FORMS_ACCESS_KEY = "88af7c4b-f36a-4f79-a8ae-b8b6c2f053b4";
import { defineComponent } from 'vue';
import GoogleMap from '../componets/GoogleMap.vue'

export default defineComponent({
  components:{
    GoogleMap,
  },
  
    data() {
      return {
        name: "",
        email: "",
        phone: "",
        address: "",
        subject: "",
        message: "",
        successMessage: "Success! Your message has been sent. We will reach back in 2-3 business days.",
        showMessage: false,
      };
    },

    methods: {
      async submitForm() {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: WEB3FORMS_ACCESS_KEY,
            name: this.name,
            email: this.email,
            phone: this.phone,
            address: this.address,
            subject: this.subject,
            message: this.message,
          }),
        });
        const result = await response.json();
        if (result.success) {
          console.log(result);
        }
        if (this.name === '' || this.email === '') {
        alert('Please fill out all required fields.');
      } else {
        this.showMessage=true;
        this.name='';
        this.email='';
        this.phone='';
        this.address='';
        this.subject='';
        this.message='';
      }
    }
      },
      showSuccessMessage() {
      this.showMessage=true;
    }
});
</script>


<template>
  <div class="contact">
 <contact-image>
      <img src="contact.jpg" class="contactimg"  style="filter: brightness(60%);"/>
    </contact-image>
  <container>
    <h1>Contact Us</h1>
    <p>Keep in touch with us</p>
    <box2>
      <a href="https://www.nationalgeographic.com/" target="_blank" >
        <v-icon hover animation="float" animationSpeed="slow" name="hi-mail" fill="white" class="icons"/> 
        </a>
        <p1>Hello@duckweedmarketing.com</p1>
        <a href="https://www.nationalgeographic.com/" target="_blank" >
          <v-icon hover animation="float" animationSpeed="slow" name="bi-telephone-fill" fill="white" class="icons"/>
          </a>
          <p1>(469) 207-6194</p1>
    </box2>
</container>
<box>
<box1>
  <h2>Send Us a Message</h2>
  <p2>Please feel free to send us a message if you would like to inquire more about our services, referrals, or about job oppurtunities.</p2>
</box1>
<form-container>
  <form @submit.prevent="submitForm">
          <form-container>
            <form-container-child>
              <tit>
                Name*
                <input type="text" name="name" v-model="name" input class="input" required/>
              </tit>
            </form-container-child>
            <form-container-child>
              <tit>
                Email*
                <input type="email" name="email"  v-model="email" input class="input" required/>
              </tit>
            </form-container-child>
            <form-container-child>
              <tit>
                Phone
                <input type="text" name="phone" v-model="phone" input class="input"/>
              </tit>
            </form-container-child>
            <form-container-child>
              <tit>
                Address
                <input type="text" name="address" v-model="address" input class="input"/>
              </tit>
            </form-container-child>
          </form-container>
          <subject-container>
            <tit>
                Subject
                <input type="text" name="subject" v-model="subject" input class="input"/>
              </tit>
          </subject-container>
          <message-container>
            <tit>
                Message*
                <textarea name="message" v-model="message" textarea class="message-in" required></textarea>
              </tit>
          </message-container>
          <button class="submit-button" type="submit" @click="showSuccessMessage">Send</button>
          <div>
            <div v-if="showMessage" class="success-message">{{ successMessage }}</div>
          </div>

        </form>
        <GoogleMap/>
</form-container>
  
</box>
  </div>
</template>

<style scoped>


@media (min-width: 1024px) {
  .contact{
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-top: 10%;
    z-index:0;
  }
  .contactimg {
    width: 100%;
  }
form-container{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
contact-image {
    top:0;
    position:fixed;
    z-index:-1;
    margin-left:-8px;

}
container{
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 8%;
  padding-bottom: 5%;
}
h1 {
  font-size: 50px;
}
p {
  font-size: 20px;
  padding-bottom: 8%;
  width: 50%;
  margin-left: 40%;
}
p1 {
  font-size: 20px;
  padding-left: 2%;
}
.icons {
  margin-left: 50px;
  scale: 3;
}
box2 {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10%;
}

box {
  background-color: #fbfbfc;
  padding-bottom: 5%;
  width: 100.98%;
  margin-left: -8px;
  padding-left: 5%;
}

h2{
  color: #968b57;
  font-size: 50px;

}
p2 {
  font-size: 15px;

}

form{
      width:40%;
      height: auto;
      display: flex;
      flex-direction: column;
      justify-content: left;
      align-items: left;
      background-color: #fbfbfc;
      padding-top: 5%;
    
    }

form-container-child{
      width:45%;
      height: 30%;
      margin-right:2%;
      margin-bottom: 2%;
      display: flex;
      flex-direction: column;
      justify-content: left;
      align-items: left;
    }
    tit{
      font-size: 20px;
      color:#2c3d57;
      font-weight: bold;
      width: 25%;
      height: 48%;
    }

    input{
      font-size: 17px;
      color:#2c3d57;
      width: 410%;
      min-height: 40px;
      border-style: solid;
      border-color:#e7e9ef;
      display: flex;
      align-items: center;
      justify-content: start;
      background-color: #f7f5f4;
    }

    .message-in{
      width: 395%;
      height: 195%;
      display:flex;
      flex-direction: column;
      justify-content: space-between;
      border-style: solid;
      border-width: 2px;
      border-color:#e7e9ef;
      font-size: 20px;
      font-family: 'Your Desired Font', 'Times New Roman', Times, serif;
      background-color: #f7f5f4;
    }
    form-container{
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      
      width:100%;
      height:37%;
    }
    subject-container{
      width: 97%;
      height:12%;


      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: left;
      align-items: left;   
 
    }

    message-container{
      width: 100%;
      height:50%;

      display: flex;
      flex-direction: column;
      margin-top: 3%;
      margin-bottom: 3%;
    }

    .submit-button{
      width: 25%;
      height:15%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #2c3d57;
      border-radius: 20px;
    }
    
    button{
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      font-size:25px;
      color:white;
      background-color: black;
      border: none;
    }
    .submit-button:hover{
      opacity: .5;
    }
    #google-map{
      width:400px;
      height:400px;
      margin-right: 200px;
    }
}
/*Tablet*/
@media (max-width: 1024px) {
  .contact{
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-top: 10%;
    z-index:0;
  }
  .contactimg {
    width: 100%;
  }
form-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
contact-image {
    top:0;
    position:fixed;
    z-index:-1;
    margin-top: 8%;
}
container{
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 8%;
  padding-bottom: 5%;
}
h1 {
  font-size: 50px;
}
p {
  font-size: 20px;
  padding-bottom: 8%;
  width: 100%;
  margin-left: 80%;
}
p1 {
  font-size: 20px;
  padding-left: 1%;
}
.icons {
  margin-left: 10%;
  scale: 3;
}
box2 {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10%;
}

box {
  background-color: #fbfbfc;
  padding-bottom: 5%;
  width: 100.45%;
}

h2{
  color: #968b57;
  font-size: 50px;

}
p2 {
  font-size: 15px;

}

form{
      width:40%;
      height: auto;
      display: flex;
      flex-direction: column;
      justify-content: left;
      align-items: left;
      background-color: #fbfbfc;
      padding-top: 5%;
    
    }

form-container-child{
      width:45%;
      height: 30%;
      margin-right:2%;
      margin-bottom: 2%;
      display: flex;
      flex-direction: column;
      justify-content: left;
      align-items: left;
    }
    tit{
      font-size: 20px;
      color:#2c3d57;
      font-weight: bold;
      width: 25%;
      height: 48%;
    }

    input{
      font-size: 17px;
      color:#2c3d57;
      width: 410%;
      min-height: 40px;
      border-style: solid;
      border-color:#e7e9ef;
      display: flex;
      align-items: center;
      justify-content: start;
      background-color: #f7f5f4;
    }

    .message-in{
      width: 395%;
      height: 195%;
      display:flex;
      flex-direction: column;
      justify-content: space-between;
      border-style: solid;
      border-width: 2px;
      border-color:#e7e9ef;
      font-size: 20px;
      font-family: 'Your Desired Font', 'Times New Roman', Times, serif;
      background-color: #f7f5f4;
    }
    form-container{
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      
      width:100%;
      height:37%;
    }
    subject-container{
      width: 97%;
      height:12%;


      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: left;
      align-items: left;   
 
    }

    message-container{
      width: 100%;
      height:50%;

      display: flex;
      flex-direction: column;
      margin-top: 3%;
      margin-bottom: 3%;
    }

    .submit-button{
      width: 25%;
      height:15%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #2c3d57;
      border-radius: 20px;
    }
    
    button{
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      font-size:25px;
      color:white;
      background-color: black;
      border: none;
    }
    .submit-button:hover{
      opacity: .5;
    }
    #google-map{
      width:300px;
      height:300px;
      margin-right: 75px;
    }
}
/*Mobile*/
@media (max-width: 480px) {
  .contact{
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-top: 10%;

  }
  .contactimg {
    width: 100%;
  }
form-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
contact-image {
    top:0;
    position:fixed;
    z-index:-1;
    margin-top: 8%;
    width: 100%;
}
container{
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 8%;
  padding-bottom: 5%;
}
h1 {
  font-size: 25px;
}
p {
  font-size: 15px;
  padding-bottom: 8%;
  width: 100%;
  margin-left: 70%;
}
p1 {
  font-size: 15px;
  padding-left: 5% ;
}
.icons {
  margin-left: 10%;
  scale:1;
  margin: 10%;
}
box2 {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 10%;
  margin-top: -5%;
}

box {
  background-color: #fbfbfc;
  padding-bottom: 5%;
  width: 90%;
  padding: 10%;
}
box1{
  width: 30%;
  padding-right: 30%;
}
h2{
  color: #968b57;
  font-size: 30px;

}
p2 {
  font-size: 15px;
}

form{
      width:90%;
      height: auto;
      display: flex;
      flex-direction: column;
      justify-content: left;
      align-items: left;
      background-color: #fbfbfc;
      padding-top: 5%;
      padding-right: 20%;
    }

form-container-child{
      width:100%;
      height: 30%;
      margin-right:2%;
      margin-bottom: 2%;
      display: flex;
      flex-direction: column;
      justify-content: left;
      align-items: left;
    }
    tit{
      font-size: 20px;
      color:#2c3d57;
      font-weight: bold;
      width: 90%;
      height: 48%;
    }

    input{
      font-size: 17px;
      color:#2c3d57;
      width: 100%;
      min-height: 40px;
      border-style: solid;
      border-color:#e7e9ef;
      display: flex;
      align-items: center;
      justify-content: start;
      background-color: #f7f5f4;
    }

    .message-in{
      width: 100%;
      height: 100%;
      display:flex;
      flex-direction: column;
      justify-content: space-between;
      border-style: solid;
      border-width: 2px;
      border-color:#e7e9ef;
      font-size: 20px;
      font-family: 'Your Desired Font', 'Times New Roman', Times, serif;
      background-color: #f7f5f4;
    }
    form-container{
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      
      width:100%;
      height:100%;
    }
    subject-container{
      width: 100%;
      height:100%;


      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: left;
      align-items: left;   
 
    }

    message-container{
      width: 100%;
      height:100%;

      display: flex;
      flex-direction: column;
      margin-top: 3%;
      margin-bottom: 3%;
    }

    .submit-button{
      width: 25%;
      height:15%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #2c3d57;
      border-radius: 20px;
    }
    
    button{
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      font-size:25px;
      color:white;
      background-color: black;
      border: none;
    }
    .submit-button:hover{
      opacity: .5;
    }
    #google-map{
      width:300px;
      height:300px;
      margin-top: 15%;
    }
}
</style>