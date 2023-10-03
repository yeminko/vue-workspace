<script setup lang="ts">
import ComponentA from './components/ComponentA.vue';
import ComponentB from './components/ComponentB.vue';
import ComponentC from './components/ComponentC.vue';
</script>

<template>
  <div class="wrapper">
    <ComponentA />
    <ComponentB />
    <ComponentC />
  </div>
</template>

<style scoped>
.wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  margin: 20px;
}
</style>
