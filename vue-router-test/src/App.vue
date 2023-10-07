<script setup lang="ts"></script>

<template>
  <h1>This is App Component</h1>
  <router-link to="/">Home</router-link>
  &nbsp;&nbsp;
  <router-link to="/about/EMP001/type/CONTRACT">About</router-link>
  &nbsp;&nbsp;
  <router-link to="/about/EMP002/type/CONTRACT">About 2</router-link>
  <br /><br /><br />
  <router-view></router-view>
</template>

<style scoped></style>
