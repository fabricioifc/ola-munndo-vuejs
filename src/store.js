import Vue from "vue";
import Vuex from "vuex";
import { reject } from "any-promise";
import router from "./router";
const base_url = 'https://reqres.in';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {},
    users: [],
    token: localStorage.getItem('token') || '',
    status: ''
  },
  mutations: {
    setUsers(state, users) {
      state.users = users
    },
    auth_request(state){
      state.status = 'loading'
    },
    auth_success(state, token, user){
      state.status = 'success'
      state.token = token
      state.user = user
    },
    auth_error(state){
      state.status = 'error'
    },
    logout(state){
      state.status = ''
      state.token = ''
    },
  },
  actions: {
    fetchUsers(context) {
      console.log('fetchUsers - inicio')
      Vue.axios.get(`${base_url}/api/users?page=2`)
      .then((response) => {
        console.log(response.data.data)
        context.commit('setUsers', response.data.data)
      })
    },
    login({commit}, payload){
      return new Promise((resolve, reject) => {
          commit('auth_request')
          Vue.axios.post(`${base_url}/api/login`, payload)
          .then(resp => {
              const token = resp.data.token
              // const user = resp.data.user
              localStorage.setItem('token', token)
              Vue.axios.defaults.headers.common['Authorization'] = token
              commit('auth_success', token, payload)
              resolve(resp)
          })
          .catch(err => {
              commit('auth_error')
              localStorage.removeItem('token')
              reject(err)
          })
      })
    },
    logout({commit}){
      return new Promise((resolve, reject) => {
          commit('logout')
          localStorage.removeItem('token')
          delete Vue.axios.defaults.headers.common['Authorization']
          resolve()
      })
    }
  },
  getters: {
    users: state => state.users,
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status
  }
});
