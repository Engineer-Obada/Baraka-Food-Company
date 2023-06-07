import axios from 'axios';

export default axios.create({
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*', 
  },
});
export  const baseURL = '';
// export  const baseURL = 'http://192.168.43.197:8080';