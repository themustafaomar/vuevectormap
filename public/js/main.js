import { createApp } from 'vue'
import Root from './App'
// import vueVectorMap from '../../dist/js/vuevectormap.esm'
import vueVectorMap from '../../src/index'
import 'jsvectormap/src/scss/jsvectormap.scss'

// Load your preffered map..
import 'jsvectormap/dist/maps/world-merc'

const app = createApp(Root)

app.use(vueVectorMap, {
  backgroundColor: '#f6f6f6'
})

app.mount('#app')