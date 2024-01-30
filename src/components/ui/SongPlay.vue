<template>
  <div class="card_player">
    <div class="card__wrapper">
      <button class="card__btn">
        <svg
          width="23"
          height="16"
          viewBox="0 0 23 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.5 8V0L0 8L11.5 16V8ZM23 0L11.5 8L23 16V0Z"
            fill="#fff"
          ></path>
        </svg>
      </button>
      <!-- play -->
      <button class="card__btn card__btn-play" @click="playSong()">
        <svg
          v-if="!isPlayed"
          fill="none"
          height="15"
          viewBox="0 0 18 22"
          width="15"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m0 0v22l18-11z" fill="#000"></path>
        </svg>

        <svg
          v-else
          height="15"
          width="15"
          data-encore-id="icon"
          aria-hidden="true"
          viewBox="0 0 16 16"
        >
          <path
            d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"
          ></path>
        </svg>
      </button>
      <button class="card__btn">
        <svg
          width="23"
          height="16"
          viewBox="0 0 23 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.5 8V0L23 8L11.5 16V8ZM0 0L11.5 8L0 16V0Z"
            fill="#fff"
          ></path>
        </svg>
      </button>
    </div>
    <div class="card__wrapper">
      <div class="card__time card__time-passed">03:34</div>
      <div class="card__timeline">
        <progress value="30" max="100"></progress>
      </div>
      <div class="card__time card__time-left">02:04</div>
    </div>
  </div>
</template>

<script>
import "@/assets/css/play_player.css";
export default {
  data() {
    return {
      isPlayed: false,
    };
  },
  methods: {
    playSong() {
      this.isPlayed = !this.isPlayed;
    },
  },
};
</script>
