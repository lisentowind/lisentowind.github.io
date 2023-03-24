<script lang='ts' setup>
</script>

<template>
  <figure class="qrcode" mb-0 inline-block relative>
    <vue-qrcode
      value="https://github.com/fengyuanchen"
      tag="svg"
      :options="{
        errorCorrectionLevel: 'Q',
        width: 200
      }"
    ></vue-qrcode>
    <img class="qrcode__image" absolute src="https://avatars.githubusercontent.com/u/3456749" alt="Chen Fengyuan" />
  </figure>
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