
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { BiFacebook } from "oh-vue-icons/icons";
import { BiLinkedin } from "oh-vue-icons/icons";

const app = createApp(App)

addIcons(BiFacebook, BiLinkedin);

app.use(router)
app.component("v-icon", OhVueIcon);
app.mount('#app')
