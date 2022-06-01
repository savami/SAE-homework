<template>
    <div>
        <h3>Username: {{ userDetails.username }}</h3>
        <p>Number of posts: {{ userDetails.noOfPosts }} </p>
        <hr>
    </div>
</template>

<script>
    export default {
        name: "CardDetails",
        props: {
            userDetails: Object
        }
}
</script>