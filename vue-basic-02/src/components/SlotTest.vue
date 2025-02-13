<template>
  <h1>Slot Test Component</h1>
  <slot>No Text from Parent</slot>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, eum. Eligendi maxime esse
    tempore nulla praesentium iure rerum? Tempora iure quibusdam consequatur blanditiis quidem cum
    vitae quae libero maiores eligendi.
  </p>
  <slot name="footer" />
  <slot name="sub-footer" />
</template>

<script setup lang="ts"></script>

<style scoped lang="scss"></style>
