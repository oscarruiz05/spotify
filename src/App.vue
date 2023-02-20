<template>
  <div>
    <Navbar />
    <RouterView />
  </div>
</template>

<script>
import { def } from '@vue/shared';
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import spotify from './services/spotify';

export default {
  components:{
    Navbar,
  },
  created(){
    this.token()
  },
  methods:{
    token(){
      spotify.geToken(import.meta.env.VITE_CLIENT_ID, import.meta.env.VITE_CLIENT_SECRET).then((res) => {
        localStorage.setItem('token', res.access_token)
      })
    }
  }
}
</script>

<style>
body{
  background-color: #151618 !important;
}
</style>
