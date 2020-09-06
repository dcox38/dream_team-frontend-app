<template>
  <div class="home">

    <header style="background-image:url('img/07.jpg')" class="masthead text-center text-white">
      <div class="masthead-content">
        <div class="container">
          <h1 class="masthead-heading mb-0">And The Winner Is:</h1>
          <!-- <h2 class="masthead-subheading mb-0">Will Rock Your Socks Off</h2> -->
          <!-- <a href="#" class="btn btn-primary btn-xl rounded-pill mt-5">Learn More</a> -->
        </div>
      </div>
      <!-- <div class="bg-circle-1 bg-circle"></div>
      <div class="bg-circle-2 bg-circle"></div>
      <div class="bg-circle-3 bg-circle"></div>
      <div class="bg-circle-4 bg-circle"></div> -->
    </header>


    <!-- <h1> And the winner is: </h1> -->
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