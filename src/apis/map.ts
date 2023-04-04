import axios from 'axios'

const { VITE_API_MAP_URL } = import.meta.env

export interface MapData {
  center: string
  mapListInfo: MapListInfo
  zoomBounds: number[]
  mapRasterData: MapRasterData
}

export interface MapRasterData {
  dataId: number
  mapId: number
}

export interface MapListInfo {
  defualtLevel: number
  maxLevel: number
  minLevel: number
  mapId: number
  originX: number
  originY: number
}

export const getMap = (mapId: number) => axios.get<HttpResponse<MapData>>(`/goodmap/get?mapId=${mapId}`)