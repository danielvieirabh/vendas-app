import axios, { AxiosInstance } from "axios"; // AxiosInstance  e um export 

export const httpCLient: AxiosInstance = axios.create({
    baseURL: "http://localhost:8084/"
}) 

httpCLient.post() //Passar url , json e parametros