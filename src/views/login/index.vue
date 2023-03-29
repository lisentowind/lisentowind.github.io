<script lang='ts' setup>
import router from '@/router';
import TSXVue from "@/components/tsxComponents/btn-tsx.vue"


const handleGo = (val: string) => {
  router.push(val);
}

</script>

<template>
  <div>
    <TSXVue :msg="'我是在父组件被引用的'" :backBtn="true">
      <template #default>
        <figure class="qrcode" mb-0 inline-block relative>
          <vue-qrcode value="https://github.com/fengyuanchen" tag="svg" :options="{
            errorCorrectionLevel: 'Q',
            width: 200
          }"></vue-qrcode>
          <img class="qrcode__image" absolute src="https://avatars.githubusercontent.com/u/3456749" alt="Chen Fengyuan" />
        </figure>
        <a-space>
          <a-button type="primary" @click="handleGo('Map')">map</a-button>
          <a-button type="primary" @click="handleGo('Tsx')">Tsx</a-button>
        </a-space>
      </template>
      <template #test>
        <span>具名插槽</span>
      </template>
      <template #scope="scope">
        <span>{{ scope.name }}</span>
      </template>

    </TSXVue>
  </div>
</template>


<style lang='less' scoped>
.qrcode {
  font-size: 0;
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