import Component from './js/component'
import { globals } from './js/globals'

export default {
  install(app, options = {}) {
    Object.entries(options).forEach(([key, value]) => {
      globals[key] = value
    })

    app.component('vuevectormap', Component)
  }
}