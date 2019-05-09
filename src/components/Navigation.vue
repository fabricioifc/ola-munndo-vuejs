<template>
  <b-navbar toggleable="lg" type="dark" variant="light">
    <b-navbar-brand href="#">NavBar</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
          <b-nav-item><router-link to="/">Home</router-link></b-nav-item>
          <b-nav-item>
            <router-link to="/about">About</router-link>
          </b-nav-item>
          <b-nav-item>
            <span v-if="isLoggedIn"> <a @click="logout">Sair</a></span>
          </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'navigation',
  props: [],
  data() {
    return {
      authenticated: true
    }
  },
  computed : {
    isLoggedIn : function() {
      return this.$store.getters.isLoggedIn
    }
  },
  created: function () {
    this.$http.interceptors.response.use(undefined, function (err) {
      return new Promise(function (resolve, reject) {
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
          this.$store.dispatch(logout)
        }
        throw err;
      });
    });
  },
  methods: {
    logout: function() {
      this.$store.dispatch('logout')
      .then(() =>{
        this.$router.push('/login')
      })
    }
  }
}
</script>
