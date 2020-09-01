<template>
<div>
  <p>Pitcher:</p>
  <select v-model='pitcher'>
    <option v-for='player in players' :value='player.id'>{{ player.first_name + " " + player.last_name }}</option>
  </select>
  <hr>

  <p>Catcher:</p>
  <select v-model='catcher'>
    <option v-for='player in players' :value='player.id'>{{ player.first_name + " " + player.last_name }}</option>
  </select>
  <hr>

  <p>First Base:</p>
  <select v-model='first_base'>
    <option v-for='player in players' :value='player.id'>{{ player.first_name + " " + player.last_name }}</option>
  </select>
  <hr>

  <p>Second Base:</p>
  <select v-model='second_base'>
    <option v-for='player in players' :value='player.id'>{{ player.first_name + " " + player.last_name }}</option>
  </select>
  <hr>

  <p>Third Base:</p>
  <select v-model='third_base'>
    <option v-for='player in players' :value='player.id'>{{ player.first_name + " " + player.last_name }}</option>
  </select>
  <hr>

  <p>Shortstop:</p>
  <select v-model='shortstop'>
    <option v-for='player in players' :value='player.id'>{{ player.first_name + " " + player.last_name }}</option>
  </select>
  <hr>

  <p>Left Field:</p>
  <select v-model='left_field'>
    <option v-for='player in players' :value='player.id'>{{ player.first_name + " " + player.last_name }}</option>
  </select>
  <hr>

  <p>Center Field:</p>
  <select v-model='center_field'>
    <option v-for='player in players' :value='player.id'>{{ player.first_name + " " + player.last_name }}</option>
  </select>
  <hr>

  <p>Right Field:</p>
  <select v-model='right_field'>
    <option v-for='player in players' :value='player.id'>{{ player.first_name + " " + player.last_name }}</option>
  </select>
  <hr>

  <button v-on:click="createTeam"> Create team </button>

</div>
</template>

<script>

import axios from "axios"

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
      players:[]
    };
  },
  created: function() {
    this.getPlayerName()
  },
  methods: {
    getPlayerName: function() {
      console.log('adding a player...');
      axios.get('api/players').then(response => {
        // console.log(response.data);
        this.players = response.data;
      })
    },
    createTeam: function() {
      console.log('create team...');
      console.log(this.pitcher);
      console.log(this.catcher);
      var params = {
        pitcher: this.pitcher,
        catcher: this.catcher,
        first_base: this.first_base,
        second_base: this.second_base,
        third_base: this.third_base,
        shortstop: this.shortstop,
        left_field: this.left_field,
        center_field: this.center_field,
        right_field: this.right_field
      }
      axios.post('/api/teams', params).then(response => {
        // this.pitcher.push

      })
      
    }
  }
};
</script>