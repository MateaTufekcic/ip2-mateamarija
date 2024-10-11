import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';
import router from './router';
import axios from 'axios';
import VueAxios from 'vue-axios';

const app = createApp(App); // Corrected this line

app.use(VueAxios, axios);
loadFonts();
app.use(router).use(vuetify).mount('#app');
