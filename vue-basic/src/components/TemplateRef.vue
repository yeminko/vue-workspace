<template>
  <h1 ref="header"></h1>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const header = ref()

onMounted(() => {
  header.value.innerText = 'Hello World'
})
</script>

<style scoped lang="scss"></style>
