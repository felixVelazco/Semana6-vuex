import { createApp, VueElement } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Footer from '@/components/Footer'
import BarraNavegacion from '@/components/BarraNavegacion'

const app = createApp(App);

app.component("Footer", Footer);//global registration
app.component("BarraNavegacion", BarraNavegacion);

app.use(store).use(router).mount('#app')
