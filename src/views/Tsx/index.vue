<script lang='tsx'>

import { Message } from '@arco-design/web-vue';
import { computed, defineComponent, ref } from 'vue';
import { useDebounceFn } from '@vueuse/core'
import router from '@/router';
interface Props {
    msg?: string,
    width?: string,
    height?: string,
    backBtn?: boolean
}

interface User {
    name: string,
    age: number
}


export default defineComponent({
    props: {
        msg: {
            default: '我是原生'
        },
        width: {
            default: "auto"
        },
        height: {
            default: '100vh'
        },
        backBtn: {
            default: true
        }
    },
    setup(props: Props, { slots }) {
        const user: User = {
            name: '张三',
            age: 18
        }
        const count = ref<number>(0)
        const width = computed(() => `${props.width === 'auto' ? props.width : props.width + 'px'}`)
        const height = computed(() => `${props.height && props.height.includes('vh') ? props.height : props.height + 'px'}`)
        const changeCount = useDebounceFn((type: ChangeType) => {
            if (type === 'add') {
                count.value++
            } else if (type === 'minus') {
                if (count.value === 0) {
                    Message.error({
                        id: 'minus',
                        content: '不能再减少了',
                    })
                    return
                } else {
                    count.value--
                }
            }
        }, 500)

        const back = () => {
            router.back()
        }
        const renderBackBtn = () => {
            return props.backBtn ? <a-button type='primary' status='success' onClick={() => back()}>返回上一页</a-button> : null
        }

        return () => (
            <>
                <div class="tsx-div-box" style={{ "width": width.value, "height": height.value }}>
                    <div>{slots.default ? slots.default() : null}</div>
                    <a-space>
                        <span>{props.msg}</span>
                        <span>{count.value}</span>
                        <a-button type='primary' onClick={() => changeCount("add")}>增加</a-button>
                        <a-button type='primary' onClick={() => changeCount("minus")}>减少</a-button>
                        {renderBackBtn()}
                        {/* 具名插槽 */}
                        <div>{slots.test ? slots.test() : null}</div>
                        {/* 作用域插槽 */}
                        {slots.scope ? slots.scope(user) : null}
                    </a-space>
                </div>
            </>
        )
    }
})



</script>


<style lang='less' scoped>
.tsx-div-box {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #1e1e20;

    :deep(span) {
        color: #fff;
        font-size: 20px;
    }
}
</style>