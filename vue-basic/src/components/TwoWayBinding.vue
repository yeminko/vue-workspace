<template>
  <input type="text" v-model="message" />
  <p>{{ message }}</p>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const message = ref()
</script>

<style scoped lang="scss"></style>
