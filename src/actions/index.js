const actions = {
  [AUTH_REQUEST]: ({commit, dispatch}, user) => {
    return new Promise((resolve, reject) => {
      commit(AUTH_REQUEST)
      axios({url: 'auth', data: user, method: 'POST' })
      .then(resp => {
          const token = resp.data.token
          localStorage.setItem('token', token)
          // Add the following line:
          axios.defaults.headers.common['Authorization'] = token
          commit(AUTH_SUCCESS, resp)
          dispatch(USER_REQUEST)
          resolve(resp)
      })
      .catch(err => {
          commit(AUTH_ERROR, err)
          localStorage.removeItem('token')
          reject(err)
      })
    })
  },
  [AUTH_LOGOUT]: ({commit, dispatch}) => {
      return new Promise((resolve, reject) => {
          commit(AUTH_LOGOUT)
          localStorage.removeItem('token')
          // remove the axios default header
          delete axios.defaults.headers.common['Authorization']
          resolve()
      })
  }
}