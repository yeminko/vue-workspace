<template>
  <section>
    <h1 :class="redColor">{{ greet }}</h1>
    <br /><br />
    <p>Count: {{ count }}</p>
    <button @click="increment">Increment</button>
    <button @click="customIncrease(2)">Double Increase</button>
    <button @click="customIncrease(3)">Triple Increase</button>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const greet = ref('Hi John!')
const redColor = ref('red-color')
const count = ref(0)

function increment() {
  count.value++
}

function customIncrease(num: number) {
  count.value += num
}
</script>

<style scoped lang="scss">
.red-color {
  color: red;
}
</style>
