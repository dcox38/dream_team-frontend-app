<template>
  <div class="home">
    <h1>{{ message }}</h1>

    <!-- I WOULD LIKE THIS BUTTON TO LINK TO CREATE NEW TEAM PAGE -->
    <!-- <button v-on:click="addTeam()">Create a new team</button> -->

    <hr>

    <div v-for="team in teams">
      <p>Pitcher: {{ team.pitcher }}</p>
      <p>Catcher: {{ team.catcher }}</p>
      <p>First Base: {{ team.first_base }}</p>
      <p>Second Base: {{ team.second_base }}</p>
      <p>Third Base: {{ team.third_base }}</p>
      <p>Shortstop: {{ team.shortstop }}</p>
      <p>Left Field: {{ team.left_field }}</p>
      <p>Center Field: {{ team.center_field }}</p>
      <p>Right Field: {{ team.right_field }}</p>
      <hr>
    </div>


  </div>
</template>

<style>
</style>

<script>

import axios from "axios";

export default {
  data: function() {
    return {
      message: "My teams",
      teams: []
    };
  },
  created: function() {
    this.teamsIndex();
  },
  methods: {
    teamsIndex: function() {
      console.log('in teams index');
      axios.get('api/teams').then(response => {
        console.log(response.data);
        this.teams = response.data
      })
    },
  }
};
</script>