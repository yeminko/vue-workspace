<template>
  <h1>Count: {{ count }}</h1>
  <button @click="count++">Increment</button>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const count = ref(0)

watch(
  count,
  () => {
    console.log('count changed')
  },
  { immediate: true },
)
</script>

<style scoped lang="scss"></style>
