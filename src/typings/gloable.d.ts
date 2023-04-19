interface HttpResponse<T = unknown> {
    status: number
    msg: string
    code: number
    data: T
    result: T
    statusText: string
    headers: RawAxiosResponseHeaders | AxiosResponseHeaders
    config: AxiosRequestConfig
}

/**
 * 当前天气信息
 * getWeatherNow()返回的数据类型
 * 详情参考 https://dev.qweather.com/docs/api/weather/weather-now/
 */
interface NowWeatherInfo {
    code: number; // API状态码，具体含义请参考状态码
    updateTime: string; // 当前API的最近更新时间
    fxLink: string; // 当前数据的响应式页面，便于嵌入网站或应用
    now: {
        obsTime: string; // 数据观测时间
        temp: number; // 温度，默认单位：摄氏度
        feelsLike: number; // 体感温度，默认单位：摄氏度
        icon: string; // 天气状况和图标的代码，图标可通过天气状况和图标下载
        text: string; // 天气状况的文字描述，包括阴晴雨雪等天气状态的描述
        wind360: number; // 风向360角度
        windDir: string; // 风向
        windScale: number; // 风力等级
        windSpeed: number; // 风速，公里/小时
        humidity: number; // 相对湿度，百分比数值
        precip: number; // 当前小时累计降水量，默认单位：毫米
        pressure: number; // 大气压强，默认单位：百帕
        vis: number; // 能见度，默认单位：公里
        cloud?: number; // 云量，百分比数值。可能为空
        dew?: number; // 露点温度。可能为空
    };
    refer: {
        sources?: string[]; // 原始数据来源，或数据源说明，可能为空
        license?: string[]; // 数据许可或版权声明，可能为空
    };

}


/**
 * 城市基础信息
 * getCityLocationInfo()返回的数据类型
 * 详情参考 https://dev.qweather.com/docs/api/geoapi/city-lookup/
 */

interface CityLocationInfo {
    code: number; // API状态码，具体含义请参考状态码
    location: CityLocation[]
    refer: {
        sources?: string[]; // 原始数据来源，或数据源说明，可能为空
        license?: string[]; // 数据许可或版权声明，可能为空
    }
}

interface CityLocation {
    name: string  // 地区/城市名称
    id: string  // 地区/城市ID
    lat: string  // 地区/城市纬度
    lon: string  // 地区/城市经度
    adm2: string  // 地区/城市的上级行政区划名称
    adm1: string  // 地区/城市所属一级行政区域
    country: string  // 地区/城市所属国家名称
    tz: string  // 地区/城市所在时区
    utcOffset: string  // 地区/城市目前与UTC时间偏移的小时数，参考详细说明
    isDst: string  // 地区/城市是否当前处于夏令时。1 表示当前处于夏令时，0 表示当前不是夏令时。
    type: string  // 地区/城市的属性
    rank: string  // 地区评分
    fxLink: string  // 该地区的天气预报网页链接，便于嵌入你的网站或应用
}


/**
 * getWeather7D  返回的数据类型
 * 详情参考 https://dev.qweather.com/docs/api/weather/weather-daily-forecast/
 */

interface City7DWeatherInfo {
    code: number; // API状态码，具体含义请参考状态码
    updateTime: string; // 当前API的最近更新时间
    fxLink: string; // 当前数据的响应式页面，便于嵌入网站或应用
    daily: City7DWeather[]
    refer: {
        sources?: string[]; // 原始数据来源，或数据源说明，可能为空
        license?: string[]; // 数据许可或版权声明，可能为空
    };
}

interface City7DWeather {
    fxDate: string  // 预报日期
    sunrise: string  // 日出时间，在高纬度地区可能为空
    sunset: string  // 日落时间，在高纬度地区可能为空
    moonrise: string  //  当天月升时间，可能为空
    moonset: string  // 当天月落时间，可能为空
    moonPhase: string  // 月相名称
    moonPhaseIcon: string  // 月相图标代码，图标可通过天气状况和图标下载
    tempMax: string  // 预报当天最高温度
    tempMin: string  // 预报当天最低温度
    iconDay: string  // 预报白天天气状况的图标代码，图标可通过天气状况和图标下载
    textDay: string  // 预报白天天气状况文字描述，包括阴晴雨雪等天气状态的描述
    iconNight: string  // 预报夜间天气状况的图标代码，图标可通过天气状况和图标下载
    textNight: string  // 预报晚间天气状况文字描述，包括阴晴雨雪等天气状态的描述
    wind360Day: string  //  预报白天风向360角度
    windDirDay: string  //  预报白天风向
    windScaleDay: string  // 预报白天风力等级
    windSpeedDay: string  // 预报白天风速，公里/小时
    wind360Night: string  // 预报夜间风向360角度
    windDirNight: string  // 预报夜间当天风向
    windScaleNight: string  // 预报夜间风力等级
    windSpeedNight: string  //  预报夜间风速，公里/小时
    humidity: string  // 预报当天总降水量，默认单位：毫米
    precip: string  // 紫外线强度指数
    pressure: string  // 相对湿度，百分比数值
    vis: string  // 大气压强，默认单位：百帕
    cloud: string  // 能见度，默认单位：公里
    uvIndex: string  // 云量，百分比数值。可能为空
}