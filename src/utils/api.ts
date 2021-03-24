import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/';

const API = axios.create({
  baseURL: API_URL,
});

export default API;
