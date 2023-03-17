interface OperateData {
    top: number
    left: number
    position: number[]
}

interface OverlayPositionData {
    id: number | string // id
    position?: number[] // 转换前坐标
    coordinate?: number[] // 转换后坐标
}

interface FeaturePositionData {
    id: number | string // id
    position?: number[] // 转换前坐标
    coordinate?: number[] // 转换后坐标
}

interface RenderOptions {
    center: number[]
    extent: number[]
    zoom: number
    maxZoom: number
    minZoom: number
}