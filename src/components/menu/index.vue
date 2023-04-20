<script lang='ts' setup>
import { useNow } from '@vueuse/core'
import { IconSunFill, IconMoonFill } from '@arco-design/web-vue/es/icon'
import { useDark, useToggle, useFps } from '@vueuse/core'
import { useThemeStore } from '@/store'
import { Message } from '@arco-design/web-vue'
import useTheme from '@/hooks/useTheme'
import UserInfo from '../user-info/user-info.vue'
import Weather from '../weather/index.vue'
import dayjs from 'dayjs'

const { now } = useNow({ controls: true })
const fps = useFps()
const { isDark, changeBack } = useTheme()
const themeStore = useThemeStore()
const isDarks = useDark({
  selector: 'body',
  attribute: 'arco-theme',
  valueDark: 'dark',
  valueLight: 'light',
  storageKey: 'arco-theme',
  onChanged(dark: boolean) {
    themeStore.toggleTheme(dark)
  }
})
const toggleTheme = useToggle(isDarks)
const changeTheme = () => {
  try {
    toggleTheme()
    Message.success({
      id: 'changeTheme',
      content: '切换主题成功'
    })
  } catch (error) {
    Message.error({
      id: 'changeTheme',
      content: '切换主题失败'
    })
  }
}
const changeBacks = (val: string) => {
  try {
    changeBack(val)
    Message.success({
      id: 'changeBack',
      content: '切换背景成功'
    })
  } catch (error) {
    Message.error({
      id: 'changeBack',
      content: '切换背景失败'
    })
  }
}
</script>

<template>
  <div class="menu-demo" :style="{ color: isDark ? '#fff' : '#000' }">
    <div>
      <a-space :size="55">
        <span>欢迎来到,<a-typography-text :strong="true">TingFeng</a-typography-text> 的世界!!!</span>
        <Weather />

        <span>{{ dayjs(now).format('YYYY-MM-DD HH:mm:ss') }}</span>
      </a-space>
    </div>
    <a-space :size="20">
      <span :style="{ color: isDark ? '#fff' : '#000' }">FPS: {{ fps }}</span>
      <a-button type="text" @click="changeTheme" :style="{ color: isDark ? '#fff' : '#000' }">
        <template #icon>
          <icon-sun-fill
            v-if="isDark"
            :style="{
              color: '#fff'
            }"
          />
          <icon-moon-fill
            v-else
            :style="{
              color: '#000'
            }"
          />
        </template>
        主题
      </a-button>

      <a-button
        type="text"
        v-if="themeStore.nowBack === 'Particles'"
        @click="changeBacks('vanta')"
        :style="{ color: isDark ? '#fff' : '#000' }"
      >
        切换动态背景
      </a-button>
      <a-button
        type="text"
        v-else-if="themeStore.nowBack === 'vanta'"
        @click="changeBacks('Particles')"
        :style="{ color: isDark ? '#fff' : '#000' }"
      >
        切换动态背景
      </a-button>
      <UserInfo />
    </a-space>
  </div>
</template>


<style lang='less' scoped>
.menu-demo {
  box-sizing: border-box;
  padding: 10px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 99;
  background-color: transparent;
}
</style>