<!-- Usage of VueX $store mutations & states -->

<template>
    <div class="login">
        <h1>Log In</h1>
        <input v-model="inputs.username" @keyup.enter="logMeIn" type="text" placeholder="Username">
        <input v-model="inputs.password" @keyup.enter="logMeIn" type="password" placeholder="Password">
        <button @click="logMeIn">Log In</button>
    </div>
</template>

<style>
    input {
        display: block;
        margin: 0 auto;
    }
</style>

<script>

export default {
    name: 'LogIn',
    data() {
        return {
            inputs: {
                username: "",
                password: "",
            },
            credentials: {
                username: "admin",
                password: "admin"
            }
        }
    },
    methods: {
        logMeIn: function() {
            if (
                this.inputs.username === this.credentials.username &&
                this.inputs.password === this.credentials.password
            ) {
                this.$store.commit('loginStateTrue');
                this.$router.push('/');
            } else {
                this.$store.commit('failedLoginCounter')
                alert('Credentials used are incorrect. Failed attempts: ' + this.$store.state.failedLoginAttempts);
                this.inputs.username = "";
                this.inputs.password = "";
            }
        }
    },
    beforeCreate() {
        if (this.$store.state.loggedIn === true) {
            this.$router.push('/');
        }
    }
}

</script>