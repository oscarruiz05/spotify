<template>
    <div class="card">
        <img class="card-img-top" :src="album.images[0].url" alt="Card image">
        <div class="card-body">
            <h4 class="card-title">{{ album.name }}</h4>
            <p class="card-text">{{ album.artists[0].name }}</p>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        album: {
            type: Object,
            required: false
        }
    },
    data(){
        console.log(this.album)
        return{
        }
    }
}
</script>
<style scoped>
</style>