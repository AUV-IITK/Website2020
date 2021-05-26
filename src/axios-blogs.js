import axios from 'axios';

const instance= axios.create({
    baseURL: 'https://auv-iitk.firebaseio.com/'
    // baseURL: ''
});

export default instance;
