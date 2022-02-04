import jsVectorMap from 'jsvectormap'

if (typeof window === 'object') {
  window.jsVectorMap = jsVectorMap
}

export default {
  data: () => ({
    id: null,
    instance: null,
  }),
  render(h) {
    this.id = `vuevectormap__${this._uid}`

    return h('div', {
      attrs: {
        id: this.id,
        style: `width: ${this.width}; height: ${this.height}`,
      },
    })
  },
  mounted() {
    let options = {},
      props = this.$props

    // Append callbacks to options
    for (let event in this.$listeners) {
      options[`on${event.charAt(0).toUpperCase() + event.slice(1)}`] = this.$listeners[event]
    }

    // Append the passed options
    for (let option in props) {
      if (props[option] != undefined) {
        options[option] = props[option]
      }
    }

    options.selector = `#${this.id}`

    this.instance = new jsVectorMap(options)
  },

  // We won't add any methods to make the package much lighter
  // If we want to access some method, we'll add a ref to `vuevectormap` component
  // and access the map methods example: this.$refs.myMap.getMap.accessSomeMethod()
  methods: {
    getMap() {
      return this.instance
    }
  },

  props: {
    height: {
      type: String,
      default: () => '300px'
    },
    width: {
      type: String,
      default: () => '600px'
    },

    map: String,
    backgroundColor: String,
    draggable: null,
    zoomButtons: null,
    zoomOnScroll: null,
    zoomOnScrollSpeed: Number,
    zoomMax: Number,
    zoomMin: Number,
    zoomAnimate: null,
    showTooltip: null,
    zoomStep: Number,
    focusOn: Object,

    // Labels for markers and regions
    labels: Object,

    // Markers
    markers: Array,
    selectedMarkers: Array,
    markersSelectable: null,
    markersSelectableOne: null,
    markerStyle: {
      type: Object,
      default: () => {}
    },
    markerLabelStyle: Object,

    // Lines
    lines: Array,
    lineStyle: {
      type: Object,
      default: () => {}
    },

    // Regions
    selectedRegions: Array,
    regionsSelectable: null,
    regionsSelectableOne: null,
    regionStyle: {
      type: Object,
      default: () => {}
    },
    regionLabelStyle: Object,

    series: Object,
  },
}
