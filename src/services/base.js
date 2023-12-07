import axios from 'axios';
const baseURL = process.env.BASE_URL //'server_side_baseURL'
const API = axios.create({ baseURL });

API.interceptors.response.use(
    (response) => {
        return response;
    }
    ,
    error => {


        return Promise.reject(error);
    }
)


export default API




