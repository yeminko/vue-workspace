<script setup lang="ts">
import { watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

watch(
  () => route.params.id,
  (newId, oldId) => {
    console.log('Old Id ' + oldId + ' changed to ' + newId);
  }
);
</script>
<template>
  <div class="wrapper">
    <h1>About Component</h1>
    <p>ID: {{ route.params.id }}</p>
    <p>Type: {{ route.params.type }}</p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem laborum dignissimos facere
      quo, sunt nulla atque aspernatur quod, facilis at veniam quas temporibus magnam sapiente
      deserunt soluta dolorem nam sint.
    </p>
  </div>
</template>
<style scoped>
.wrapper {
  background-color: aquamarine;
}
</style>
