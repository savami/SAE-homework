<template>
    <div>
        <div v-if="details">
            <button @click="$router.go(-1)">Back</button>
            <h3> {{ details.Title }} </h3>
            <img :src="details.Poster">
            <p> {{ details.Type }} </p>
            <p> {{ details.Year }} </p>
            <!-- <p> {{ movieDetails.Rated }} </p> -->
            <p> {{ details.Released }} </p>
            <p> {{ details.Runtime }} </p>
            <p> {{ details.Plot }} </p>
            <p> {{ details.Language }} </p>
            <p> {{ details.Country }} </p>
            <h3>Ratings:</h3>
            <div v-for="(rating, index) in details.Ratings" v-bind:key="index">
                <p>{{ rating.Source }}: </p>
                <p>{{ rating.Value }} </p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "SingleMovieDetails",
    props: {
        details: Object
    },
    mounted() {
        console.log(this.details);
    }
    
}

</script>