import '@babel/polyfill'
import 'mutationobserver-shim'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/bootstrap-vue'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

Vue.use(VueAxios, axios);
Vue.component('Loading', Loading)
Vue.config.productionTip = false

const app = new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')

export default app;

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth) {
        app.$store.dispatch('check', next);
    } else next();
})