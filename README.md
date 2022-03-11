# VueVectorMap
A Vue wrapper component for Jsvectormap [jsvectormap](https://github.com/themustafaomar/jsvectormap)

## Versions

| Vuejs version | Package version | Branch |
| :---          |:---------------:| ---:   | 
| 3.x           |       2.x       | `next` (in development) |
| 2.x           |       1.x       | [master](https://github.com/themustafaomar/vuevectormap/tree/master) |

## Installation
Installing via npm
```
npm i vuevectormap@next
```

## Demo
Example at [vuevectormap](https://codepen.io/themustafaomar/pen/pojyerx)<br>
Example at [codesandbox](https://4f9cw.csb.app) and [code](https://codesandbox.io/s/vuevectormap-4f9cw)

## Get started

```js
import { createApp } from 'vue'
import VueVectorMap from 'vuevectormap'
import 'vuevectormap/src/scss/vuevectormap.scss'

// Import your preferred map
require('jsvectormap/dist/maps/world')

const app = createApp({})

app.use(VueVectorMap, {
  // Set global options if any etc..
  backgroundColor: '#f6f6f6'
})

app.mount('#app')
```

Just define `vuevectormap` component and we're done!<br>
**Notice**: the default map is world, so you don't have to pass `map` prop.

```vue
<template>
  <div class="...">
    <vuevectormap
      width="700"
      height="350"
      :options="{
        // Map options..
        // markers: []
        // markerStyle: {}
        // etc..
      }">
    </vuevectormap>
  </div>
</template>
```

**Tip:** if you're using sass and and you want to overwrite the default style, the below snippet is for you.<br>
Look at [this file](https://github.com/themustafaomar/jsvectormap/blob/master/src/scss/jsvectormap.scss) to know about all possible variables.

```scss
// Example variables.
$tooltip-bg-color: #3a3d4c;
$tooltip-font-family: Roboto, Etc;

@import 'jsvectormap';
```