<template>
  <div class="home">

      <p>Your Team:</p>
  <select v-model='your_team'>
    <option v-for='team in teams' :value='team.id'>{{ team.name }}</option>
  </select>

  <hr>

      <p>Competitor:</p>
  <select v-model='not_your_team'>
    <option v-for='team in teams' :value='team.id'>{{ team.name }}</option>
  </select>
  
  <hr>

  <button v-on:click="createGame"> Play Ball! </button>

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