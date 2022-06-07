<template>
    <div class="notification" :class="{
        info: notifDetails.type=='info',
        warning: notifDetails.type=='warning',
        reminder: notifDetails.type=='reminder',
        readStatus: notifDetails.read_status==true}">
        <p class="date">{{ convertTimestamp(notifDetails.timestamp) }}</p>
        <p>{{ notifDetails.description }}</p>
    </div>
</template>

<style lang="scss">
    .notification {
        margin: 0 auto;
        padding: 5px;
        box-sizing: border-box;
        background-color: rgba(0, 0, 0, 0.5);
        margin-bottom: 20px;
        width: 400px;
        border-radius: 7px;
        position: relative;
    }
    .info {
        border: 3px solid rgb(135, 206, 250);
        background-color: rgba(135, 206, 250, 0.5);
    }
    .warning {
        border: 3px solid rgb(192, 26, 26);
        background-color: rgba(192, 26, 26, 0.5);
    }
    .reminder {
        border: 3px solid rgb(154, 205, 50);
        background-color: rgba(154, 205, 50, 0.5);
    }
    .readStatus {
        opacity: 0.4;
        color: rgba($color: #000000, $alpha: 0.35)
    }
    .date {
        font-size: 11px;
        position: absolute;
        top: -7px;
        right: 5px;
    }
</style>

<script>
import moment from 'moment'

    export default {
        name: "SingleNotification",
        props: {
            notifDetails: Object
        },
        methods: {
            convertTimestamp: function(value) {
                var dateString = moment.unix(value).format("DD/MM - hh:mm")
                return dateString;
            }
        }
    }
</script>