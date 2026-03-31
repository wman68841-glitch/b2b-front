<template>
  <Header />
  <div class="container">
    <router-view />
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
</script>

<style>
* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: sans-serif; background: #f4f7fc; }
.container { max-width: 1200px; margin: 0 auto; padding: 20px; }
</style>