<template>
  <div class='mt-4 layout-footer'>
    <span class='font-medium ml-2'>Vite PrimeVue with UnoCSS Starter - {{ version }}</span>
  </div>
</template>

<script setup lang='ts'>

const version = ref(import.meta.env.VITE_APP_VERSION)
</script>

<style scoped>

</style>
