import Axios from 'axios'

export const axios = Axios.create({
  // baseURL: 'http://203.150.107.225:9000/'
  baseURL: 'http://localhost:9000/'
})

export default axios
