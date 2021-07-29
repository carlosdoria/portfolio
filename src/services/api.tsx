import axios from 'axios'

const ApiGithub = axios.create({
  baseURL: 'https://api.github.com/users/carlosdoria',
})

const ApiEmail = axios.create({
  baseURL: 'https://carlosdoria-portifolio.vercel.app/api',
})

export { ApiGithub, ApiEmail }
