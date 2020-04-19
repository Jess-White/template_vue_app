import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '/..views/Dashboard.vue'

import Login from '../views/Login.vue'
import UsersNew from '../views/UsersNew.vue'

import LettersIndex from '../views/LettersIndex.vue';
import LettersEdit from '../views/LettersEdit.vue';
import LettersNew from '../views/LettersNew.vue';
import LettersShow from '../views/LettersShow.vue';

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {path: '/dashboard', name: 'dashboard', component: Dashboard},

  {path: '/users/new', name: 'users-new', component: UsersNew},

  {path: '/login', name: 'login', component: Login},
  {path: '/letters', name: 'letters-index', component: LettersIndex},
  {path: '/letters/new', name: 'letters-new', component: LettersNew},
  {path: '/letters/:id', name: 'letters-show', component: LettersShow},
  {path: '/letters/:id/edit', name: 'letters-edit', component: LettersEdit}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
