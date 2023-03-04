<template>
  <div>vue3</div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  const res = ref<boolean>()
  console.log(res.value ? (res.value == true ? false : true) : false)
</script>

<style scoped></style>
