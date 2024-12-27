<template>
  <section>
    <h1>My Clock</h1>
    <h2>{{ clock }}</h2>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const clock = ref(new Date().toLocaleTimeString())

setInterval(() => {
  clock.value = new Date().toLocaleTimeString()
}, 1000)
</script>

<style scoped lang="scss"></style>
