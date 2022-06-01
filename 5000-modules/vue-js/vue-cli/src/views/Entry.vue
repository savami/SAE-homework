<template>
    <div>
        <p>List of users</p>
        <hr>
        <CardDetails v-for="(user, index) in users" v-bind:key="index" :userDetails="user"></CardDetails>
    </div>
</template>

<script>
    import CardDetails from "@/components/Card.vue"
    export default {
       name: "EntryView",
       data() {
           return {
               users: [
                   {
                       "username": "Servinees",
                       "noOfPosts": 67
                   },
                   {
                       "username": "veganbabe84",
                       "noOfPosts": 123
                   },
                   {
                       "username": "forum_spammer",
                       "noOfPosts": 7701
                   }
               ]
           }
       },
       components: {
           CardDetails
       }
}
</script>