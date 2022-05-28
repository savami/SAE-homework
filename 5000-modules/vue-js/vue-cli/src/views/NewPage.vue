<template>
    <div>
        <h1>This is a new page</h1>
        <p>Have fun on it</p>
        <CardComponent/>
    </div>
</template>

<script>
    import CardComponent from '@/components/CardComponent.vue'
    export default {
        name: "NewPage",
        components: {
            CardComponent
        }
    }
</script>
