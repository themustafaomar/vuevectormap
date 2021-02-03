# VueVectorMap
A Vue wrapper component for Jsvectormap [jsvectormap](https://github.com/themustafaomar/jsvectormap)

## Installation
Installing via npm
```
npm i vuevectormap
```

## Demo
Example at [vuevectormap](https://codepen.io/themustafaomar/pen/pojyerx)<br>
Example at [codesandbox](https://4f9cw.csb.app) and [code](https://codesandbox.io/s/vuevectormap-4f9cw)

## Get started
```js
import Vue from 'vue'
import VueVectorMap from 'vuevectormap'
import 'vuevectormap/src/scss/vuevectormap.scss'

// Import your preferred map
require('jsvectormap/dist/maps/world')

Vue.use(VueVectorMap)

// You can set defaults globally
Vue.use(VueVectorMap, {
  map: 'world',
  backgroundColor: 'orange',
  // And so on..
  // check the jsvectormap repo to get all configurations options..
})
```
Just define `vuevectormap` component and we're done!<br>
**Notice**: the default map is world, so you don't have to pass `map` prop.
```vue
<template>
  <div class="...">
    <vuevectormap></vuevectormap>
  </div>
</template>
```
**Tip:** if you're using sass and and you want to overwrite the default style, the below snippet is for you.<br>
Look at [this file](https://github.com/themustafaomar/jsvectormap/blob/master/src/scss/jsvectormap.scss) to know about all possible variables.
```scss
// Example variables.
$tooltip-bg-color: #3a3d4c;
$tooltip-font-family: Roboto, Etc;

@import 'vuevectormap';
```

### Nuxtjs
In `nuxt.config.js` create a new plugin object with mode equal to `client`, for Nuxt < 2.4 use ssr `false`, [See docs](https://nuxtjs.org/guides/configuration-glossary/configuration-plugins).
```js
...

plugins: [
  { src: '@/plugins/vuevectormap.js', mode: 'client' }
],

...
```
Create a new file in plugins directory with a name `vuevectormap.js`
```js
import Vue from 'vue'
import VueVectorMap from 'vuevectormap'
import 'vuevectormap/src/scss/vuevectormap.scss'

// Import your preffered map.
require('jsvectormap/dist/maps/spain')

Vue.use(VueVectorMap)
```

You may face some issues if you declare `vuevectormap` component. directly<br>
To avoid problems wrap `vuevectormap` in client-only tag.

**Warning**: If you are using a version of Nuxt < v2.9.0, use `<no-ssr>` instead of `<client-only>`, [See docs](https://nuxtjs.org/guides/features/nuxt-components#the-client-only-component)
  
```vue
<template>
  <div class="...">
    <client-only>
      <vuevectormap map="spain"></vuevectormap>
    </client-only>
  </div>
</template>
```

## Set configurations
Set jsvectormap configurations via props
```vue
<vuevectormap
  map="world"
  width="600"
  height="300"
  :markers="[{	name: 'Russia', coords: [61, 105] }, ]">
</vuevectormap>
```

## Handle events
```vue
<vuevectormap
  @loaded="handleEvent"
  @viewportChange="handleEvent"
  @regionSelected="handleEvent"
  @markerSelected="handleEvent"
  @regionTooltipShow="handleEvent"
  @markerTooltipShow="handleEvent">
</vuevectormap>
```

## A little bit complex example

```html
<template>
  <vuevectormap
    ref="map"
    :width="800px"
    :height="400px"
    :labels="labels"
    :focusOn="{ region: 'EG', animate: true }"
    backgroundColor="#FFF"

    :series="series"

    :markers="markers"
    :selectedMarkers="selectedMarkers"
    :markersSelectable="true"
    :markersSelectableOne="true"
    :markerStyle="markerStyle"
    :markerLabelStyle="markerLabelStyle"

    :selectedRegions="selectedRegions"
    :regionsSelectable="true"
    :regionsSelectableOne="true"
    :regionStyle="regionStyle"
    :regionLabelStyle="regionLabelStyle">
  </vuevectormap>
</template>

<script>
export default {
  mounted() {
    this.map = this.$refs.map.getMap()
  },
  data: () => ({
    map: null,

    // Start markers
    markers: [
      { name: 'Palestine', coords: [31.5, 34.8] },
      {	name: 'Russia', coords: [61, 105] },
    ],
    markerStyle: {},
    markerLabelStyle: {},
    selectedMarkers: [0],
    
    // Regions
    regionStyle: { initial: { fill: '#ccc' } },
    regionLabelStyle: { initial: { fill: 'orange' } },
    selectedRegions: ['CN'],
    
    // Series
    series: {
      regions: [{
        attribute: 'fill',
        legend: {
          title: 'Play around with series',
        },
        scale: {
          scale1: 'red',
          scale2: 'blue',
          scale3: 'green',
        },
        values: {
          US: 'scale1',
          EG: 'scale2',
          IT: 'scale3',
          BR: 'scale2',
        }
      }]
    }
  }),
  computed: {
    labels() {
      // Labels for markers and regions
      return {
        markers: {
          render(marker, index) {
            return marker.name
          }
        },
        regions: {
          render(code) {
            return code === 'EG' ? code : null
          }
        }
      }
    }
  },
}
</script>
```

## Contributions

Your contributions always **welcome**

## License

vuevectormap licensed under MIT.
