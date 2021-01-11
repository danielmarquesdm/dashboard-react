import axios from 'axios';

// https://valeaccess-cf295.firebaseio.com
const api = axios.create({
  baseURL: 'https://my-json-server.typicode.com/maurolcsilva/transactionsapi',
});

export default api;
