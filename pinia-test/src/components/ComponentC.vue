<script setup lang="ts">
import { useCounterStore } from '@/stores/counter';
import { storeToRefs } from 'pinia';

const store = useCounterStore();
const { name, count, doubleCount } = storeToRefs(store);

function patchStoreData() {
  store.$patch((state) => {
    state.count = 10;
    state.name = 'Default Name';
  });
}

store.$subscribe((mutation, state) => {
  console.log('Mutation Type: ', mutation.type);
  console.log('Mutation Store Id: ', mutation.storeId);
  console.log('State: ', state);
});
</script>
<template>
  <div class="c-wrapper">
    <h1 class="wrapper">Component C</h1>
    <h2>Hello {{ name }}</h2>
    <p>{{ count }}</p>
    <p>Double count : {{ doubleCount }}</p>
    <button @click="patchStoreData">Patch Store Data</button>
  </div>
</template>
<style scoped>
.c-wrapper {
  margin: 20px;
}
</style>
