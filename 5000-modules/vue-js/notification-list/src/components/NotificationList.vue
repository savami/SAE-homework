<template>
  <div class="hello">
    <SingleNotification v-for="(notification, index) in notifications" v-bind:key="index" :notifDetails="notification"/>
  </div>
</template>

<script>
import axios from 'axios'
import SingleNotification from '@/components/SingleNotification.vue'

export default {
  name: 'NotificationList',
  components: {
    SingleNotification
  },
  data() {
    return {
      notifications: []
    }    
  },
  beforeMount() {
    axios
      .get('https://api.npoint.io/7d9430a23ac464c1c025')
      .then(response => {
        response.data.notifications.sort(function(a, b){
          return b['timestamp'] - a['timestamp']
          });
        console.log(response.data.notifications);
        this.notifications = response.data.notifications
      })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
