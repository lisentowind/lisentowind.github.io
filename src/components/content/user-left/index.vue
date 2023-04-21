<script lang='ts' setup>
import useTheme from '@/hooks/useTheme'
import { useUserStore } from '@/store'
import { IconUser, IconAttachment, IconPenFill } from '@arco-design/web-vue/es/icon'
import MusicPlayer from '@/components/music-player/index.vue'

const userStore = useUserStore()
const emit = defineEmits<{
  (event: 'menuChange', val: string | number): void
}>()
const { isDark } = useTheme()

const menuChange = (key: string | number) => {
  emit('menuChange', key)
}
</script>

<template>
  <!-- 头像 -->
  <div class="user-left-avatar">
    <a-space :size="10">
      <img src="@/assets/images/logos.png" w60px h60px class="user-left-avatar-img" alt="" />
      <a-space direction="vertical" :class="isDark ? 'user-left-avatar-isDark' : ''">
        <span font-bold>我是小可爱</span>
        <span><a-tag>shisanlailin@outlook.com</a-tag></span>
      </a-space>
    </a-space>
    <a-tabs :position="'left'" @change="menuChange" :default-active-key="userStore.selectMenu" mt-60px>
      <a-tab-pane key="1">
        <template #title> <icon-user /> 个人信息 </template>
      </a-tab-pane>
      <a-tab-pane key="2">
        <template #title> <icon-attachment /> 工作经历 </template>
      </a-tab-pane>
      <a-tab-pane key="3">
        <template #title> <icon-pen-fill /> 掌握技能 </template>
      </a-tab-pane>
    </a-tabs>

    <MusicPlayer class="MusicPlayer" />
  </div>
</template>


<style lang='less' scoped>
.user-left-avatar {
  width: 100%;
  height: 100%;
  margin-bottom: 20px;
  color: black;
  position: relative;

  .user-left-avatar-img {
    border-radius: 10px;
  }
}

:deep(.arco-tabs-nav) {
  width: 100%;
}

:deep(.arco-tabs-tab) {
  font-size: 17px;
  margin: 25px 0 0 0;
}

:deep(.arco-space-item) {
  transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;
}

:deep(.arco-space-item) .user-left-avatar-isDark {
  color: #fff !important;
}

:deep(.arco-tabs-nav-vertical) {
  &::before {
    width: 0;
  }
}

:deep(.arco-tabs-nav-ink) {
  left: 0 !important;
  width: 3px;
  background-color: rgb(var(--orange-6));
}

:deep(.arco-tabs-tab-active),
:deep(.arco-tabs-tab-active:hover) {
  color: rgb(var(--orange-6));
}

.MusicPlayer {
  position: absolute;
  bottom: 0px;
  width: 250px !important;
}
</style>