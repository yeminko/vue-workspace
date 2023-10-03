<script setup lang="ts">
import { useCounterStore } from '@/stores/counter';
import { storeToRefs } from 'pinia';

const store = useCounterStore();
const { increment } = store;
const { name, count, doubleCount } = storeToRefs(store);
</script>
<template>
  <div class="b-wrapper">
    <h1 class="wrapper">Component B</h1>
    <h2>Hello {{ name }}</h2>
    <p>{{ count }}</p>
    <p>Double count : {{ doubleCount }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>
<style scoped>
.b-wrapper {
  margin: 20px;
}
</style>
