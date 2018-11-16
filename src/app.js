import Vue  from 'vue'
import Button  from './button'
import Svg from './svg.vue'

Vue.component('g-button',Button)
Vue.component('g-svg',Svg)
new Vue({
    el:'#app',
})