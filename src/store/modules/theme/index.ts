import { defineStore } from "pinia"
import { Theme } from "./type"

export const useThemeStore = defineStore("useThemeStore", {
    state: (): Theme => ({
        theme: "light",
        themeColor: "#409EFF",
        nowBack: "vanta"
    }),
    getters: {},
    actions: {
        toggleTheme(dark: boolean) {
            if (dark) {
                this.theme = 'dark';
                document.body.setAttribute('arco-theme', 'dark');
            } else {
                this.theme = 'light';
                document.body.removeAttribute('arco-theme');
            }
        },
        toggleNowBack(back: string) {
            this.nowBack = back;
        }
    }
})