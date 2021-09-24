<template>
  <div id="app">
    <img alt="fep logo" src="./assets/logo.png">
    <Introduce/>
  </div>
</template>

<script>
import Introduce from './components/Introduce.vue'

export default {
  name: 'App',
  components: {
    Introduce,install
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
