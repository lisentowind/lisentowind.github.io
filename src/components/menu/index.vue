<script lang='ts' setup>
import { IconSunFill, IconMoonFill } from '@arco-design/web-vue/es/icon';
import { useDark, useToggle } from '@vueuse/core'
import { useThemeStore } from '@/store'
import { Message } from '@arco-design/web-vue'
import useTheme from '@/hooks/useTheme'
import UserInfo from "../user-info/user-info.vue"


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
    <div class="menu-demo" :style="{ color: isDark ? '#fff' : '#000' }">
        <div>欢迎来到,<a-typography-text :strong="true">听风</a-typography-text> 的世界!!!</div>
        <a-space :size="20">
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
    box-shadow: 0 0 10px 0 var(--color-border-3);
}
</style>