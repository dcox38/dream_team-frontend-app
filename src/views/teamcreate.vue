<template>
<div>

   <header style="background-image:url('img/03.jpg')" class="masthead text-center text-white">
      <div class="masthead-content">
        <div class="container">
          <h1 class="masthead-heading mb-0">Create a New Team</h1>
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
        <div class="d-flex p-3 text-black justify-content-center">
          <h2 class="display-12">Team Name :</h2>
          <input type="text" class="center" v-model="name">
        </div>
      </div>
    </section>



    <section>
      <div class="container">
        <div class="d-flex p-3 text-black justify-content-center">
          <h2 class="display-12">Pitcher :</h2>
              <select v-model='pitcher'>
                <option v-for='player in players' :value='player.id'>{{ player.first_name + " " + player.last_name }}</option>
              </select>
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <div class="d-flex p-3 text-black justify-content-center">
          <h2 class="display-12">Catcher :</h2>
              <select v-model='catcher'>
                <option v-for='player in players' :value='player.id'>{{ player.first_name + " " + player.last_name }}</option>
              </select>
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <div class="d-flex p-3 text-black justify-content-center">
          <h2 class="display-12">First Base :</h2>
              <select v-model='first_base'>
                <option v-for='player in players' :value='player.id'>{{ player.first_name + " " + player.last_name }}</option>
              </select>
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <div class="d-flex p-3 text-black justify-content-center">
          <h2 class="display-12">Second Base :</h2>
              <select v-model='second_base'>
                <option v-for='player in players' :value='player.id'>{{ player.first_name + " " + player.last_name }}</option>
              </select>
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <div class="d-flex p-3 text-black justify-content-center">
          <h2 class="display-12">Third Base :</h2>
              <select v-model='third_base'>
                <option v-for='player in players' :value='player.id'>{{ player.first_name + " " + player.last_name }}</option>
              </select>
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <div class="d-flex p-3 text-black justify-content-center">
          <h2 class="display-12">Shortstop :</h2>
              <select v-model='shortstop'>
                <option v-for='player in players' :value='player.id'>{{ player.first_name + " " + player.last_name }}</option>
              </select>
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <div class="d-flex p-3 text-black justify-content-center">
          <h2 class="display-12">Left Field :</h2>
              <select v-model='left_field'>
                <option v-for='player in players' :value='player.id'>{{ player.first_name + " " + player.last_name }}</option>
              </select>
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <div class="d-flex p-3 text-black justify-content-center">
          <h2 class="display-12">Center Field :</h2>
              <select v-model='center_field'>
                <option v-for='player in players' :value='player.id'>{{ player.first_name + " " + player.last_name }}</option>
              </select>
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <div class="d-flex p-3 text-black justify-content-center">
          <h2 class="display-12">Right Field :</h2>
              <select v-model='right_field'>
                <option v-for='player in players' :value='player.id'>{{ player.first_name + " " + player.last_name }}</option>
              </select>
        </div>
      </div>
    </section>

  <a v-on:click="createTeam" class="btn btn-success btn-xl rounded-pill mt-5">Create Team</a>
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
      pitcher: '',
      catcher: '',
      first_base: '',
      second_base: '',
      third_base: '',
      shortstop: '',
      left_field: '',
      center_field: '',
      right_field: '',
      name: '',
      war: '',
      players:[]
    };
  },
  created: function() {
    this.getPlayerName();
  },
  methods: {
    getPlayerName: function() {
      console.log('adding a player...');
      axios.get('api/players').then(response => {
        console.log(response.data);
        this.players = response.data;
      });
    },
    createTeam: function() {
      console.log('create team...');
      console.log(this.pitcher);
      console.log(this.catcher);
      console.log(this.first_base);
      var params = {
        pitcher: this.pitcher,
        catcher: this.catcher,
        first_base: this.first_base,
        second_base: this.second_base,
        third_base: this.third_base,
        shortstop: this.shortstop,
        left_field: this.left_field,
        center_field: this.center_field,
        right_field: this.right_field,
        name: this.name,
      };
      console.log(params);
      axios.post('/api/teams', params).then(response => {
        console.log(response.data);
        this.$router.push("/teams");

      });
    }
  }
};
</script>
