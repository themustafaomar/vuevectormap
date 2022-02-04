import Vue from 'vue'
import App from './App'
import VueVectorMap from '../../src/index'
import '../../src/scss/VueVectorMap.scss'

// Import your preffered map
require('jsvectormap/dist/maps/world-merc')

Vue.use(VueVectorMap)

new Vue({
  render: h => h(App)
}).$mount('#app')