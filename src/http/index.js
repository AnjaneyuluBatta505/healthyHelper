import axios from 'axios';

const http = axios.create({
  baseURL: 'https://arcane-lowlands-91874.herokuapp.com/',
  withCredentials: true,
});

export default http;
