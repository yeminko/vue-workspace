<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
</script>
<template>
  <h1>404 Page Not Found!</h1>
  <p>{{ route.params.userPath }}</p>
</template>
<style scoped></style>
