<template>
  <div class="home">

    <header class="masthead text-center text-white">
      <div class="masthead-content">
        <div class="container">
          <h1 class="masthead-heading mb-0">My Teams</h1>
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
            <div v-for="team in teams" class="p-5">
              <h1 class="display-4">{{ team.name }}</h1>
              <p>Pitcher: {{ team.pitcher.first_name + " " + team.pitcher.last_name }}</p>
              <p>Catcher: {{ team.catcher.first_name + " " + team.catcher.last_name }}</p>
              <p>First Base: {{ team.first_base.first_name + " " + team.first_base.last_name }}</p>
              <p>Second Base: {{ team.second_base.first_name + " " + team.second_base.last_name }}</p>
              <p>Third Base: {{ team.third_base.first_name + " " + team.third_base.last_name }}</p>
              <p>Shortstop: {{ team.shortstop.first_name + " " + team.shortstop.last_name }}</p>
              <p>Left Field: {{ team.left_field.first_name + " " + team.left_field.last_name }}</p>
              <p>Center Field: {{ team.center_field.first_name + " " + team.center_field.last_name }}</p>
              <p>Right Field: {{ team.right_field.first_name + " " + team.right_field.last_name }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
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