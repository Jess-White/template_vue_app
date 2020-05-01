<template>
  <div class="letters-index">

    <div class="container pt100 pb50">

    <h1 class="text-center mb-5">Letters</h1>
    <div class="row">



      <div class="col-md-4 mb50" v-for="letter in letters">

      <router-link v-bind:to="'/letters/' + letter.id">

        <div class="testimonial-card testimonial testimonial-col">

        <div class="card">

          <div class="card-body text-info">
            <h5 class="card-name">{{letter.title}}</h5>

            <h5 class="card-text">{{letter.user_id}}</h5>

            <p class="card-text">{{letter.section_opener}}</p>
            <p class="card-text">{{section_body}}</p>
            <p class="card-text">{{letter.section_closer}}
            </p>

            <p class="card-text">{{letter.created_at}}
            </p>
            <p class="card-text">{{letter.updated_at}}
            </p>
          </div>
        </div>

      </div>
        </router-link>
      </div>



    </div>

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
        letters: []
      };
    },
  created: function() {
    const token = localStorage.getItem("jwt");
    axios({
      url: "/api/letters/",
      method: "get",
      headers: {"Authorization": `Bearer ${token}`}
    })
    .then(response => {
      this.letters = response.data;
    });
  },
  methods: {}
};


</script>