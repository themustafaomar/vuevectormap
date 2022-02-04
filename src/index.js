import VueVectorMapComponent from './VueVectorMapComponent'

export default {
  install(app, options = {}) {
    let props = VueVectorMapComponent.props

    // for (let option in options) {
    //   if (props.hasOwnProperty(option)) {
    //     let value = options[option]

    //     VueVectorMapComponent.props[option] = {
    //       default: typeof value != 'object' ? value : () => value,
    //     }
    //   }
    // }

    app.component('vuevectormap', VueVectorMapComponent)
  }
}