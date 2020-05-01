<template>
  <div class="dashboard">
    <h1>{{ message }}</h1>

    <router-link to="/letters/new">Start New Letter</router-link></li>

    <router-link to="/letters/index">View Saved Letters</router-link></li>
  </div>



</template>

<style>
</style>

<script>
export default {
  data: function() {
    return {
      message: "View saved letters, or start a new letter!"
    };
  },
  created: function() {
    axios
      .get("/api/users" + this.user_id)
      .then(response=> {
        this.users = response.data;
      })
  },
  methods: {}
};
</script>