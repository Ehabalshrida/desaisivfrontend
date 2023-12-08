import axios from 'axios';
const baseURL = process.env.REACT_APP_API_BASE_URL 
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




