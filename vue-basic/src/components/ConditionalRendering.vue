<template>
  <section>
    <h1 v-if="status === 'high'">HIGH</h1>
    <h1 v-else-if="status === 'medium'">MEDIUM</h1>
    <h1 v-else>LOW</h1>
    <button @click="show = !show">Toggle</button>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const status = ref('online')
const show = ref(true)
</script>

<style scoped lang="scss"></style>
