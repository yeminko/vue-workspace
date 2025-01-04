<template>
  <SimpleComponent :username="name" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SimpleComponent from './components/SimpleComponent.vue'

const name = ref('John Doe')
</script>

<style scoped lang="scss"></style>
