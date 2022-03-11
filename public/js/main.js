import { createApp } from 'vue'
import Root from './App'
// import VueVectorMap from '../../dist/js/vuevectormap'
import VueVectorMap from '../../src/js/index'
import 'jsvectormap/src/scss/jsvectormap.scss'

// Load your preffered map..
require('jsvectormap/dist/maps/world-merc')

const app = createApp(Root)

app.use(VueVectorMap, {
  backgroundColor: '#f6f6f6'
})

app.mount('#app')