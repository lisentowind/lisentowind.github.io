import { createPinia } from "pinia"
import { useThemeStore } from "./modules/theme"
import { useUserStore } from "./modules/user"


// 引入持久化插件
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'


const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
export { useThemeStore, useUserStore }
export default pinia