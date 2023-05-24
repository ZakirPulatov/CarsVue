import { createApp } from 'vue'
import { router } from '@/router/router.js'
import './assets/main.css'
import App from '@/App.vue'
import components from '@/components/UI'
import store from '@/store'

const app = createApp(App)

components.forEach(component => {
  app.component(component.name, component)
})

app
  .use(router)
  .use(store)
  .mount('#app')
  