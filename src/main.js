import Vue from 'vue';
import router from './router';
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import echarts from 'echarts'
import qs from 'qs'

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

Vue.prototype.$qs = qs
Vue.prototype.$echarts = echarts                                                
Vue.use(ElementUI);



new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
}).$mount('#app');