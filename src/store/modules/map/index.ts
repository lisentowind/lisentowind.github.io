import { defineStore } from "pinia"
import { MapState } from "./type.js"
import mitt from "mitt"

export const useMapStore = defineStore("mapStore", {
    state: (): MapState => ({
        olMap: null,
        tileLayer: null, // 矢量源（瓦片）图层
        vectorLayer: null, // 矢量源（图标）图层
        currentLabel: null,
        mapEmitter: mitt(),
        isMove: false,
    }),
    getters: {
        currentKey(state): string | undefined {
            return state.currentLabel?.replace(/[^\D]/g, '')
        }
    },
    actions: {
        resetMap() {
            this.$reset()
        },
        setOlMap(map: any) {
            this.olMap = map
        },
        setTileLayer(tileLayer: any) {
            this.tileLayer = tileLayer
        },
        setVectorLayer(vectorLayer: any) {
            this.vectorLayer = vectorLayer
        },
        setLabel(label: string | null) {
            this.currentLabel = label
        },

        toggleMove(move: boolean) {
            this.isMove = move
        }
    },

})