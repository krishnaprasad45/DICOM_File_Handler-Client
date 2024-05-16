import axios from "axios";

const authURL = import.meta.env.VITE_APIURL;

export const userAxios = axios.create({
    baseURL: authURL,
    headers: {
        "Content-Type": "multipart/form-data",
        
    },
});
userAxios.interceptors.request.use((config) => {
    // const token = localStorage.getItem('usertoken');
    const token = "fgdfgd445";
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});



