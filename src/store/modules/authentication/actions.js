import axios from '../../../axios'
import router from '@/router'

export const login = ({ commit }, { username, password }) => {
  axios.post('api/v1/login',
    {
      username,
      password
    }
  ).then(response => {
    commit('login', response)
    localStorage.setItem('token', response.data.data.token)
    router.push({ name: 'api-document' })
    return response.data
  }).catch((error) => {
    commit('login', error.response.data)
  })
}
