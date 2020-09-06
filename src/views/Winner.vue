<template>
  <div class="home">
    <h1> And the winner is: </h1>
    <div v-for="game in games">
      <p> {{ game.winner_name }}</p>


    </div>
    <!-- <h1>{{ message }}</h1> -->
    <!-- <h1>{{ games }}</h1> -->

  </div>
</template>

<style>
</style>

<script>

import axios from "axios";

export default {
  data: function() {
    return {
      message: "You are a winner Dan",
      winner: '',
      games: []
    };
  },
  created: function() {
    this.getWinner();
  },
  methods: {
    getWinner: function() {
      console.log('determing a winner...');
      axios.get('api/games').then(response => {
        console.log(response.data);
        this.games = response.data;
      })
    }
  }
};
</script>