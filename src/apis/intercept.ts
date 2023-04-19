import axios from 'axios';
import type { InternalAxiosRequestConfig } from 'axios'

const { VITE_API_MAP_URL, VITE_API_WEATHER_URL, VITE_API_WEATHER_LOCATION } = import.meta.env

axios.interceptors.request.use(
    (res: InternalAxiosRequestConfig) => {
        if (/\/goodmap/.test(res.url!)) res.baseURL = VITE_API_MAP_URL
        if (/\/weathernow/.test(res.url!)) res.baseURL = VITE_API_WEATHER_URL
        if (/\/geoapi/.test(res.url!)) res.baseURL = VITE_API_WEATHER_LOCATION
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