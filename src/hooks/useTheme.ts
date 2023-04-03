import { computed } from 'vue';
import { useThemeStore } from "@/store"

export default function useTheme() {
    const themeStore = useThemeStore()
    const isDark = computed(() => {
        return themeStore.theme === 'dark';
    })
    return {
        isDark
    }
}