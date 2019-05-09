<template>
  <div class="home">
    <b-container fluid>
      <UsersList :items="users" />
      <img alt="Vue logo" src="../assets/logo.png" />
      <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    </b-container>  
  </div>
</template>

<script>
// @ is an alias to /src
import {mapState, mapGetters} from 'vuex';
import HelloWorld from "@/components/HelloWorld.vue";
import UsersList from '@/components/UsersList.vue';

export default {
  name: "home",
  components: {
    HelloWorld,
    UsersList
  },
  data() {
    return {
    }
  },
  computed: mapState(['users']),
  created() {
    this.$store.dispatch('fetchUsers')
  },
};
</script>
