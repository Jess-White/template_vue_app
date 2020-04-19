<template>
  <div class="letters-show">
    
     <div class="row">
       <div class="col-md-6">
        <h4 class="text-center">Title: {{letter.title}}</h4>
        <h4 class="text-center">Section Opener: {{letter.section_opener}}</h4>
        <h4 class="text-center">Section Body: {{letter.section_body}}</h4>
        <h4 class="text-center">Section Closer: {{letter.section_closer}}</h4>
      </h4>
       </div>
       <div>
          <router-link class="btn btn-info m-2" v-bind:to="'/letters/' + letter.id + '/edit'">Edit</router-link>
          <button class="btn btn-info m-2" v-on:click="destroyLetter()">Delete</button>
        </div>
     </div> 


  </div>
</div>
</template>

<style></style>

<script>
var axios = require('axios');

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
          this.letter = response.data
        });
    },
    methods: {
      destroyLetter: function() {
        axios
          .delete("/api/letters/" + this.$route.params.id)
          .then(response => {
            this.$router.push("/letters");
          });
      }
    },
    watch: {
      $route: function() {
        axios
        .get("/api/letters/" + this.$route.params.id)
        .then(response => {
          this.letters = response.data;
        });
      }  
    }
};
</script>