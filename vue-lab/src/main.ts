import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Підключаємо Tailwind CSS
import './assets/index.css';


// Якщо у тебе є ще свої стилі, можна підключити їх після Tailwind
// import './assets/main.css'

const app = createApp(App)

app.use(router)

app.mount('#app')

