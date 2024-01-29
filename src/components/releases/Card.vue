<template>
    <router-link :to="'/album/'+album.id">
        <div class="card">
            <img class="card-img-top" :src="album.images[0].url" alt="Card image">
            <div class="card-body text-white">
                <h4 class="card-title" :title="album.name">{{ getName(album.name) }}</h4>
                <p class="card-text">{{ album.artists[0].name }}</p>
            </div>
        </div>
    </router-link>
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
        return{
        }
    },
    methods: {
        getName(name){
            const maxlength = 15;
            return name.length > maxlength ? name.substring(0, maxlength) + '...' : name;
        }
    }
}
</script>
<style scoped>
.card{
    background: #000;
    box-shadow: 8px 8px 9px -9px rgba(179,179,179,1);
    cursor: pointer;
}
.card:hover{
    box-shadow: 8px 8px 26px -9px rgba(179,179,179,1);
}
.card-title{
    font-size: 1rem;
    margin-bottom: 0;
}
.card-text{
    font-weight: 100;
}
</style>