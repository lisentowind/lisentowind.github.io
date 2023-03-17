import axios from 'axios';
import type { AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios'

const { VITE_API_MAP_URL } = import.meta.env

axios.interceptors.request.use(
    (res: InternalAxiosRequestConfig) => {
        if (/\/goodmap/.test(res.url!)) res.baseURL = VITE_API_MAP_URL
        return res
    },
    (error) => {
        return Promise.reject(error)
    }
)

axios.interceptors.response.use((res) => {
    return res
}
    , (err) => {
        return Promise.reject(err)
    });