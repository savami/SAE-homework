<template>
    <div>
        <img :src="img" :alt="videoTitle">
        <h3>{{ videoTitle }}</h3>
        <p>{{ videoDescription }}</p>
        <hr>
    </div>
</template>

<script>
// import youtube from '@/youtube/youtube.js'

export default {
    name: "SingleVideo",
    props: {
        videoTitle: String,
        videoDescription: String,
        videoID: String,
        img: String,
        embedSrc: String
    }
}
</script>

<style scoped>
    div {
        max-width: 600px;
        margin: 0 auto;
        cursor: pointer;
    }
</style>