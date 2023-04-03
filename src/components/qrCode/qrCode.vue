<script lang='ts' setup>
import useTheme from '@/hooks/useTheme'

const { isDark } = useTheme()
</script>

<template>
    <div>
        <figure class="qrcode" :class="isDark ? 'whiteQrCode' : 'darkQrCode'" mb-0 inline-block relative>
            <vue-qrcode value="https://github.com/fengyuanchen" tag="svg" :options="{
                errorCorrectionLevel: 'Q',
                width: 200
            }"></vue-qrcode>
        </figure>
    </div>
</template>


<style lang='less' scoped>
.qrcode {
    font-size: 0;
    transition: cubic-bezier(0, .17, 0, 1.01) 0.5s;
}

.whiteQrCode {
    box-shadow: 0 0 10px 1px #ffffff27;
}

.darkQrCode {
    box-shadow: 0 0 10px 1px #00000037;
}

.qrcode__image {
    background-color: #fff;
    border: 0.25rem solid #fff;
    border-radius: 0.25rem;
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.25);
    height: 15%;
    left: 50%;
    overflow: hidden;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 15%;
}
</style>