import axios from 'axios';

const instance= axios.create({
    baseURL: 'https://websiterobosub-default-rtdb.asia-southeast1.firebasedatabase.app/'
    // baseURL: ''
});

export default instance;
