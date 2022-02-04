<template>
  <div class="container">
    <div style="display: flex; justify-content: center; margin-top: 5rem">
      <vuevectormap
        ref="map"
        map="world_merc"
        width="800px"
        height="450px"
        :regionStyle="{ initial: { fill: '#d1d5db' } }"
        :markers="markers"
        :markerStyle="markerStyle"
        :lines="[
          { from: 'Canada', to: 'Palestine' },
          { from: 'Canada', to: 'Greenland' },
          { from: 'Canada', to: 'Russia' },
          { from: 'Canada', to: 'Brazil' },
        ]"
        :lineStyle="{ strokeDasharray: [6, 3, 6], animation: true }"
        :labels="labels"
        @loaded="loaded"
        @regionTooltipShow="regionTooltipShow">
      </vuevectormap>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    map: null,
    markers: [
      { name: 'Russia', coords: [61, 105] },
      { name: 'Greenland', coords: [72, -42] },
      { name: 'Canada', coords: [56, -106] },
      { name: 'Palestine', coords: [31.5, 34.8] },
      { name: 'Brazil', coords: [-14.2350, -51.9253] },
    ],
    markerStyle: {
      initial: { fill: '#ff4551' }
    },
    labels: {
      markers: {
        render: marker => marker.name
      }
    }
  }),

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
      console.log(tooltip, code);
    }
  }
}
</script> 