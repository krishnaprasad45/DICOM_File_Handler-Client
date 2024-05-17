import axios from "axios";

const authURL = import.meta.env.VITE_APIURL;

export const userAxios = axios.create({
    baseURL: authURL,
    headers: {
        "Content-Type": "application/json", // Change to JSON content type
    },
});

userAxios.interceptors.request.use((config) => {
    const token = "fgdfgd445";
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});
