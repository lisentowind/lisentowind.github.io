<script lang='ts' setup>
import Modal from '@/components/modal/index.vue'
import { useVModel } from '@vueuse/core'
import { getWeather7D } from '@/apis/weather.js'
import { useRequest } from 'vue-request'
import dayjs from 'dayjs'
import { ref, watch } from 'vue'

interface WeatherProps {
  modelValue: boolean
  title: string
  cityValue: CityLocation
  weatherValue: NowWeatherInfo
}
interface Emits {
  (e: 'update:modelValue', val: any): void
}
const emit = defineEmits<Emits>()

const props = withDefaults(defineProps<WeatherProps>(), {
  modelValue: false,
  title: '天气详情',
  cityValue: () => ({} as CityLocation),
  weatherValue: () => ({} as NowWeatherInfo)
})
const visible = useVModel(props, 'modelValue', emit)
const werather7D = ref<City7DWeather[]>()

// 获取7天天气
const { run: weather7DRun } = useRequest(getWeather7D, {
  manual: true,
  onSuccess: (res) => {
    if (res.status === 200) {
      werather7D.value = res.data.daily
    }
  }
})

watch(
  () => props.cityValue,
  (val) => {
    if (val.id) weather7DRun(val.id)
  }
)
</script>

<template>
  <Modal class="modal-pre" v-model="visible" :title="props.title" :verify="false" :footer="false" :width="650">
    <div class="header-pre">
      <a-space direction="vertical">
        <a-typography-text>{{ cityValue.name }} </a-typography-text>
        <span style="font-size: 30px">{{ weatherValue.now.temp + '°' }} </span>
      </a-space>

      <a-space direction="vertical">
        <a-typography-text>{{ weatherValue.now.text }} </a-typography-text>
        <a-typography-text>{{ '大气压强：' + weatherValue.now.pressure + 'Pa' }} </a-typography-text>
        <a-typography-text>{{ '体感温度：' + weatherValue.now.feelsLike + '°' }} </a-typography-text>
      </a-space>
    </div>

    <!-- 7天 -->
    <div class="footer-pre">
      <a-space class="footer-pre">
        <a-space v-for="item in werather7D" :key="item.wind360Day" direction="vertical" :align="'center'" :size="20">
          <a-typography-text>{{ dayjs(item.fxDate).format('MM-DD') }} </a-typography-text>
          <a-typography-text>{{ item.textDay }} </a-typography-text>
          <a-typography-text>{{ `${item.tempMin}'°' /${item.tempMax}'°'` }} </a-typography-text>
        </a-space>
      </a-space>
    </div>
  </Modal>
</template>


<style lang='less' scoped>
.header-pre {
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 10px;
}
.footer-pre {
  margin-top: 5px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>