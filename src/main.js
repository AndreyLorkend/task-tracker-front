import { createApp } from 'vue'
import vuetify from './plugins/vuetify'
import { createPinia } from 'pinia'
import App from './App.vue'
import loadComponents from  './plugins/componentsLoader.js'
import router from './router'

const app = createApp(App)

loadComponents(app)

const pinia = createPinia()

app.use(vuetify)
app.use(pinia)
app.use(router)
app.mount("#app")