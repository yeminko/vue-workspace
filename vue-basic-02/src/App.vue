<template>
  <ChildComponent>
    <h1>Hello World!</h1>
    <template #main>
      <p>This is the main content</p>
    </template>
    <template #footer>
      <p>This is the footer content</p>
    </template>
  </ChildComponent>
</template>

<script setup lang="ts">
import ChildComponent from './components/ChildComponent.vue'
</script>

<style scoped lang="scss"></style>
