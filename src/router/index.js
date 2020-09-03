import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import Teams from "../views/Teams.vue";
import TeamCreate from "../views/teamcreate.vue";
import Games from "../views/Games.vue";
import Winner from "../views/Winner.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  }, 
  {
    path: '/logout',
    name: 'logout',
    component: Logout
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }, 
  { 
    path: "/signup", 
    name: "signup", 
    component: Signup 
  },
  { 
    path: "/games", 
    name: "games", 
    component: Games 
  },
  { 
    path: "/teams", 
    name: "teams", 
    component: Teams 
  },
  { 
    path: "/winner", 
    name: "winner", 
    component: Winner 
  },
  { 
    path: "/teamcreate", 
    name: "teamcreate", 
    component: TeamCreate 
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
