<template>
  <div>
    <div id="app">
      <router-view/>
    </div>
    
  </div>
</template>

<script>

import {iksSwitch} from 'iking-ui'
export default {
  name: 'App',
  components: {
    iksSwitch
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: #2c3e50;
  
}
</style>
