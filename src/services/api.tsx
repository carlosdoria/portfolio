import axios from 'axios';

const ApiGithub = axios.create({
  baseURL: 'https://api.github.com/users/carlosdoria',
});

export default ApiGithub;
