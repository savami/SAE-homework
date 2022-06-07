<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">
    <NotificationList/>
  </div>
</template>

<script>
import NotificationList from './components/NotificationList.vue'

export default {
  name: 'App',
  components: {
    NotificationList
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
