<template>
  <div class="home">

    <div>
      <label class="typo__label">Select with search</label>
      <multiselect v-model="value" :options="options" :custom-label="nameWithLang" placeholder="Select one" label="name" track-by="name"></multiselect>
      <pre class="language-json"><code>{{ value  }}</code></pre>
    </div>

  </div>
</template>

<style>
</style>

<script>

import axios from "axios"
import Multiselect from 'vue-multiselect'

export default {
  components: {
    Multiselect
  },
  data: function() {
    return {
      value: { name: 'Vue.js', language: 'JavaScript' },
      options: [
        { name: 'Vue.js', language: 'JavaScript' },
        { name: 'Rails', language: 'Ruby' },
        { name: 'Sinatra', language: 'Ruby' },
        { name: 'Laravel', language: 'PHP' },
        { name: 'Phoenix', language: 'Elixir' }
      ]
    }
  },
  created: function() {},
  methods: {
    addTeam: function() {
      console.log('adding a team');

      var params = {
        name: "Rockies",
        pitcher: "5",
        catcher: "7",

      }

      axios.post('api/teams', params).then(response => {
        console.log(response.data);
        this.teams.push(response.data);
      })
    },
    nameWithLang ({ name, language }) {
      return `${name} — [${language}]`
    }
  }
};
</script>

