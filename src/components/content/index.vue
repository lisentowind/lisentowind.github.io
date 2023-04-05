<script lang='ts' setup>
import useTheme from '@/hooks/useTheme'
import router from '@/router'
import { useUserStore } from '@/store'
import UserLeft from './user-left/index.vue'

const { isDark } = useTheme()
const userStore = useUserStore()
const menuTabs = userStore.getMuenuList
const changeContent = (key: string | number) => {
  userStore.setSelectMenu(String(key))
  router.push({
    path: `/${menuTabs[Number(key) - 1]}`
  })
}
changeContent(userStore.selectMenu)
</script>

<template>
  <div class="content-blog" :class="isDark ? 'content-blog-dark' : ''">
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

.content-blog {
  height: calc(100vh - 60px);
  box-sizing: border-box;
  padding: 10px 30px;
  .dis-flex();
  background-color: #e8e8fd;

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
      background-color: #ee4d38;
      border-radius: 25px;
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
        width: 18%;
        height: 100%;
        background-color: #f8f8ff;
        box-sizing: border-box;
        padding: 50px 25px 25px;
      }

      &-left-dark {
        background-color: transparent;
        backdrop-filter: blur(10px);
      }

      &-right {
        width: 82%;
        height: 100%;
        background-color: #fcfcff;
      }

      &-right-dark {
        background-color: transparent;
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
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>