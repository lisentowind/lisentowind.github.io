<script lang='ts' setup>
import useTheme from '@/hooks/useTheme'

const { isDark } = useTheme()
</script>

<template>
  <div class="default-box default-box-all" :class="isDark ? 'default-box-dark' : ''">
    <!-- 头部插槽 -->
    <div class="default-box-top">
      <slot name="top" />
    </div>
    <!-- 内容插槽 -->
    <div class="default-box-content">
      <slot name="content" />
    </div>
    <!-- footer插槽 -->
    <div class="default-box-footer">
      <slot name="footer" />
    </div>
  </div>
</template>


<style lang='less' scoped>
.default-box-all {
  transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;
}
.default-box {
  width: 100%;
  height: 100%;
  background-color: transparent;
  backdrop-filter: blur(10px);
  box-sizing: border-box;
  padding: 60px;
  color: black;
}
.default-box-dark {
  color: white;
}

.default-box-top {
  width: 100%;
  height: 60px;
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
}

.default-box-content{
  font-size: 20px;
}
</style>