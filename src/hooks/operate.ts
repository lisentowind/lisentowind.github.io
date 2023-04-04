import { useMapStore } from '@/store'
import { Handler } from 'mitt'
import { storeToRefs } from 'pinia'
import useOpenlayers from './openlayers'

export default function useOperate() {
    const mapStore = useMapStore()
    const { addOverlay, setOverlayPosition } = useOpenlayers()
    const { mapEmitter, currentKey, currentLabel, isMove } = storeToRefs(mapStore)
    const { setLabel, toggleMove } = mapStore

    const setCurrentLabel = (value: string | null) => {
        console.log('setCurrentLabel', value)
        setLabel(value)
        if (value === null) hideOperate()
    }

    /**
    * @description 渲染图标操作节点
     * @date 31/10/2022
     */
    const createOperate = (position: number[] = [0, 0]) => {
        try {
            if (!document.getElementById('LabelOperate')) {
                const operate = document.getElementById('LabelOperateTemplate')?.cloneNode(true) as HTMLElement
                operate.setAttribute('id', 'LabelOperate')
                document.getElementById('map')?.appendChild(operate)
            }

            addOverlay({
                id: 'LabelOperate',
                position,
                autoPan: false,
                stopEvent: false
            })

            document.getElementById('LabelOperate')?.addEventListener('click', (event) => {
                const element = event.target as HTMLElement
                const id = element.getAttribute('id')
                mapEmitter.value.emit(`${currentKey.value}${id}`)
                hideOperate()
            })
        } catch (error) {
            throw Error(error as string)
        }
    }

    /**
   * @description 设置节点位置
   * @date 31/10/2022
   * @param {OperateData} { top, left, position, type }
   */
    const setOperateStyle = ({ top, left, position }: OperateData) => {
        try {
            const element = document.getElementById('LabelOperate') as HTMLElement
            if (!element) return
            element.style.setProperty('top', `${top}px`)
            element.style.setProperty('left', `${left}px`)
            setOverlayPosition({ id: 'LabelOperate', position })

            element.style.setProperty('visibility', 'visible')
        } catch (error) {
            throw Error(error as string)
        }
    }

    /**
   * @description 标签编辑操作
   * @date 31/10/2022
   * @param {string} key
   * @param {Handler} handler
   */
    const onOperateUpdate = (key: string, handler: Handler) => {
        mapEmitter.value.on(`${key}Update`, () => {
            handler('')
            hideOperate()
        })
    }

    /**
     * @description 标签移动操作
     * @date 31/10/2022
     * @param {string} key
     * @param {Handler} handler
     */
    const onOperateMove = (key: string, handler: Handler) => {
        mapEmitter.value.on(`${key}Move`, () => {
            handler('')
            toggleMove(true)
            hideOperate()
        })
    }

    /**
     * @description 标签删除操作
     * @date 31/10/2022
     * @param {string} key
     * @param {Handler} handler
     */
    const onOperateDelete = (key: string, handler: Handler) => {
        mapEmitter.value.on(`${key}Delete`, () => {
            handler('')
            hideOperate()
        })
    }


    /**
  * @description 隐藏标签操作节点
  * @date 31/10/2022
  */
    const hideOperate = () => {
        const element = document.getElementById('LabelOperate') as HTMLElement
        if (!element) return

        element.style.setProperty('visibility', 'hidden')
        element.style.setProperty('type', '')
    }





    return {
        currentLabel,
        isMove,
        setCurrentLabel,
        createOperate,
        hideOperate,
        setOperateStyle,
        toggleMove,
        onOperateUpdate,
        onOperateMove,
        onOperateDelete,
        addOverlay,
        setOverlayPosition
    }
}