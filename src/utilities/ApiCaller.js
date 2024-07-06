import { base_url } from "./Constant";
import axios from 'axios';

const instance = axios.create()


instance.interceptors.request.use(function (config) {
    config.baseURL = base_url
    config.headers={
        "access-token":localStorage.getItem("userDetails")?JSON.parse(localStorage.getItem("userDetails")).token:"",
        ...config.headers
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});



export const ApiCaller = {
    getCall: (url) => {
        return instance({
            method: "GET",
            url: url
        })
    },
    postCall: (url,data,contentType="application/json") => {
        return instance({
            method: "POST",
            url: url,
            data:data,
            headers:{
                "Content-Type":contentType
            }
        })
    }
}


