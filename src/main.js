import { createApp } from 'vue'
import './assets/css/style.css'
import App from './App.vue'
import router from '/src/router'

// 导入element plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

createApp(App)
    .use(router)
    .use(ElementPlus)
    .mount('#app');