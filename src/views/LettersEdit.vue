<template>
  <div class="letters-edit">

    <div class="row">
      <form class="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-sm-10 offset-sm-1" v-on:submit.prevent="updateLetter()">
        <h1 class="text-center mb-5">Edit Letter</h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>

        <div class="form-group">
          <label>Title: </label>
          <input class="form-control" type="text" v-model="letter.title">
        </div>

        <div class="form-group">
          <label>Section Opener: </label>
          <input class="form-control" type="text" v-model="letter.section_opener">
        </div>

        <div class="form-group">
          <label>Section Body: </label>
          <input class="form-control" type="text" v-model="letter.section_body">
        </div>

        <div class="form-group">
          <label>Section Closer: </label>
          <input class="form-control" type="text" v-model="letter.section_closer">
        </div>
      </form>

      <button v-on:click="updateLetter()">Edit Letter</button>
    </div>
  </div>
</template>

<style>
</style>

<script>
  var axios = require("axios");

export default {
  data: function() {
    return {
      letter: {
        id: "",
        user_id: "",
        title: "",
        section_opener: "",
        section_body: "",
        section_closer: ""
      },
      errors: []
    };
  },
  created: function() {
    axios
      .get("/api/letters/" + this.$route.params.id)
      .then(response => {
        this.letter = response.data;
      });
  },
  methods: {
    updateLetter: function() {
      var clientParams = {
        user_id: this.letter.user_id,
        title: this.this.letter.title,
        section_opener: this.letter.section_opener,
        section_body: this.letter.section_body,
        section_closer: this.letter.section_closer
      };

    axios
    .patch("/api/referees/" + this.$route.params.id, clientParams)
    .then(response => {
      this.$router.push("/referees/" + this.$route.params.id);
    }).catch(error => {
      this.errors = error.response.data.errors;
    });
    }
  }
};
</script>