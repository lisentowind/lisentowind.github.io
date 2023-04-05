<script lang='ts' setup>
import useTheme from '@/hooks/useTheme'
import { useUserStore } from '@/store'
import { IconUser, IconAttachment, IconPenFill } from '@arco-design/web-vue/es/icon'

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
  <div>
    <!-- 头像 -->
    <div class="user-left-avatar">
      <a-space :size="20" mb-60px>
        <img src="@/assets/images/logos.png" w60px h60px class="user-left-avatar-img" alt="" />
        <a-space direction="vertical" :class="isDark ? 'user-left-avatar-isDark' : ''">
          <span font-bold>我是一个小红花</span>
          <span>email</span>
        </a-space>
      </a-space>
      <a-tabs :position="'left'" @change="menuChange" :default-active-key="userStore.selectMenu">
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
    </div>
  </div>
</template>


<style lang='less' scoped>
.user-left-avatar {
  width: 100%;
  margin-bottom: 20px;
  color: black;
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
</style>