import { useThemeStore } from '@/store'
import CLOUDS from 'vanta/dist/vanta.clouds.min.js'
import * as THREE from "three";
import { Message } from '@arco-design/web-vue'


export default function useVanta() {
    /**
     * 初始化vanta
     * @param val  夜间还是白天的vanta样式
     * @param vantaEffect   vanta实例
     * @param vantaRef  vanta的dom
     * @returns 
     */
    const innitVantaFun = (val: boolean, vantaEffect: any, vantaRef: any) => {
        try {
            const themeStore = useThemeStore()
            if (!vantaEffect) return
            if (vantaEffect.value) vantaEffect.value.destroy()
            if (val && themeStore.nowBack === 'vanta') {
                vantaEffect.value = CLOUDS({
                    el: vantaRef.value,
                    THREE: THREE,
                })
                vantaEffect.value.setOptions({
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.00,
                    minWidth: 200.00,
                    skyColor: 0x0,
                    cloudColor: 0x4d4d91,
                    cloudShadowColor: 0x0,
                    sunColor: 0x0,
                    sunGlareColor: 0xf0f0f,
                    sunlightColor: 0x8070b1,
                    speed: 1.30
                });
            } else if (!val && themeStore.nowBack === 'vanta') {
                vantaEffect.value = CLOUDS({
                    el: vantaRef.value,
                    THREE: THREE,
                })
                vantaEffect.value.setOptions({
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.00,
                    minWidth: 200.00,
                    skyColor: 0x6db1cd,
                    cloudColor: 0xa6a6be,
                    cloudShadowColor: 0x2a3b50,
                    sunColor: 0xff6800,
                    sunGlareColor: 0xff3800,
                    sunlightColor: 0xff8230,
                    speed: 1.30
                });
            }
        } catch (error) {
            Message.error('vanta初始化失败')
            throw new Error(error as string)
        }
    }
    return {
        innitVantaFun
    }
}