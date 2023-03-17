import { createPinia } from "pinia"
import { useMapStore } from "./modules/map"

// 引入持久化插件
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'


const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
export { useMapStore }
export default pinia