<script lang='ts' setup>
import router from '@/router'
import TSXVue from '@/components/tsxComponents/btn-tsx.vue'
import { useDark, useToggle } from '@vueuse/core'
import { useThemeStore } from '@/store'
import useTheme from '@/hooks/useTheme'
import { IconSunFill, IconMoonFill } from '@arco-design/web-vue/es/icon';
import { Message } from '@arco-design/web-vue'

const { isDark } = useTheme()
const themeStore = useThemeStore()
const handleGo = (val: string) => {
  router.push(val)
}

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
      content: '切换主题成功',
    })
  } catch (error) {
    Message.error({
      id: 'changeTheme',
      content: '切换主题失败',
    })
  }
}
</script>

<template>
  <div>
    <TSXVue :msg="'我是在父组件被引用的'" :backBtn="true">
      <template #default>

        <a-space>
          <a-button type="primary" @click="handleGo('Map')">地图</a-button>
          <!-- 切換主題 -->
          <a-button type="text" @click="changeTheme" :shape="'circle'">
            <template #icon>
              <icon-sun-fill v-if="isDark" :style="{
                color: '#fff'
              }" />
              <icon-moon-fill v-else :style="{
                color: '#000'
              }" />
            </template>
          </a-button>
        </a-space>
      </template>
      <template #test>
        <span>具名插槽</span>
      </template>
      <template #scope="scope">
        <span>{{ scope.name }}</span>
      </template>
    </TSXVue>
  </div>
</template>


<style lang='less' scoped></style>