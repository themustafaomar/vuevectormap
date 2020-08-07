import JsVectorMap from 'jsvectormap'
import 'jsvectormap/dist/css/jsvectormap.css'

export default {
  data: () => ({
    id: null,
    $map: null,
  }),
  render(h) {
    this.id = `vuevectormap__${this._uid}`

    return h('div', {
      attrs: {
        id: this.id,
        style: `width: ${this.width}px;height: ${this.height}px`,
      },
    })
  },
  mounted() {
    let options = {},
      props = this.$props

    // Append callbacks to options
    for (let event in this.$listeners) {
      options['on' + event.charAt(0).toUpperCase() + event.slice(1)] = this.$listeners[event]
    }

    // Append the passed options
    for (let option in props) {
      if (props[option] != undefined) {
        options[option] = props[option]
      }
    }

    // We supposed to use this.$el
    // But there is a bug in jsvectormap, It'll be fixed soon
    options.selector = `#${this.id}`

    this.$map = new JsVectorMap(options)
  },

  // We won't add any methods to make the package much lighter
  // If we want to access some method, we'll add a ref to `vuevectormap` component
  // and access the map methods example: this.$refs.map.$map.aMethod()
  methods: {
    getInstance() {
      return this.$map
    }
  },

  props: {
    height: {
      type: [String, Number],
      default: () => 300
    },
    width: {
      type: [String, Number],
      default: () => 600
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
