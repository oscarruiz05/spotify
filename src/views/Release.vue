<template>
    <div class="container">
        <h2 class="text-center mt-5">{{ title }}</h2>
        <section class="section">
            <div class="col-md-12 row">
                <div v-for="item in albums" :key="item.id" class="col-md-2 mb-4">
                    <Card :album="item"/>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import Card from '../components/releases/Card.vue';
import spotify from '../services/spotify';

export default {
    components:{
        Card,
    },
    created(){
        this.releases()
    },
    methods:{
        releases(){
            spotify.getReleases().then((res) => {
                this.data = res.albums;
                this.albums = res.albums.items;
            }).catch(({response}) => {
                if(response.status == 401 && this.attempts <= this.maxAttempts){
                    this.attempts++;
                    this.releases();
                }
            });
        }
    },
    data(){
        return{
            title: 'New Releases',
            data: undefined,
            albums: [],
            maxAttempts: 4,
            attempts: 0,
        }
    }
}
</script>
<style scoped>
.section{
    margin-top: 3rem;
}
</style>