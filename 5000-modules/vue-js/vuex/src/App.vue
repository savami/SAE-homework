<!-- Practice of VueX states & mutations -->

<template>
  <div>
      <nav>
        <router-link to="/">Home</router-link> 
        <router-link to="/youtube"> | YouTube</router-link>
        <router-link to="/login" v-if="!this.$store.state.loggedIn"> | Login</router-link>
        <span v-else @click="logMeOut"> | Log Out</span>
      </nav>
        <hr>
      <router-view/>
    </div>
</template>

<script>
import cookie from '@/cookie/cookie.js';

export default {
  beforeCreate() {
    if (cookie.getCookie('logInState') == "true") {
      this.$store.state.loggedIn = true;
    }

    if (this.$store.state.loggedIn === false) {
      this.$router.push('/login');
    }
  },
  methods: {
    logMeOut() {
      this.$store.commit('loginStateFalse');
      this.$router.push('/login')
    }
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
}

nav {
  padding: 30px;

  a, span {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
