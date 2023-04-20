import axios from "axios";
const { VITE_API_WEATHER_KEY, VITE_API_WEATHER_LOCATION, VITE_API_WEATHER_URL } = import.meta.env;



/**
 * 获取城市地理位置信息
 * @param location 
 * @returns 
 */
export const getCityLocationInfo = (location: string) => axios.get<CityLocationInfo>(VITE_API_WEATHER_LOCATION, { params: { location, key: VITE_API_WEATHER_KEY } });

/**
 * 获取实时天气
 * @param LocationID 
 * @returns 
 */
export const getWeatherNow = (LocationID: string) => axios.get<NowWeatherInfo>(`${VITE_API_WEATHER_URL}/now`, { params: { location: LocationID, key: VITE_API_WEATHER_KEY } });



/**
 * 获取7天天气
 * @param LocationID 
 * @returns 
 */
export const getWeather7D = (LocationID: string) => axios.get<City7DWeatherInfo>(`${VITE_API_WEATHER_URL}/7d`, { params: { location: LocationID, key: VITE_API_WEATHER_KEY } });