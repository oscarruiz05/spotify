<template>
    <div class="container">
        <section class="section mt-5">
            <div class="col-md-12 row" v-if="album">
                <div class="col-md-4">
                    <div class="info-album-artist pt-5">
                        <div class="info-album text-center">
                            <img :src="album.images[0].url" :alt="album.name">
                            <h3>{{ album.name }}</h3>
                        </div>
                        <div class="info-artist mt-5">
                            <h4>Artists</h4>
                            <ul v-for="(artist, index) in album.artists" :key="index">
                                <li>{{ artist.name }}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-md-8">
                    <div class="info-tracks pt-5">
                        <h5>Most Popular Tracks</h5>
                        <hr class="w-50">
                        <div class="tracks-list">
                            <div class="track-item" v-for="(track, index) in album.tracks.items" :key="index" @click="playTrack(track)">
                                <div class="track-info">
                                    <div class="track-number">{{ track.track_number }}</div>
                                    <div class="track-image">
                                        <img :src="album.images[0].url" class="rounded" alt="">
                                    </div>
                                    <div class="track-title">
                                        <p>{{ track.name }}</p>
                                        <span>{{ getArtists(track.artists) }}</span>
                                    </div>
                                </div>
                                <div class="track-duration">{{ getDuration(track.duration_ms) }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <audio ref="reproductor" :src="trackAct"></audio>
        </section>
    </div>
</template>

<script>
import spotify from '../services/spotify';
export default {
    created(){
        this.loadAlbum();
    },
    data(){
        return {
            album: null,
            play: false,
            trackAct: null,
        }
    },
    methods: {
        loadAlbum(){
            const albumId = this.$route.params.id;
            spotify.getAlbum(albumId).then((album) => {
                this.album = album;
            });
        },
        getArtists(artits){
            return artits.map(artist => artist.name).join(', ');
        }, 
        getDuration(duration){
            const seconds = Math.floor(duration / 1000);
            const minutes = Math.floor(seconds / 60);
            const resSeconds = minutes % 60;

            const formatMinutes = minutes.toString().padStart(2, '0');
            const fomatSeconds = resSeconds.toString().padStart(2, '0');

            return `${formatMinutes}:${fomatSeconds}`;
        },
        playTrack(track){
            this.$refs.reproductor.volume = 0.5;

            if(this.play){
                this.$refs.reproductor.pause();
                this.play = false;
            }

            this.trackAct = track.preview_url
            this.$refs.reproductor.addEventListener('canplaythrough', () => {
                this.$refs.reproductor.play();
                this.play = !this.play;
            });
        }
    }
}
</script>

<style scoped>
.info-album-artist{
    position: sticky;
    top: 0;
}
.info-album img{
    width: 60%;
    border-radius: 50%;
}
.info-album h3{
    margin-top: 1rem;
}

.track-item{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 5rem;
    padding: 1.5rem;
    border-bottom: 1px solid #4f4e4e;
    cursor: pointer;
}
.track-item:hover{
    background-color: #4f4e4e;
    border-radius: 5px;
}
.track-info{
    display: flex;
    align-items: center;
    gap: 1rem;
}
.track-number{
    font-size: 1.5rem;
}
.track-image{
    width: 4rem;
}
.track-image img{
    width: 100%;
}
.track-title p{
    margin: 0;
    font-weight: 700;
}
.track-title span{
    font-weight: 100;
}
</style>