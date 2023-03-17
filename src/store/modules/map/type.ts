export interface MapState {
    olMap: any | null
    tileLayer: any | null
    vectorLayer: any | null
    currentLabel: string | undefined | null
    mapEmitter: any

    isMove: boolean
}