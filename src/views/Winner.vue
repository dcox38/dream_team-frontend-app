<template>
  <div class="home">
    <h1> And the winner is: </h1>
    <div v-for="game in games">
      <h1> {{ game.winner_name }}</h1>
      <h1> {{ game.team_one_total_war }}</h1>


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
        this.game = response.data[-1];
      });
    }
  }
};
</script>