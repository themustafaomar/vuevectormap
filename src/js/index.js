import Component from './component'
import { globals } from './globals'
import 'jsvectormap/src/scss/jsvectormap.scss'

export default {
  install(app, options = {}) {
    Object.entries(options).forEach(([key, value]) => {
      globals[key] = value
    })

    app.component('vuevectormap', Component)
  }
}