import { defineComponent, getCurrentInstance, useAttrs, onMounted, h } from "vue"
import { globals } from "./globals"
import jsVectorMap from 'jsvectormap'

if (typeof window === 'object') {
  window.jsVectorMap = jsVectorMap
}

export default defineComponent({
  name: 'jvm',
  inheritAttrs: false,
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
    id: '',
    map: {}
  }),
  setup(props, ctx) {
    const listeners = {}
    const instance = getCurrentInstance()

    for (const [name, fn] of Object.entries(useAttrs())) {
      if (name.startsWith('on')) {
        listeners[name] = fn
      }
    }

    onMounted(() => {
      instance.data.id = `__vm__${instance.uid}`
      instance.data.map = new jsVectorMap({
        selector: `#${instance.data.id}`,
        ...globals,
        ...props.options,
        ...listeners,
      })
    })

    return () => h('div', {
      id: instance.data.id,
      style: {
        height: `${props.height}px`,
        width: `${props.width}px`
      }
    })
  }
})