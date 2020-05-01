<template>
  <div class="about">
    <h1>I built this app as a way to practice templating using Vue.js and Ruby on Rails. Enjoy!</h1>
    <div>
    <ul>
      <li><router-link :to="{ path: '/login' }">Log In</router-link></li>
      <li><router-link :to="{ path: '/users/new' }">Sign Up</router-link></li>
    </ul>
  </div>
  </div>

</template>


