<template>
  <div class="home">
    <input @keyup.enter="search" v-model="searchInput" for="text" placeholder="MovieName" />
    <button @click="search">Search</button>
    <div v-if="this.movieList[0]">
      <MovieCard v-for="movie in movieList" v-bind:key="movie.imdbID" :movieDetails="movie"></MovieCard>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import MovieCard from "../components/MovieCard.vue";

export default {
  name: "HomeView",
  data() {
    return {
      movieList: [],
      searchInput: "",
    };
  },
  components: {
    MovieCard,
  },
  methods: {
    search: function () {
      axios
        .get("http://www.omdbapi.com/?apikey=171c5289&s=" + this.searchInput)
        .then((response) => {
          this.movieList = response.data.Search;
      });
    },
  },
};
</script>