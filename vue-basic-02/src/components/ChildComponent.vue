<template>
  <button @click="greet">Hello</button>
</template>

<script setup lang="ts">
const emit = defineEmits(['greet'])

function greet() {
  emit('greet', 'Hello from ChildComponent')
}
</script>

<style scoped lang="scss"></style>
