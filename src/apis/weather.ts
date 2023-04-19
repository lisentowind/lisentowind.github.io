import axios from "axios";
const { VITE_API_WEATHER_KEY } = import.meta.env;



/**
 * 获取城市地理位置信息
 * @param location 
 * @returns 
 */
export const getCityLocationInfo = (location: string) => axios.get<CityLocationInfo>("/geoapi", { params: { location, key: VITE_API_WEATHER_KEY } });

/**
 * 获取实时天气
 * @param LocationID 
 * @returns 
 */
export const getWeatherNow = (LocationID: string) => axios.get<NowWeatherInfo>("/weathernow/now", { params: { location: LocationID, key: VITE_API_WEATHER_KEY } });



/**
 * 获取7天天气
 * @param LocationID 
 * @returns 
 */
export const getWeather7D = (LocationID: string) => axios.get<City7DWeatherInfo>("/weathernow/7d", { params: { location: LocationID, key: VITE_API_WEATHER_KEY } });