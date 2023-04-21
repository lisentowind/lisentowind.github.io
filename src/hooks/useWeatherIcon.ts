
import { WeatherSunny20Filled, WeatherSunny24Filled, Cloud48Filled, WeatherRain20Filled, WeatherRain20Regular, WeatherSnowflake20Filled, Cloud48Regular, WeatherCloudy20Filled, WeatherCloudy20Regular } from '@vicons/fluent'


export default function useWeatherIcon() {
    const weatherIcon = (icon: string) => {
        //    取出字符串第一位
        const first = icon.slice(0, 1)
        console.log(first)
        if (first === '1' && icon.slice(0, 3) === "0") {
            return [WeatherSunny20Filled, WeatherSunny24Filled]
        } else if (first === "1" && icon.slice(0, 3) <= "4" && icon.slice(0, 3) !== "0") {
            return [WeatherCloudy20Filled, WeatherCloudy20Regular]
        } else if (first === '3') {
            return [WeatherRain20Filled, WeatherRain20Regular]
        } else if (first === '4') {
            return [WeatherSnowflake20Filled, WeatherSnowflake20Filled]
        } else {
            return [Cloud48Filled, Cloud48Regular]
        }
    }
    return {
        weatherIcon
    }
}