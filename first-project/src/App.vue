<script setup lang="ts">
import HeaderComponent from './components/HeaderComponent.vue';
import TodosComponent from './components/TodosComponent.vue';
</script>
<template>
  <div class="wrapper">
    <HeaderComponent />
    <TodosComponent />
  </div>
</template>
<style scoped>
.wrapper {
  margin-left: 20px;
}
</style>
