<script lang='ts' setup>
import useTheme from '@/hooks/useTheme'
import defaultLayout from '@/components/layout/default-layout.vue'

const { isDark } = useTheme()
</script>

<template>
  <div h100vh overflow-hidden class="box-top" :class="isDark ? 'theme-color' : 'theme'">
    <defaultLayout />
  </div>
</template>


<style lang='less' scoped>
.box-top {
  min-width: 1600px !important;
}

.theme {
  background-color: #fff;
  transition: all 0.5s;
}

.theme-color {
  background-color: #17171a;
  transition: all 0.5s;
}
</style>