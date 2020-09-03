<template>
  <div class="home">

      <p>Your Team:</p>
  <select v-model='your_team'>
    <option v-for='team in teams' :value='team.id'>{{ team.name }}</option>
  </select>
  <hr>
  </div>
</template>

<style>
</style>

<script>

import axios from "axios";


export default {
  data: function() {
    return {
      teams:[],
      your_team: ''
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
  }
};
</script>