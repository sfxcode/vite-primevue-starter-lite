<template>
  <div class="col-12 mt-10 text-center">
    <img src="/layout/images/logo-blue.svg" alt="Sakai logo" class="mb-5" style="width:81px; height:60px;">
  </div>
  <main class='px-4 py-10 text-center text-teal-700 text-8xl'>
    <div>
      <p class='text-8xl text-red-600'>
        <i-codicon-error class='inline-block' />
      </p>
    </div>
    <router-view />
  </main>
  <div style="alignment: center">

    <h1 class="font-bold text-5xl text-2xl text-center">Page not found ...</h1>

    <div class="col-12 mt-5 text-center">
      <i class="pi pi-fw pi-arrow-left text-blue-500 mr-2" style="vertical-align:center;"></i>
      <router-link to="/" class="text-blue-500">Go to Dashboard</router-link>
    </div>
  </div>
  <AppFooter/>
</template>

<script setup lang='ts'>
import AppFooter from '../components/app/AppFooter.vue';
import { useLogger } from 'vue-logger-plugin';

const log = useLogger();

log.debug(log);

</script>
