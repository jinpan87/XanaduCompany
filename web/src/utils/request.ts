import axios from 'axios'

export default axios.create({
  timeout: 10000,
  baseURL: '192.168.159.128:3000/api'
})
