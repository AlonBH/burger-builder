import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-dbce2.firebaseio.com/'
});

export default instance;