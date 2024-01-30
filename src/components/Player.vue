<template>
    <div class="footer">
        <div class="player-img">
            <img src="@/assets/logo-spotify.png" alt="">
        </div>
        <div class="player-audio">
            <SongPlay />
        </div>
        <div class="player-volume">
            <Volume />
        </div>
    </div>
</template>
<script>
import Volume from '@/components/ui/Volume.vue';
import SongPlay from '@/components/ui/SongPlay.vue';

export default {
    components: {
        Volume,
        SongPlay,
    }
}
</script>

<style scoped>
.footer{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 6rem;
    padding: 2rem 5rem;
    background-color: #000;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 2px 13px -5px #5c5c5c;
}
.player-img{
    width: 6rem;
}
.player-img img{
    width: 100%;
}
</style>