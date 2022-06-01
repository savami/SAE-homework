<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div>
      <input @keyup.enter="loginValidation" type="text" v-model="inputUsername" placeholder="Username">
      <input @keyup.enter="loginValidation" type="text" v-model="inputPassword" placeholder="Password">
      <button @click="loginValidation">Sign in</button>
    </div>

  </div>
</template>

<style lang="scss">
  input {
    display: block;
    margin: 5px auto;
  }

  button {
    margin-top: 10px;
    width: 145px;
  }
</style>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      inputUsername: "",
      inputPassword: "",
    }
  },
  methods: {
    loginValidation: function() {
      if (this.inputUsername === "admin" && this.inputPassword === "admin123") {
        this.$router.push("/entry");
      } else {
        alert('Wrong credentials')
      }
    }
  }
}
</script>
