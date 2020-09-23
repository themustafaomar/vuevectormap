(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jsvectormap')) :
  typeof define === 'function' && define.amd ? define(['jsvectormap'], factory) :
  (global = global || self, global.VueVectorMap = factory(global.JsVectorMap));
}(this, (function (jsVectorMap) { 'use strict';

  jsVectorMap = jsVectorMap && jsVectorMap.hasOwnProperty('default') ? jsVectorMap['default'] : jsVectorMap;

  var VueVectorMapComponent = {
    data: function data() {
      return {
        id: null,
        instance: null
      };
    },
    render: function render(h) {
      this.id = "vuevectormap__" + this._uid;
      return h('div', {
        attrs: {
          id: this.id,
          style: "width: " + this.width + "; height: " + this.height
        }
      });
    },
    mounted: function mounted() {
      var options = {},
          props = this.$props; // Append callbacks to options

      for (var event in this.$listeners) {
        options['on' + event.charAt(0).toUpperCase() + event.slice(1)] = this.$listeners[event];
      } // Append the passed options


      for (var option in props) {
        if (props[option] != undefined) {
          options[option] = props[option];
        }
      }

      options.selector = "#" + this.id;
      this.instance = new jsVectorMap(options);
    },
    // We won't add any methods to make the package much lighter
    // If we want to access some method, we'll add a ref to `vuevectormap` component
    // and access the map methods example: this.$refs.myMap.getMap.accessSomeMethod()
    methods: {
      getMap: function getMap() {
        return this.instance;
      }
    },
    props: {
      height: {
        type: String,
        default: function _default() {
          return '300px';
        }
      },
      width: {
        type: String,
        default: function _default() {
          return '600px';
        }
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
        default: function _default() {}
      },
      markerLabelStyle: Object,
      // Regions
      selectedRegions: Array,
      regionsSelectable: null,
      regionsSelectableOne: null,
      regionStyle: {
        type: Object,
        default: function _default() {}
      },
      regionLabelStyle: Object,
      series: Object
    }
  };

  var index = VueVectorMapComponent.install = function (Vue, options) {
    if (options === void 0) {
      options = {};
    }

    var props = VueVectorMapComponent.props;

    for (var option in options) {
      if (props.hasOwnProperty(option)) {
        (function () {
          var value = options[option];
          VueVectorMapComponent.props[option] = {
            default: typeof value != "object" ? value : function () {
              return value;
            }
          };
        })();
      }
    }

    Vue.component("vuevectormap", VueVectorMapComponent);
  };

  return index;

})));
