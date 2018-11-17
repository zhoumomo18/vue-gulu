import Vue  from 'vue'
import Button  from './button'
import Svg from './svg.vue'
import ButtonGroup from './button-group.vue'

Vue.component('g-button',Button)
Vue.component('g-svg',Svg)
Vue.component('g-button-group',ButtonGroup)
new Vue({
    el:'#app',
})