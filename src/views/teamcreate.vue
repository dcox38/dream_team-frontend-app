<template>
<div>
  <select v-model='pitcher' @change='getPitcherName()'>
    <option>Select Pitcher</option>
    <option v-for='player in players' :value='player.id'>{{ player.last_name }}</option>
  </select>

  <p>Pitcher: {{pitcher}}</p>
</div>
</template>

<script>

import axios from "axios"

export default {
  data: function() {
    return {
      pitcher: '',
      players:[]
    };
  },
  created: function() {},
  methods: {
    getPitcherName: function() {
      console.log('adding a player...');
      axios.get('api/players').then(response => {
        console.log(response.data);
        this.players = response.data;
      })
    }
  }
};
</script>