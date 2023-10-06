import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:59249/api/',
  headers: {
    'Content-Type': 'application/json',
  },
});
