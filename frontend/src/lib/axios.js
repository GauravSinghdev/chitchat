import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://be-chitchat.supxdevs.com/api",
    withCredentials: true
})