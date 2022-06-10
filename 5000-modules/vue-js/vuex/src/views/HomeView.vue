<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <p>{{ this.$store.state.randomState }}</p>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  beforeCreate() {
    if (this.$store.state.loggedIn === false) {
      this.$router.push('/login');
    }
  }
}
</script>
