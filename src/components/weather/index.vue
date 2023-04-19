<script lang='ts' setup>
import { useRequest } from 'vue-request'
import { useToggle } from '@vueuse/core'
import { getCityLocationInfo, getWeatherNow } from '@/apis/weather.js'
import { useGetLocation } from '@/hooks/useGetLocation.js'
import useWeatherIcon from '@/hooks/useWeatherIcon.js'
import { Location20Filled, Location20Regular } from '@vicons/fluent'
import { Icon } from '@vicons/utils'
import { onMounted, ref, watch, computed } from 'vue'
import useTheme from '@/hooks/useTheme'
import { IconSync } from '@arco-design/web-vue/es/icon'
import preweatherModal from './components/preweather-modal.vue'
import { Message } from '@arco-design/web-vue'

const { isDark } = useTheme()
const [previewWeatherVisibel, setPreviewWeatherVisibel] = useToggle(false)
const { weatherIcon } = useWeatherIcon()
const { getIp, getCity } = useGetLocation()
const cityName = ref('')
const simpelCityInfo = ref<CityLocation>()
const weatherInfo = ref<NowWeatherInfo>()

// 查看天气详情
const weatherInfoModal = () => {
  if (simpelCityInfo.value && weatherInfo.value) {
    setPreviewWeatherVisibel(true)
    return
  }
  Message.info('天气详情正在加载中')
}

const { run: locationRun } = useRequest(getCityLocationInfo, {
  manual: true,
  defaultParams: [cityName.value],
  onSuccess: (res) => {
    if (res.status === 200) {
      simpelCityInfo.value = res.data.location[0]
      weatherRun(simpelCityInfo.value?.id as string)
    }
  }
})

// 查询实时天气
const { run: weatherRun } = useRequest(getWeatherNow, {
  manual: true,
  onSuccess: (res) => {
    if (res.status === 200) {
      weatherInfo.value = res.data
    }
  }
})
watch(
  () => cityName.value,
  (val) => {
    if (val !== '') locationRun(val)
  }
)

const icons = computed(() => {
  return weatherInfo.value?.now?.icon ? weatherIcon(weatherInfo.value?.now?.icon as string) : ''
})

onMounted(async () => {
  const ip = await getIp()
  const city = await getCity(ip)
  cityName.value = city
})
</script>

<template>
  <div class="weatherSpace" @click="weatherInfoModal">
    <a-space v-if="weatherInfo">
      <Icon size="20">
        <component :is="icons[0]" v-if="!isDark" />
        <component :is="icons[1]" v-if="isDark" />
      </Icon>
      <a-typography-text>
        <span class="cityName" :class="{ 'cityName-Dark': isDark ? true : false }">{{ simpelCityInfo?.name }}{{}}</span>
      </a-typography-text>
      {{ weatherInfo?.now && weatherInfo.now.temp + '°' }} {{ weatherInfo?.now && weatherInfo?.now.text }}
      <Icon size="20">
        <Location20Filled v-if="!isDark" />
        <Location20Regular v-if="isDark" />
      </Icon>
    </a-space>
    <a-space v-else>
      <Icon size="20">
        <component :is="icons[0]" v-if="!isDark" />
        <component :is="icons[1]" v-if="isDark" />
      </Icon>
      <a-typography-text>
        <span class="cityName" :class="{ 'cityName-Dark': isDark ? true : false }">天气加载中 </span><icon-sync spin />
      </a-typography-text>
    </a-space>

    <preweatherModal
      v-model="previewWeatherVisibel"
      :title="'天气详情'"
      :city-value="simpelCityInfo"
      :weather-value="weatherInfo"
    />
  </div>
</template>


<style lang='less' scoped>
.cityName {
  font-size: 14px;
  font-weight: 500;
  color: #000;
  margin-right: 5px;
}
.cityName-Dark {
  color: #fff;
}
.weatherSpace {
  box-sizing: border-box;
  border: 1px solid transparent;
  padding: 0 5px;
  border-radius: 15px;
  cursor: pointer;
  &:hover {
    backdrop-filter: blur(10px);
    border: 1px solid var(--color-border-2);
  }
}
</style>