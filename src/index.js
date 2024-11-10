import Component, { Namespace } from './component'
import 'jsvectormap/src/scss/jsvectormap.scss'

export default {
  install(app, options = {}) {
    app.config.globalProperties[Namespace] = options
    app.component('vuevectormap', Component)
  }
}