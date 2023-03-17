<script setup lang="ts">
import useOpenlayers from '@/hooks/openlayers'
import useOperate from '@/hooks/operate'

const { onOlReady } = useOpenlayers()
const { createOperate } = useOperate()

onOlReady(() => {
  createOperate()
})
</script>

<template>
  <a-row id="LabelOperateTemplate" class="operate">
    <a-col id="Update" :span="24">编辑标签 </a-col>
    <a-col id="Move" :span="24">移动 </a-col>
    <a-col id="Delete" :span="24">删除 </a-col>
  </a-row>
</template>

<style lang="less" scoped>
.operate {
  position: absolute;
  z-index: 210;
  display: flex;
  align-content: space-between;
  width: 110px;
  height: 95px;
  padding: 6px;
  overflow: visible;
  color: white;
  background-color: white;
  border-radius: 6px;
  visibility: hidden;

  :deep(.arco-col) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 24px;
    padding: 0 6px 0 10px;
    font-size: 12px;
    background-color: #f7795d;
    border-radius: 3px;
    cursor: pointer;

    &:first-child {
      padding: 0 9px 0 10px;
      background-color: #24b6fa;
    }

    &:last-child {
      padding: 0 8px 0 10px;
      background-color: #1bd6a9;
    }
  }

  &::before {
    position: absolute;
    top: calc(50% - 12px);
    left: -21px;
    z-index: 90;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-right: 15px solid #fff;
    content: '';
  }
}
</style>
