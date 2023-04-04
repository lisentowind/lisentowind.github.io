import { createPinia } from "pinia"
import { useThemeStore } from "./modules/theme"

// 引入持久化插件
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'


const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
export { useThemeStore }
export default pinia