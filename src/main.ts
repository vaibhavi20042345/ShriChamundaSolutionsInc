import { createApp } from 'vue'
import { createHead } from '@unhead/vue'
import App from './App.vue'

const app = createApp(App)
app.use(createHead())
app.mount('#app')
