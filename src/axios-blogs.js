import axios from 'axios';

const instance= axios.create({
    baseURL: 'https://auv-iitk.firebaseio.com/'
});

export default instance;
