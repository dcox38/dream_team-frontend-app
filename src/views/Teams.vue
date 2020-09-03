<template>
  <div class="home">
    <h1>{{ message }}</h1>

    <hr>

    <div v-for="team in teams">
      <p>Name: {{ team.name }}</p>
      <p>Pitcher: {{ team.pitcher.first_name + " " + team.pitcher.last_name }}</p>
      <p>Catcher: {{ team.catcher.first_name + " " + team.catcher.last_name }}</p>
      <p>First Base: {{ team.first_base.first_name + " " + team.first_base.last_name }}</p>
      <p>Second Base: {{ team.second_base.first_name + " " + team.second_base.last_name }}</p>
      <p>Third Base: {{ team.third_base.first_name + " " + team.third_base.last_name }}</p>
      <p>Shortstop: {{ team.shortstop.first_name + " " + team.shortstop.last_name }}</p>
      <p>Left Field: {{ team.left_field.first_name + " " + team.left_field.last_name }}</p>
      <p>Center Field: {{ team.center_field.first_name + " " + team.center_field.last_name }}</p>
      <p>Right Field: {{ team.right_field.first_name + " " + team.right_field.last_name }}</p>
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
      message: "My Teams",
      teams: [],
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
        this.teams = response.data;
      });
    },
  }
};
</script>