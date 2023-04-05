<script lang='ts' setup>
import { IconSunFill, IconMoonFill } from '@arco-design/web-vue/es/icon'
import { useDark, useToggle, useFps } from '@vueuse/core'
import { useThemeStore } from '@/store'
import { Message } from '@arco-design/web-vue'
import useTheme from '@/hooks/useTheme'
import UserInfo from '../user-info/user-info.vue'

const fps = useFps()
const { isDark } = useTheme()
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
</script>

<template>
  <div class="menu-demo" :style="{ color: isDark ? '#fff' : '#000' }">
    <div>欢迎来到,<a-typography-text :strong="true">TingFeng</a-typography-text> 的世界!!!</div>
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
}
</style>