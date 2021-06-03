import { createApp } from 'vue'
// import Vue from "vue";
import App from './App.vue'
import router from './router'
import store from './store'

// import Vue2Filters from "vue2-filters"
// Vue.config.productionTip=false;
// Vue.use(Vue2Filters);
createApp(App).use(store).use(router).mount('#app')
