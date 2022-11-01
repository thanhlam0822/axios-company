import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import router from './router.js'

import VueAwesomePaginate from "vue-awesome-paginate";
// necessary css file
import "vue-awesome-paginate/dist/style.css";

createApp(App).use(VueAwesomePaginate).use(router).mount('#app')

 