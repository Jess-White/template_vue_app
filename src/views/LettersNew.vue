<template>
  <div class="letters-new">
    
    <div class="row my-4">
      <form class="col-6 offset-3"
        v-on:submit.prevent="createLetter()">
        <h1 class="text-center mb-5">New Letter</h1>
        <h3 class="text-center mb-5">Use this template to build the body of your letter.</h3>

        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>

        <div class="form-group">
          <label>Title: </label>
          <input class="form-control" type="text" v-model="title">
        </div>

        <div class="form-group">
          <label>Section Opener: </label>
          <input class="form-control" type="text" v-model="recipient_info">
        </div>

        <div class="form-group">
          <label>Section Body: </label>
          <input class="form-control" type="text" v-model="date">
        </div>

         <div class="form-group">
          <label>Section Closer: </label>
          <input class="form-control" type="text" v-model="bio">
        </div>

      </div>


  </div>
</template>

<style></style>

<script>
  var axios = require("axios");

  export default {
    data: function() {
      return {
        id: "",
        user_id: "",
        title: "",
        section_opener: "",
        section_body: "",
        section_closer: "",
        errors: []
      };
    },
    created: function() {},
    methods: {
      createLetter: function() {
        var clientParams = {
        user_id: this.userId,
        referee_id: this.refereeId,
        title: this.title,
        recipient_info: this.recipientInfo,
        date: this.date,
        section_background: this.sectionBackground,
        section_relationship: this.sectionRelationship,
        section_strengths: this.sectionStrengths,
        section_closer: this.sectionCloser
      };

      axios
        .post("/api/letters/", clientParams)
        .then(response => {
          this.$router.push("/letters/" + response.data.id);
        }).catch(error => {
          this.errors = error.response.data.
            errors;
          this.status = error.response.status;
        });
    }
  }
};


</script>