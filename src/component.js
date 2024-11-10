import { defineComponent, getCurrentInstance, useAttrs, onMounted, h, onUnmounted, shallowRef } from 'vue'
import jsVectorMap from 'jsvectormap'

export const Namespace = '$VUE_VECTOR_MAP'

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
  setup(props, { expose }) {
    const listeners = {}
    const map = shallowRef()
    const instance = getCurrentInstance()
    const uid = `__vm__${instance.uid}`
    const globals = instance.appContext.config.globalProperties[Namespace]

    for (const [name, fn] of Object.entries(useAttrs())) {
      if (name.startsWith('on')) {
        listeners[name] = fn
      }
    }

    onMounted(() => {
      map.value = new jsVectorMap({
        selector: `#${uid}`,
        ...globals,
        ...props.options,
        ...listeners,
      })
    })

    onUnmounted(() => {
      map.value.destroy()
    })

    expose({ map })

    return () => h('div', {
      id: uid,
      style: {
        height: `${props.height}px`,
        width: `${props.width}px`,
      },
    })
  }
})