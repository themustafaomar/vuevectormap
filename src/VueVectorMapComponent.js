import { h, getCurrentInstance, onMounted, useAttrs } from 'vue'
import jsVectorMap from 'jsvectormap'

if (typeof window === 'object') {
  window.jsVectorMap = jsVectorMap
}

export default {
  props: {
    options: Object,
    width: {
      type: [Number, String],
      default: 650,
    },
    height: {
      type: [Number, String],
      default: 350,
    },
  },
  data: () => ({
    map: {}
  }),
  setup() {
    const instance = getCurrentInstance()
    const props = instance.props
    const id = `__vm__${instance.uid}`
    const listeners = {}

    for (const [name, fn] of Object.entries(useAttrs())) {
      if (name.startsWith('on')) {
        listeners[name] = fn
      }
    }

    onMounted(() => {
      instance.data.map = new jsVectorMap({
        selector: `#${id}`,
        ...props.options,
        ...listeners,
      })
    })

    return () => h('div', {
      id,
      style: {
        height: `${props.height}px`,
        width: `${props.width}px`
      }
    })
  }
}