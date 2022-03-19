<template>
  <div class="col-12 mt-10 text-center">
    <img src="/layout/images/logo-error.svg" alt="Sakai logo" class="mb-5" style="width:81px; height:60px;">
  </div>
  <main class='px-4 py-10 text-center text-red-600 text-6xl'>
    <router-view />
  </main>



  <div style="alignment: center">

  <h1 class="font-bold text-5xl text-2xl text-center">Error Occured</h1>

  <div class="col-12 mt-5 text-center">
    <i class="pi pi-fw pi-arrow-left text-blue-500 mr-2" style="vertical-align:center;"></i>
    <router-link to="/" class="text-blue-500">Go to Dashboard</router-link>
  </div>
  </div>

  <AppFooter/>

</template>

<script setup lang='ts'>

</script>
