<template>
  <h1>Hello {{ name }}</h1>
  <p>{{ greet }}</p>
  <button @click="setName('Ethan')">Say Ethan</button>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'

const store = useUserStore()
const { name, greet } = storeToRefs(store)
const { setName } = store
</script>

<style scoped lang="scss"></style>
