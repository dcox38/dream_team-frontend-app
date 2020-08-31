<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <p>name: <input v-model="newTeamName" type="text"></p>
    <p>pitcher: <input v-model="newTeamPitcher" type="text"></p>
    <p>catcher: <input v-model="newTeamCatcher" type="text"></p>
    <p>first_base: <input v-model="newTeamFirstBase" type="text"></p>
    <p>second_base: <input v-model="newTeamSecondBase" type="text"></p>
    <p>third_base: <input v-model="newTeamThirdBase" type="text"></p>
    <p>shortstop: <input v-model="newTeamShortstop" type="text"></p>
    <p>left_field: <input v-model="newTeamLeftField" type="text"></p>
    <p>center_field: <input v-model="newTeamCenterField" type="text"></p>
    <p>right_field: <input v-model="newTeamRightField" type="text"></p>

    <button v-on:click="addTeam()">Create new team</button>

  </div>
</template>

<style>
</style>

<script>

import axios from "axios"

export default {
  data: function() {
    return {
      message: "Create a new team",
      newTeamName: "",
      newTeamPitcher: "",
      newTeamCatcher: "",
      newTeamFirstBase: "",
      newTeamSecondBase: "",
      newTeamThirdBase: "",
      newTeamShortstop: "",
      newTeamLeftField: "",
      newTeamCenterField: "",
      newTeamRightField: "",
    };
  },
  created: function() {},
  methods: {
    addTeam: function() {
      console.log('adding a team');
      console.log(this.newTeamName);

      var params = {
        name: this.newTeamName,
        pitcher: this.newTeamPitcher,
        catcher: this.newTeamCatcher,
        first_base: this.newTeamFirstBase,
        second_base: this.newTeamSecondBase,
        third_base: this.newTeamThirdBase,
        shortstop: this.newTeamShortstop,
        left_field: this.newTeamLeftField,
        center_field: this.newTeamCenterField,
        right_field: this.newTeamRightField,
        
      }

      axios.post('api/teams', params).then(response => {
        console.log(response.data);
        this.teams.push(response.data);
      })
    }
  }
};
</script>

