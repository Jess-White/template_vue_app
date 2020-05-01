<template>
  <div class="users_new">
    
    <div class="container">
      <form v-on:submit.prevent="submit()">
        <h1>Create New User</h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>


        <div class="form-group">
          <label>First Name:</label> 
          <input type="text" class="form-control" v-model="firstName">
        </div>

        <div class="form-group">
          <label>Last Name:</label> 
          <input type="text" class="form-control" v-model="lastName">
        </div>

        <div class="form-group">
          <label>Email:</label>
          <input type="text" class="form-control" v-model="email">
        </div>

        <div class="form-group">
          <label>Title:</label>
          <input type="text" class="form-control" v-model="title">
        </div>

        <div class="form-group">
          <label>Password:</label>
          <input type="text" class="form-control" v-model="password">
        </div>
        <div class="form-group">
          <label>Password Confirmation:</label>
          <input type="text" class="form-control" v-model="passwordConfirmation">
        </div>
        <input type="submit" class="btn btn-primary" value="Submit">
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      first_name: "",
      last_name: "",
      email: "",
      title: "",
      password: "",
      passwordConfirmation: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        title: this.title,
        password: this.password,
        password_confirmation: this.passwordConfirmation
      };
      axios
        .post("/api/users", params)
        .then(response => {
          this.$router.push("/login");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>