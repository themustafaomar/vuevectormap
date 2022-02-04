import { createApp, h } from 'vue'
import Root from './App'
import VueVectorMap from '../../src/index'
import '../../src/scss/VueVectorMap.scss'

// Import your preffered map
require('jsvectormap/dist/maps/world-merc')

const app = createApp({
  render: () => h(Root)
})

app.use(VueVectorMap)
app.mount('#app')