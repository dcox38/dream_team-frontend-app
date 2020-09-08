<template>
  <div class="signup">

    <header style="background-image:url('img/23.jpg')" class="masthead text-center text-white">
      <div class="masthead-content">
        <div class="container">
          <h1 class="masthead-heading mb-0">Signup</h1>
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
          <form v-on:submit.prevent="submit()">
            <!-- <h1>Signup</h1> -->
            <ul>
              <li class="text-danger" v-for="error in errors">{{ error }}</li>
            </ul>
            <div class="form-group">
              <h2 class="display-12">Name:</h2>
              <input type="text" class="form-control" v-model="name">
            </div>
            <div class="form-group">
              <h2 class="display-12">Email:</h2>
              <input type="email" class="form-control" v-model="email">
            </div>
            <div class="form-group">
              <h2 class="display-12">Password:</h2>
              <input type="password" class="form-control" v-model="password">
            </div>
            <div class="form-group">
              <h2 class="display-12">Password:</h2>
              <input type="password" class="form-control" v-model="passwordConfirmation">
            </div>
            <input type="submit" class="btn btn-primary" value="Submit">
          </form>
       </div>    
     </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.passwordConfirmation
      };
      axios
        .post("/api/users", params)
        .then(response => {
          this.$router.push("/");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>