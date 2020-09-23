<template>
  <div class="container">
    <div style="display: flex; justify-content: center; margin-top: 5rem">
      <vuevectormap
        ref="map"
        width="700px"
        height="400px"
        :markers="markers"
        :markerStyle="markerStyle"
        :markerLabelStyle="markerLabelStyle"
        :labels="labels"
        @loaded="loaded"
        @regionTooltipShow="regionTooltipShow">
      </vuevectormap>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueVectorMap from '../../dist/js/vuevectormap.min.js'
import '../../src/scss/VueVectorMap.scss'

// Import your preffered map
require('jsvectormap/dist/maps/world.js')

Vue.use(VueVectorMap)

export default {
  data: () => ({
    map: null,
    markers: [
      { name: 'Russia', coords: [61, 105] },
      { name: 'Geenland', coords: [72, -42] },
      { name: 'Canada', coords: [56, -106] },
      { name: 'Palestine', coords: [31.5, 34.8] },
      { name: 'Brazil', coords: [-14.2350, -51.9253] },
    ],
    markerStyle: {
      initial: {
        fill: '#ff4551',
        r: 6,
        strokeWidth: 4
      }
    },
    markerLabelStyle: {
      initial: {
        fontFamily: 'Sans-serif',
        fontSize: 13.5,
        fontWeight: 500,
        fill: '#35373e',
      },
    },
  }),

  computed: {
    labels() {
      const markers = this.markers

      return {
        markers: {
          render: function(index) {
            return markers[index].name;
          },
        },
      }
    }
  },

  mounted() {
    this.map = this.$refs.map.getMap()
  },

  methods: {
    loaded(map) {
      window.addEventListener('resize', () => {
        map.updateSize()
      })
    },
    regionTooltipShow(tooltip, code) {
      // console.log(tooltip, code);
    }
  }
}
</script>

<style>
  
</style>