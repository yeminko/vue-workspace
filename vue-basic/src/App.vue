<template>
  <h1>{{ greet }}</h1>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const greet = ref('Hi John!')
</script>

<style scoped lang="scss"></style>
