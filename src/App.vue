<template>
  <div id="app">
    <b-container fluid>
      <div id="nav">
        <Navigation></Navigation>
      </div>
      <router-view />
    </b-container>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
export default {
  name:"app",
  components: {Navigation}
}
</script>


<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
