<template>
    <div>
        <p>{{ users[this.$route.params.id].username }} has posted {{ users[this.$route.params.id].noOfPosts }} times on this forum</p>
    </div>
</template>

<script>
export default {
    name: "SingleUser",
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
}
</script>