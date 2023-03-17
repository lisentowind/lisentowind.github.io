<script setup lang="ts">
import { getMap } from '@/apis/map'
import useOpenlayers from '@/hooks/openlayers'
import { useMapStore } from '@/store'
import useOperate from '@/hooks/operate'
import { Message } from '@arco-design/web-vue'
import { storeToRefs } from 'pinia'
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { useRequest } from 'vue-request'
import accepted from '@/assets/images/accepted.png'
import LabelOperate from '@/components/openrate/index.vue'

const { initOpenlayers, olRenderLayer, clearEvent, onOlReady, addFeatures, onLabelClick } = useOpenlayers()
const {
  currentLabel,
  isMove,
  setCurrentLabel,
  setOperateStyle,
  toggleMove,
  onOperateUpdate,
  onOperateMove,
  onOperateDelete,
  hideOperate
} = useOperate()
const mapStore = useMapStore()

const mapRef = ref()

const { data, run: getMapInfo } = useRequest(getMap, {
  manual: true
})

const mapInfo = computed(() => data.value && data.value?.data.result)

const dataId = computed(() => {
  const { mapRasterData } = mapInfo.value!

  return mapRasterData.dataId
})

const options = computed(() => {
  const { center, mapListInfo, zoomBounds } = mapInfo.value!
  const { defualtLevel, maxLevel, minLevel } = mapListInfo

  return {
    center: center.split(',').map((item) => Number(item)),
    extent: zoomBounds,
    zoom: defualtLevel,
    maxZoom: maxLevel,
    minZoom: minLevel
  }
})

watch(mapInfo, (val) => {
  console.log(val)
  olRenderLayer(dataId.value, options.value)
})

onMounted(() => {
  setTimeout(() => {
    initOpenlayers(mapRef.value)
    getMapInfo(140)
  }, 100)
})

onOlReady(() => {
  Message.success({
    content: '地图加载成功',
    duration: 10000
  })
  addFeatures({
    id: 114514,
    name: '测试标签',
    openlayersID: `label`,
    position: [115.75250376892221, 28.61322083170181],
    icon: accepted
  })
})

const nowClickLabelId = ref<number>()
onLabelClick('label', (event: any) => {
  try {
    if (isMove.value) {
      Message.error({
        id: 'labelClickMenu',
        content: '该位置已有标签'
      })
      return
    }
    const { id, openlayersID, position } = event.properties
    if (currentLabel.value === id) return
    const [lon, lat] = position
    nowClickLabelId.value = id
    setOperateStyle({ top: 70, left: 125, position })
    setCurrentLabel(openlayersID)
  } catch (error) {
    throw Error(error as string)
  }
})

onUnmounted(() => {
  clearEvent()
  mapStore.resetMap()
})
</script>

<template>
  <div id="map" ref="mapRef" @contextmenu="(e) => e.preventDefault()">
    <LabelOperate />
  </div>
</template>

<style lang="less" scoped>
#map {
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: rgb(228 239 241);
}
</style>