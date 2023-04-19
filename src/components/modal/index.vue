<script setup lang="ts">
  import useModal from '@/hooks/modal'
  import { useToggle, useVModel } from '@vueuse/core'
  import _ from 'lodash'

  const { ModalWarning } = useModal()

  interface Props {
    modelValue: boolean
    title: string
    verify?: boolean // 二次确认
    width?: number
    async?: boolean // 异步操作
    footer?: boolean // 页脚
    bodyStyle?: string
  }

  interface Emits {
    (e: 'update:modelValue', val: any): void
    (e: 'confirm', clearLoading: () => void): void
    (e: 'cancel'): void
  }

  const props = withDefaults(defineProps<Props>(), {
    modelValue: false,
    title: 'title',
    verify: true,
    async: false,
    footer: true,
    width: 450,
    bodyStyle: ''
  })

  const emit = defineEmits<Emits>()

  const visible = useVModel(props, 'modelValue', emit)
  const [okLoading, setOkLoading] = useToggle(false)

  const handleBeforeOk = _.throttle((done: (closed: boolean) => void) => {
    done(false)
    if (props.async) {
      setOkLoading(true)
    }
    emit('confirm', () => setOkLoading(false))
  }, 800)

  const handleBeforeCancel = () => {
    if (props.verify) {
      ModalWarning().then(() => {
        visible.value = false
        setOkLoading(false)
        emit('cancel')
      })
      return false
    }
    return true
  }
</script>

<template>
  <a-modal
    v-model:visible="visible"
    :title="props.title"
    :width="width"
    :footer="props.footer"
    title-align="start"
    :body-style="props.bodyStyle"
    unmount-on-close
    :ok-loading="okLoading"
    :mask-closable="false"
    @before-ok="handleBeforeOk"
    @before-cancel="handleBeforeCancel"
  >
    <a-scrollbar :style="{ maxHeight: '75vh', overflow: 'auto' }">
      <slot></slot>
    </a-scrollbar>
    <template #footer>
      <slot name="footer"></slot>
    </template>
  </a-modal>
</template>

<style lang="less" scoped>
  :deep(.arco-scrollbar-track-direction-vertical) {
    right: -15px;
  }
</style>
