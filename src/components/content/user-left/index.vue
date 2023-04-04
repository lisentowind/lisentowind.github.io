<script lang='ts' setup>
import useTheme from '@/hooks/useTheme'

const { isDark } = useTheme()
</script>

<template>
    <div>
        <!-- 头像 -->
        <div class="user-left-avatar">
            <a-space :size="20">
                <img src="@/assets/images/logos.png" w60px h60px class="user-left-avatar-img" alt="">
                <a-space direction="vertical" :class="isDark ? 'user-left-avata-isDark' : ''">
                    <span>我是一个小红花</span>
                    <span>email</span>
                </a-space>
            </a-space>
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

.user-left-avatar-isDark {
    color: #fff;

    :deep(span) {
        color: #fff;
    }
}
</style>