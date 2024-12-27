<template>
  <section>
    <h1 v-if="show">Hi there!</h1>
    <h1 v-else>Good Bye!</h1>
    <button @click="show = !show">Toggle</button>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const show = ref(true)
</script>

<style scoped lang="scss"></style>
