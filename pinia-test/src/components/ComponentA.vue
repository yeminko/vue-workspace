<script setup lang="ts">
import { useCounterStore } from '@/stores/counter';
import { storeToRefs } from 'pinia';

const store = useCounterStore();
const { increment } = store;
const { name, count, doubleCount, doubleCountWithName } = storeToRefs(store);

function changeName() {
  name.value = 'John Doe';
}
</script>
<template>
  <div class="a-wrapper">
    <h1>Component A</h1>
    <h2>Hello {{ name }}</h2>
    <p>{{ count }}</p>

    <p>Double count : {{ doubleCount }}</p>
    <button @click="increment">Increment</button>
    <br /><br />
    <button @click="changeName">Change Name</button>
    <br />
    <br />
    <p>Double Count with name : {{ doubleCountWithName }}</p>
  </div>
</template>
<style scoped>
.a-wrapper {
  margin: 20px;
}
</style>
