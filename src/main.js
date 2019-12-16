import Vue from 'vue'
import App from './App.vue'
import VueAnime from 'vue-animejs';

import VueHowlerButton from 'vue-howler-button'


Vue.use(VueAnime)
Vue.use(VueHowlerButton)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
