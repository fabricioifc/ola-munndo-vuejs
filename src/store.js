import Vue from "vue";
import Vuex from "vuex";
const base_url = 'https://reqres.in';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
    token: localStorage.getItem('token') || '',
    status: ''
  },
  mutations: {
    setUsers(state, users) {
      state.users = users
    }
  },
  actions: {
    fetchUsers(context) {
      console.log('fetchUsers - inicio')
      Vue.axios.get(`${base_url}/api/users?page=2`).
      then((response) => {
        console.log(response.data.data)
        context.commit('setUsers', response.data.data)
      })
    },
    login(context, payload) {
      
    }
  },
  getters: {
    users: state => state.users
  }
});
