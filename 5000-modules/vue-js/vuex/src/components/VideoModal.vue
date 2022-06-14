<template>
    <div>
        <div class="overlay">
            <div class="video">
                <iframe width="560" height="315" :src="embed" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    </div>
</template>

<script>
// import youtube from '../youtube/youtube.js';

export default {
    name: "VideoModal",
    props: {
        embed: String,
    }
}
</script>


<style scoped lang="scss">
    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: rgba(0,0,0, .6);
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>