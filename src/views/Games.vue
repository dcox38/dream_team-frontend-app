<template>
  <div class="home">

     <header style="background-image:url('img/05.jpg')" class="masthead text-center text-white">
      <div class="masthead-content">
        <div class="container">
          <h1 class="masthead-heading mb-0">Start a New Game</h1>
          <!-- <h2 class="masthead-subheading mb-0">Will Rock Your Socks Off</h2> -->
          <!-- <a href="#" class="btn btn-primary btn-xl rounded-pill mt-5">Learn More</a> -->
        </div>
      </div>
      <!-- <div class="bg-circle-1 bg-circle"></div>
      <div class="bg-circle-2 bg-circle"></div>
      <div class="bg-circle-3 bg-circle"></div>
      <div class="bg-circle-4 bg-circle"></div> -->
    </header>

    <section>
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 order-lg-2">
            <div class="p-1">
              <!-- <img class="img-fluid rounded-circle" src="img/01.jpg" alt=""> -->
            </div>
          </div>
          <div class="col-lg-6 order-lg-1">
            <div class="p-1">
              <h2 class="display-8">Your Team:</h2>
                <select v-model='your_team'>
                  <option v-for='team in teams' :value='team.id'>{{ team.name }}</option>
                </select>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 order-lg-2">
            <div class="p-1">
              <!-- <img class="img-fluid rounded-circle" src="img/01.jpg" alt=""> -->
            </div>
          </div>
          <div class="col-lg-6 order-lg-1">
            <div class="p-1">
              <h2 class="display-8">Competitor:</h2>
                  <select v-model='not_your_team'>
                    <option v-for='team in teams' :value='team.id'>{{ team.name }}</option>
                  </select>
            </div>
          </div>
        </div>
      </div>
    </section>

  <a href v-on:click="createGame" class="btn btn-primary btn-xl rounded-pill mt-5">Play Ball!</a>

  </div>
</template>

<style>
</style>

<script>

import axios from "axios";


export default {
  data: function() {
    return {
      your_team: '',
      not_your_team: '',
      teams:[]
    };
  },
  created: function() {
    this.getTeamName();
  },
  methods: {
    getTeamName: function() {
      console.log('adding a team...');
      axios.get('api/teams').then(response => {
        console.log(response.data);
        this.teams = response.data;
      });
    },
    createGame: function() {
      console.log('create game...');
      console.log(this.your_team);
      console.log(this.not_your_team);
      var params = {
        team_one_id: this.your_team,
        team_two_id: this.not_your_team
      };
      axios.post('/api/games', params).then(response => {
        console.log(response.data);
        this.$router.push("/winner");

      });
    }
  }
};
</script>