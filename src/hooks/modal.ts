import { Modal, ModalConfig } from '@arco-design/web-vue'

/**
 * @description arcoModal封装
 * @date 11/11/2022
 * @export
 * @return {*}
 */
export default function useModal() {
  const config = {
    title: '提示',
    content: '是否退出？',
    width: 420,
    closable: true,
    hideCancel: false,
    simple: false,
    maskClosable: false,
    modalClass: 'hook-modal'
  }

  /**
   * @description ModalOpen
   * @date 11/11/2022
   * @param {ModalConfig} [_config]
   * @return {*}  {Promise<any>}
   */
  const ModalOpen = async (_config?: ModalConfig): Promise<any> =>
    new Promise((resolve, reject) => {
      Modal.open({
        ...config,
        ..._config,
        onOk: () => resolve('ok'),
        onCancel: () => reject(new Error('cancel'))
      } as ModalConfig)
    })

  /**
   * @description ModalInfo
   * @date 11/11/2022
   * @param {ModalConfig} [_config]
   * @return {*}  {Promise<any>}
   */
  const ModalInfo = async (_config?: ModalConfig): Promise<any> =>
    new Promise((resolve, reject) => {
      Modal.info({
        ...config,
        ..._config,
        onOk: () => resolve('ok'),
        onCancel: () => reject(new Error('cancel'))
      } as ModalConfig)
    })

  /**
   * @description ModalSuccess
   * @date 11/11/2022
   * @param {ModalConfig} [_config]
   * @return {*}  {Promise<any>}
   */
  const ModalSuccess = async (_config?: ModalConfig): Promise<any> =>
    new Promise((resolve, reject) => {
      Modal.success({
        ...config,
        ..._config,
        onOk: () => resolve('ok'),
        onCancel: () => reject(new Error('cancel'))
      } as ModalConfig)
    })

  /**
   * @description ModalWarning
   * @date 11/11/2022
   * @param {ModalConfig} [_config]
   * @return {*}  {Promise<any>}
   */
  const ModalWarning = (_config?: ModalConfig): Promise<any> =>
    new Promise((resolve, reject) => {
      Modal.warning({
        ...config,
        ..._config,
        onOk: () => resolve('ok'),
        onCancel: () => reject(new Error('cancel'))
      } as ModalConfig)
    })

  /**
   * @description ModalError
   * @date 11/11/2022
   * @param {ModalConfig} [_config]
   * @return {*}  {Promise<any>}
   */
  const ModalError = async (_config?: ModalConfig): Promise<any> =>
    new Promise((resolve, reject) => {
      Modal.error({
        ...config,
        ..._config,
        onOk: () => resolve('ok'),
        onCancel: () => reject(new Error('cancel'))
      } as ModalConfig)
    })

  return {
    ModalOpen,
    ModalInfo,
    ModalSuccess,
    ModalWarning,
    ModalError
  }
}
