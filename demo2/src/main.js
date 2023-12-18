
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { BiFacebook } from "oh-vue-icons/icons";
import { BiLinkedin } from "oh-vue-icons/icons";
import { HiMail } from "oh-vue-icons/icons";
import { BiTelephoneFill } from "oh-vue-icons/icons";
import { HiSolidChevronDown,BiXLg,BiJustify,BiInstagram,BiTwitter } from "oh-vue-icons/icons"

const app = createApp(App)

addIcons(BiFacebook, BiLinkedin,HiMail,BiTelephoneFill,HiSolidChevronDown,BiXLg,BiJustify,BiInstagram,BiTwitter);

app.use(router)
app.component("v-icon", OhVueIcon);
app.mount('#app')
