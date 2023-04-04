<script lang='ts' setup>
import { IconEdit } from '@arco-design/web-vue/es/icon';
</script>

<template>
    <a-avatar trigger-type="mask">
        <img alt="avatar" src="@/assets/images/logos.png" />
        <template #trigger-icon>
            <IconEdit />
        </template>
    </a-avatar>
</template>


<style lang='less' scoped></style>