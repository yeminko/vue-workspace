<template>
  <h1>{{ greet }}</h1>
  <button @click="setName('Samantha')">Change User</button>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'

const userStore = useUserStore()
const { name, greet } = storeToRefs(userStore)
const { setName } = userStore

onMounted(() => {
  console.log('Name:', name)
})
</script>

<style scoped lang="scss"></style>
