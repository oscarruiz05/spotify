import { createApp } from 'vue'
import { createPinia } from 'pinia'
import BootstrapVue3 from 'bootstrap-vue-3'
import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'


import './assets/main.css'

const app = createApp(App)
app.use(BootstrapVue3)
app.use(VueAxios, axios)
app.use(createPinia())
app.use(router)

app.mount('#app')
