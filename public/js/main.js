import { createApp } from 'vue'
import Root from './App'
import VueVectorMap from '../../src/index'
import '../../src/scss/VueVectorMap.scss'

// Load your preffered map..
require('jsvectormap/dist/maps/world-merc')

const app = createApp(Root)

app.use(VueVectorMap, {
  backgroundColor: '#f6f6f6'
})

app.mount('#app')