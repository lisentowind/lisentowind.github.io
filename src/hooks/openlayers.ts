import { useMapStore } from '@/store'
import _ from 'lodash'
import { Handler } from 'mitt' // 触发器
import Feature from 'ol/Feature' // 矢量要素
import Point from 'ol/geom/Point' // 点
import { Tile, Vector } from 'ol/layer' // 图层
import Map from 'ol/Map' // 地图     
import 'ol/ol.css' // 地图样式
import type { Options as OverlayOptions } from 'ol/Overlay' // 地图覆盖物
import Overlay from 'ol/Overlay' // 地图覆盖物
import { fromLonLat, toLonLat, transformExtent } from 'ol/proj' // 坐标转换   
import VectorSource from 'ol/source/Vector' // 矢量源
import XYZ from 'ol/source/XYZ' // 瓦片源
import { Fill, Icon, Stroke, Style, Text } from 'ol/style' // 样式
import View from 'ol/View' // 视图
import { storeToRefs } from 'pinia' // pinia
import { computed, nextTick } from 'vue' // vue

const { VITE_API_MAP_URL } = import.meta.env

type ClearList = 'CLICK' | 'MOUSEMOVE' | 'RIGHTCLICK'

/**
 * 加载完成
 */
const LOADEND = Symbol('LOADEND')

/**
 * 左键点击
 */
const CLICK = 'CLICK'

/**
 * 左键点击
 */
const RIGHTCLICK = 'RIGHTCLICK'

/**
 * 鼠标移动
 */
const MOUSEMOVE = 'MOUSEMOVE'

/**
 * 点击feature图标
 */
const CLICKLABEL = Symbol('CLICKLABEL')

/**
 * 地图配置
 */
export default function useOpenlayers() {
    const mapStore = useMapStore()
    const { mapEmitter, currentKey } = storeToRefs(mapStore)
    const { setOlMap, setTileLayer, setVectorLayer } = mapStore

    const olMap = computed(() => mapStore.olMap) // 地图
    const vectorLayer = computed(() => mapStore.vectorLayer)    // 矢量源（图标）图层
    const tileLayer = computed(() => mapStore.tileLayer)    // 矢量源（瓦片）图层

    /**
     * 初始化地图
     * @param target 地图容器
     */
    const initOpenlayers = async (target: HTMLElement | string) => {
        try {
            console.log(target)
            // 初始化地图
            if (!target) return

            // 设置瓦片渲染方法 矢量源（图标）图层
            setVectorLayer(new Vector({ source: new VectorSource() }))

            //设置图层 矢量源（瓦片）图层
            setTileLayer(new Tile({ source: new XYZ() }))

            //  设置地图实例
            await setOlMap(new Map({ target, layers: [tileLayer.value, vectorLayer.value] }))

            // 移动事件
            olMap.value.on('pointermove', (event: any) => mapEmitter.value.emit(`${MOUSEMOVE}${currentKey.value}`, event))

            // 点击事件
            olMap.value.on(
                'click',
                _.throttle(async (event: any) => {
                    const { coordinate } = event
                    const feature = await olMap.value.forEachFeatureAtPixel(event.pixel, (feature: any) => feature)

                    if (feature) {
                        console.log("标签点击")
                        const { geometry, properties } = feature.getProperties()
                        mapEmitter.value.emit(CLICKLABEL, { ...event, properties, coordinate: [...geometry.flatCoordinates] })
                        return
                    }
                    console.log("地图点击", toLonLat(coordinate))
                    mapEmitter.value.emit(`${CLICK}${currentKey.value}`, { ...event, coordinate, position: toLonLat(coordinate) })
                }, 500)
            )
            window?.addEventListener('contextmenu', () => {
                mapEmitter.value.emit(`${RIGHTCLICK}${currentKey.value}`)
            })

            console.log("地图实例", olMap.value)
            nextTick(() => {
                olMap.value.updateSize()
            })

        } catch (error) {
            throw Error(error as string)
        }
    }

    /**
     * 渲染图层
     * @param dataId 
     * @param options 
     */
    const olRenderLayer = (dataId: number, options: RenderOptions) => {
        try {
            console.log("地图数据", dataId, options)
            tileLayer.value.setSource(
                new XYZ({
                    crossOrigin: 'anonymous',
                    tileUrlFunction(coord) {
                        const z = coord[0]
                        const x = coord[1]
                        const y = 2 ** z + -coord[2] - 1
                        return `${VITE_API_MAP_URL}/goodmap/getTile/${z}/${x}/${y}.png?dataId=${dataId}`
                    }
                })
            )

            olMap.value.setView(
                new View({
                    ...options,
                    center: fromLonLat(options.center),
                    extent: transformExtent(options.extent, 'EPSG:4326', 'EPSG:3857')
                })
            )

            olMap.value.once('rendercomplete', (event: any) => mapEmitter.value.emit(LOADEND, event))
        } catch (error) {
            throw Error(error as string)
        }
    }

    /**
     * 渲染完毕
     * @param handler 
     */
    const onOlReady = (handler: Handler) => {
        mapEmitter.value.on(LOADEND, () => {
            handler(null)
            mapEmitter.value.off(LOADEND)
        })
    }


    /**
   * @description 渲染Overlay类型的标签
   * @date 29/10/2022
   * @param {OverlayOptions} options
   * @param {*} [row]
   */
    const addOverlay = (options: OverlayOptions, row?: any) => {
        try {
            if (!olMap.value) return
            const element = document.getElementById(options?.id as string) as HTMLElement
            const overlay = new Overlay({
                offset: [-90, -138],
                autoPan: true, // 是否在添加后把视角移动过去
                element,
                ...options,
                position: fromLonLat(options.position!)
            })

            overlay?.setProperties({ properties: row })

            olMap.value.addOverlay(overlay)

            if (!row) return

            element.addEventListener('click', () => {
                const event = olMap.value.getOverlayById(`${row.openlayersID}`).getProperties()
                mapEmitter.value.emit(CLICKLABEL, { ...event })
            })
        } catch (error) {
            throw Error(error as string)
        }
    }


    /**
  * @description 设置Overlay方法渲染的标签坐标
  * @date 29/10/2022
  * @param {OverlayPositionData} { id, position - 经纬度坐标, coordinate - openlayers内的坐标 }
  */
    const setOverlayPosition = async ({ id, position, coordinate }: OverlayPositionData) => {
        try {
            if (!olMap.value) return
            const overlay = await olMap.value.getOverlayById(`${id}`)

            const Coordinate = coordinate || fromLonLat(position!)

            if (overlay) overlay.setPosition(Coordinate)
        } catch (error) {
            throw Error(error as string)
        }
    }


    /**
   * @description 渲染一个或多个Feature类型的标签
   * @date 29/10/2022
   * @param {(any | any[])} features
   */
    const addFeatures = (features: any | any[]) => {
        try {
            const featureSource = vectorLayer.value.getSource()

            featureSource.addFeatures(
                (Array.isArray(features) ? features : [features]).map((item) => {
                    const featureCoordinate = new Point(fromLonLat(item.position))
                    const currentFeature = new Feature({
                        geometry: featureCoordinate
                    })

                    currentFeature.setId(item.openlayersID)

                    currentFeature.setProperties({ properties: item })

                    currentFeature.setStyle(
                        new Style({
                            image: new Icon({
                                src: item.icon,
                                offsetOrigin: 'top-left',
                                offset: [-50, 1],
                                size: [200, 210],
                                imgSize: [100, 110],
                                scale: 0.4,
                                crossOrigin: 'anonymous'
                            }),
                            text: new Text({
                                textAlign: 'center', // 位置
                                textBaseline: 'middle', // 基准线 中间
                                font: `400 12px PingFang SC`, // 文字样式
                                offsetY: -60, // 偏移量
                                offsetX: -5, // 偏移量
                                text: `${item.name || item.openlayersID}`, // 文本内容
                                fill: new Fill({ color: '#333' }), // 文本填充样式（即文字颜色）
                                backgroundFill: new Fill({ color: '#fff' }), // 文本背景填充样式
                                backgroundStroke: new Stroke({
                                    color: '#fff',
                                    width: 10
                                }), // 背景边界宽度与颜色
                                padding: [0, 0, -2, 2]
                            })
                        })
                    )

                    return currentFeature
                })
            )
        } catch (error) {
            throw Error(error as string)
        }
    }


    /**
 * @description 点击标签方法渲染的标签回调
 * @date 29/10/2022
 * @param {string} key
 * @param {Handler<any>} handler
 */
    const onLabelClick = (key: string, handler: Handler) => {
        mapEmitter.value.on(CLICKLABEL, (event: any) => {
            console.log(event, "标签点击回调", key, event.properties.openlayersID)
            if (event.properties.openlayersID.includes(key)) {
                nextTick(() => {
                    handler(event)
                })
            }
        })
    }




    /**
     * 清除所有监听事件
     */
    const clearEvent = () => {
        mapEmitter.value.all.clear()
    }


    return {
        initOpenlayers,
        olRenderLayer,
        clearEvent,
        onOlReady,
        addFeatures,
        addOverlay,
        setOverlayPosition,
        onLabelClick
    }

}