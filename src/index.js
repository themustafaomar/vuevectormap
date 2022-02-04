import VueVectorMapComponent from './VueVectorMapComponent'

export default VueVectorMapComponent.install = (Vue, options = {}) => {
  let props = VueVectorMapComponent.props

  for (let option in options) {
    if (props.hasOwnProperty(option)) {
      let value = options[option]

      VueVectorMapComponent.props[option] = {
        default: typeof value != 'object' ? value : () => value,
      }
    }
  }

  Vue.component('vuevectormap', VueVectorMapComponent)
}