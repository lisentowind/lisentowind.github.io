import { defineStore } from "pinia"
import { UserStore } from "./type.js"

export const useUserStore = defineStore("useUserStore", {
    state: (): UserStore => ({
        selectMenu: "1",
        menuList: ['user-info', 'work-experience', 'can-write']
    }),
    getters: {
        getMuenuList(state: UserStore) {
            return state.menuList
        }
    },
    // 持久化
    persist: true,
    actions: {
        setSelectMenu(val: string) {
            this.selectMenu = val
        }
    }
})