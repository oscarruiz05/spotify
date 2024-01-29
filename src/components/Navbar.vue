<script setup></script>

<template>
  <nav class="navbar navbar-expand-lg px-5">
    <router-link class="navbar-brand" to="/">
      <img src="@/assets/logo-spotify.png" class="logo" alt="Logo" />
    </router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <!-- Links -->
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <div class="col-md-12 row buscadores">
        <div class="col-sm-6 col-md-4">
          <input type="text" class="form-control" placeholder="Buscar artista"/>
        </div>
        <div class="col-sm-6 col-md-4">
          <input type="text" class="form-control" placeholder="Buscar canción"/>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background-color: #262628;
}
.logo {
  max-width: 10rem;
}
.buscadores{
  justify-content: center;
}
input, input:focus{
  background-color: #323235;
}
</style>
