import { defineComponent, getCurrentInstance, useAttrs, onMounted, h } from "vue"
import { globals } from "./globals"
import jsVectorMap from 'jsvectormap'

export default defineComponent({
  name: 'vuevectormap',
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
    map: {}
  }),
  setup(props) {
    const listeners = {}
    const instance = getCurrentInstance()
    const uid = `__vm__${instance.uid}`

    for (const [name, fn] of Object.entries(useAttrs())) {
      if (name.startsWith('on')) {
        listeners[name] = fn
      }
    }

    onMounted(() => {
      instance.data.map = new jsVectorMap({
        selector: `#${uid}`,
        ...globals,
        ...props.options,
        ...listeners,
      })
    })

    return () => h('div', {
      id: uid,
      style: {
        height: `${props.height}px`,
        width: `${props.width}px`
      }
    })
  }
})