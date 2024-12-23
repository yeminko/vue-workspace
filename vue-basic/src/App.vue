<template>
  <h1>Count : {{ count }}</h1>
  <button @focus="increaseCount">Increment</button>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)

function increaseCount() {
  count.value++
}
</script>

<style scoped lang="scss"></style>
