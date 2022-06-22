<template>
    <div>
        <img :src="movieDetails.Poster" alt="">
        <h3>{{ movieDetails.Title }}</h3>
        <p>{{ movieDetails.Type }}</p>
        <p>{{ movieDetails.Year }}</p>
        <hr>
    </div>
</template>

<script>

    export default {
        name: "MovieCard",
        props: {
            movieDetails: Object
        },
        mounted() {
            console.log(this.movieDetails)
        }
    }


</script>