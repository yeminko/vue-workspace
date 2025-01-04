<template>
  <h1>Welcome {{ username }},</h1>
</template>

<script setup lang="ts">
defineProps<{ username: string }>()
</script>

<style scoped lang="scss"></style>
