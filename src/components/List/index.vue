<script lang="ts" setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'

const createData = (length: number) => {
    return Object.keys(new Array(length).fill(''))
}
const demo = ref() // 外框盒子
const showNumber = 20 // 当前视窗展示条数
const itemHeight = 20 // 每一条内容的高度
const data = createData(1000) // 实际数据
let startNum = ref(0) // 当前视窗范围内第一个元素下标
let positionTop = ref(0) // 当前视窗范围内第一个元素偏移量

// 计算当前视窗内实际要渲染的内容
const activeList = computed(() => {
    const start = startNum.value
    return data.slice(start, start + showNumber)
})

// 滚动的时候计算当前视窗范围内第一个元素下标
const scrollEvent = (event: { target: { scrollTop: any; }; }) => {
    const { scrollTop } = event.target
    startNum.value = parseInt(String(scrollTop / itemHeight))
    positionTop.value = scrollTop
}

onMounted(() => {
    demo.value.addEventListener('scroll', () => {
        // 判断是否滚动到底部
        if (demo.value.scrollTop + demo.value.clientHeight >= demo.value.scrollHeight) {
            return
        }
        scrollEvent({ target: { scrollTop: demo.value.scrollTop } })
    })
})
onUnmounted(() => {
    if (!demo.value) return
    demo.value.removeEventListener('scroll', scrollEvent)
    demo.value = null
})
</script>

<template>
    <div ref="demo" class="scroll-box demo" :style="`height: ${showNumber * itemHeight}px;`">
        <div class="scroll-blank" :style="`height: ${data.length * itemHeight}px;`"></div>
        <div class="scroll-data" :style="`top: ${positionTop}px;`">
            <div v-for="(item) in activeList" :key="item" class="scroll-item">
                {{ item }}
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
.scroll-box {
    position: relative;
    overflow: auto;
    width: 400px;
    border: 1px solid rgb(0, 0, 0);
}

.scroll-data {
    position: absolute;
    width: 100%;
}

.scroll-item {
    height: 20px;
}
</style>
