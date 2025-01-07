<template>
  <br /><br /><br /><br /><br /><br /><br />
  <ChildComponent @greet="onGreet" />
  <p>Message: {{ message }}</p>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ChildComponent from './components/ChildComponent.vue'

const message = ref('')

function onGreet(text: string) {
  message.value = text
}
</script>

<style scoped lang="scss"></style>
