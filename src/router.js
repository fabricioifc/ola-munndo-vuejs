import Vue from "vue";
import Router from "vue-router";
import store from './store.js'
import Home from "./views/Home.vue";
import About from './views/About.vue';
import Login from './views/Login.vue';

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About,
      meta: { 
        requiresAuth: true
      }
    },
    {
      path: "/login",
      name: "login",
      component: Login
    }
  ]
});

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/login') 
  } else {
    next() 
  }
})

export default router;