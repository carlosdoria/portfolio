import axios from 'axios'

const ApiGithub = axios.create( {
  baseURL: 'https://api.github.com/users/carlosdoria',
} )

const ApiEmail = axios.create( {
  baseURL: 'https://carlos-email.herokuapp.com/',
} )

export { ApiGithub, ApiEmail }
