import { createApp } from 'vue'
import vuetify from './plugins/vuetify'
import { createPinia } from 'pinia'
import App from './App.vue'

const app = createApp(App)
const pinia = createPinia()

app.use(vuetify)
app.use(pinia)
app.mount("#app")