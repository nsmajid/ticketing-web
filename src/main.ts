import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { pinia } from '@/stores'

import './assets/css/app.css'
import { setupApiClient } from '@/api'

createApp(App).use(pinia).use(router).mount('#app')
setupApiClient()
