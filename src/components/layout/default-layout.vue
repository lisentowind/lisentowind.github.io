<script lang='ts' setup>
import Menu from "../menu/index.vue"
import Content from "../content/index.vue"

</script>

<template>
    <a-layout>
        <a-layout-header>
            <Menu />
        </a-layout-header>
        <a-layout-content>
            <Content />
        </a-layout-content>
    </a-layout>
</template>


<style lang='less' scoped></style>