<script lang='ts' setup>
import useTheme from '@/hooks/useTheme'
import router from '@/router'
import { useUserStore, useThemeStore } from '@/store'
import UserLeft from './user-left/index.vue'
import { loadFull } from 'tsparticles'
import { options } from './options.js'
import { onMounted, ref, watch, onBeforeUnmount, nextTick } from 'vue'
import CLOUDS from 'vanta/dist/vanta.clouds.min.js'
import * as THREE from "three";
import { Message } from '@arco-design/web-vue'


const particlesInit = async (engine: any) => {
  await loadFull(engine)
}
const { isDark } = useTheme()
const userStore = useUserStore()
const themeStore = useThemeStore()
const menuTabs = userStore.getMuenuList
const changeContent = (key: string | number) => {
  userStore.setSelectMenu(String(key))
  router.push({
    path: `/${menuTabs[Number(key) - 1]}`
  })
}
const optionsDark = {
  ...options,
  background: {
    color: {
      value: '#242424'
    }
  },
  particles: {
    ...options.particles,
    color: {
      value: '#ffda8c'
    },
    links: {
      color: '#ffda8c',
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1
    },
  }
}

changeContent(userStore.selectMenu)

// vanta
const vantaRef = ref()
const vantaEffect = ref<any>()
onMounted(() => {
  if (themeStore.nowBack === 'vanta') {
    if (vantaRef.value) initVanta(isDark.value)
  }
})

watch(() => isDark.value, (val) => {
  if (themeStore.nowBack === 'vanta' && vantaRef.value) {
    initVanta(val)
    return
  }
  if (vantaEffect.value) vantaEffect.value.destroy()
})

watch(() => themeStore.nowBack, (val) => {
  if (val === 'vanta') {
    nextTick(() => {
      if (vantaRef.value) {
        initVanta(isDark.value)
        return
      }
    })
  }
  if (vantaEffect.value) vantaEffect.value.destroy()
}, {
  deep: true
})


const initVanta = (val: boolean) => {
  try {
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
        cloudColor: 0x243555,
        sunColor: 0x0,
        sunGlareColor: 0x110603,
        sunlightColor: 0x484e6e
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
        minWidth: 200.00
      });
    }
  } catch (error) {
    Message.error('vanta初始化失败')
    throw new Error(error as string)
  }
}


onBeforeUnmount(() => {
  vantaEffect.value.destroy()
})

</script>

<template>
  <div class="content-blog" :class="isDark ? 'content-blog-dark' : ''">
    <Particles v-if="!isDark && themeStore.nowBack === 'Particles'" id="tsparticles" :particlesInit="particlesInit"
      :options="options" />
    <Particles v-else-if="isDark && themeStore.nowBack === 'Particles'" id="tsparticles" :particlesInit="particlesInit"
      :options="optionsDark" />
    <div v-else ref='vantaRef' class="box-vanta">
    </div>
    <div class="content-blog-box">
      <!-- 左侧盒子 -->
      <div w250px class="content-blog-box-left" :class="isDark ? 'content-blog-box-left-dark' : ''"></div>
      <!-- 悬空盒子 -->
      <div class="content-blog-box-top" :class="isDark ? 'content-blog-box-top-dark' : ''">
        <!-- 左侧信息 -->
        <div class="content-blog-box-top-left" :class="isDark ? 'content-blog-box-top-left-dark' : ''">
          <UserLeft @menuChange="changeContent" />
        </div>
        <!-- 右侧展示 -->
        <div class="content-blog-box-top-right" :class="isDark ? 'content-blog-box-top-right-dark' : ''">
          <router-view v-slot="{ Component }">
            <transition name="fade" mode="out-in">
              <keep-alive>
                <component :is="Component" />
              </keep-alive>
            </transition>
          </router-view>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang='less' scoped>
// 定义混合
.dis-flex {
  display: flex;
  align-items: center;
  justify-content: center;
}

.box-vanta {
  width: 100%;
  height: 100vh;
  position: absolute;
  top: -60px;
  left: 0;
}

.content-blog {
  height: calc(100vh - 60px);
  box-sizing: border-box;
  padding: 10px 30px;
  .dis-flex();
  background-color: #e8e8fd;
  position: relative;

  &-box {
    width: calc(100vw - 600px);
    min-width: 900px;
    height: calc(100vh - 100px);
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: relative;

    &-left {
      height: 100%;
      background-color: #ee4d38d4;
      border-radius: 25px;
      transition: color 0.3s;
    }

    &-left-dark {
      background-color: #ce4b3a9f;
    }

    &-top {
      height: 90%;
      width: 100%;
      position: absolute;
      top: 5%;
      left: 3.5%;
      border: 2px solid var(--color-border-2);
      border-radius: 26px;
      overflow: hidden;
      .dis-flex();
      justify-content: flex-start;

      &-left {
        width: 20%;
        height: 100%;
        background-color: #f8f8ff;
        box-sizing: border-box;
        padding: 50px 15px 25px;
      }

      &-left-dark {
        background-color: transparent;
        backdrop-filter: blur(10px);
      }

      &-right {
        width: 80%;
        height: 100%;
        background-color: #f8f8ff00;
      }

      &-right-dark {
        border-left: 1px solid var(--color-border-2);
      }
    }

    &-top-dark {
      border: 2px solid var(--color-border-2);
      box-shadow: 0 0 10px 0 var(--color-border-2);
    }
  }
}

.content-blog-dark {
  background-color: #272735;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

#tsparticles canvas {
  position: absolute !important;
  top: 60px !important;
  left: 0 !important;
  height: calc(100vh - 60px) !important;
}
</style>