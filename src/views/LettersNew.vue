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
          <input class="form-control" type="text" v-model="sectionOpener">
        </div>

        <div class="form-group">
          <label>Section Body: </label>
          <input class="form-control" type="text" v-model="sectionBody">
        </div>

         <div class="form-group">
          <label>Section Closer: </label>
          <input class="form-control" type="text" v-model="sectionCloser">
        </div>
        <input class="btn btn-info" type="submit" value="Create Letter">
      </form>

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
        userId: "",
        title: "",
        sectionOpener: "",
        sectionBody: "",
        sectionCloser: "",
        errors: []
      };
    },
    created: function() {},
    methods: {
      createLetter: function() {
        var clientParams = {
        user_id: this.userId,
        title: this.title,
        section_opener: this.sectionOpener,
        section_body: this.sectionBody,
        section_closer: this.sectionCloser
      };
      const token = localStorage.getItem("jwt")

      axios ({
        url: "/api/letters/", 
        data: clientParams,
        method: "post",
        headers: {"Authorization": `Bearer ${token}`}
        })
        .then(response => {
          this.$router.push("/letters");
        }).catch(error => {
          this.errors = error.response.data.
            errors;
          this.status = error.response.status;
        });
      axios
        // .get("/api/users" + this.user_id)
        .get("/api/users/" + 1)
        .then(response=> {
          this.users = response.data;
        })
    }
  }
};


</script>