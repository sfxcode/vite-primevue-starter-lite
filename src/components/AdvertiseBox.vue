<template>
  <div class="col-12 md:col-4 mb-4 px-5">
<span class='p-3 shadow-2 mb-1 inline-block' style='border-radius: 10px'>
<span class="iconify text-4xl" data-icon="mdi:check"/>
</span>
    <div :class="'mb-3 text-2xl text-' + color">{{ header }}</div>
    <div>
      <slot/>
    </div>
  </div>
</template>

<script setup lang='ts'>

const props = defineProps<{
  header: String,
  icon: String,
  color?: String
}>();

</script>

<style scoped>

</style>
