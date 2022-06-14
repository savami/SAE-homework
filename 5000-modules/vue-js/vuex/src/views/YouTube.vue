<template>
    <div>
        <SingleVideo v-for="(video, index) in videos" 
        :key="index" 
        :videoID="video.videoID" 
        :videoTitle="video.title" 
        :videoDescription="video.description"
        :img="IDtoThumbnail(video.videoID)"
        
        @click="openModal(index)">

        </SingleVideo>
    </div>
    <VideoModal :embed="modalVideoEmbed" v-if="modal"></VideoModal>
    <span @click="closeModal">x</span>
</template>

<script>
import axios from 'axios';
import youtube from '../youtube/youtube.js';
import SingleVideo from '@/components/SingleVideo.vue';
import VideoModal from '@/components/VideoModal.vue';

export default {
    name: 'YouTube',
    components: {
        SingleVideo,
        VideoModal
    },
    data() {
        return {
            videos: [],
            modal: false,
            modalVideoEmbed: ""
        }
    },
    beforeCreate() {
        if (this.$store.state.loggedIn === false) {
        this.$router.push('/login');
    }
  },
  mounted() {
      axios
        .get('https://api.npoint.io/87746de2a7bad5b1628c')
        .then(response => {
            this.videos = response.data.videos
        })
  },
  methods: {
    openModal(i) {
        this.modal = true;
        this.modalVideoEmbed = youtube.generateEmbedUrl(this.videos[i].videoID)
    },
    closeModal() {
        this.modal = false;
    },
    IDtoThumbnail(id) {
        return youtube.generateThumbnailUrl(id);
    }
  }
}
</script>

<style scoped>
    span {
        position: fixed;
        top: 10px;
        right: 10px;
        cursor: pointer;
        font-size: 200%;
        color: white;
        font-weight: bold;
    }
</style>