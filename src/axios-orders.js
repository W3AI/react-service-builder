import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-service-builder.firebaseio.com/'
});

export default instance;