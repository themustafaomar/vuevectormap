<template>
  <div class="container">
    <h4>World map:</h4>
    <vuevectormap
      ref="map"
      map="world"
      @loaded="loaded"
      @regionTooltipShow="regionTooltipShow">
    </vuevectormap>
  </div>
</template>

<script>
import Vue from 'vue'
import VueVectorMap from '../../dist/js/vuevectormap.min.js'
import '../../dist/css/vuevectormap.css'

// Import your preffered map
require('jsvectormap/dist/maps/world.js')

Vue.use(VueVectorMap)

export default {
  data: () => ({
    map: null
  }),

  mounted() {
    this.map = this.$refs.map.getInstance()
  },

  methods: {
    loaded() {
      console.log('loaded');
    },
    regionTooltipShow(tooltip, code) {
      console.log(tooltip, code);
    }
  }
}
</script>