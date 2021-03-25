import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-9a35a-default-rtdb.firebaseio.com/'
});

export default instance;