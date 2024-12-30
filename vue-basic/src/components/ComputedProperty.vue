<template>
  <h1>Counter App</h1>
  <p>Count: {{ count }}</p>
  <button @click="increment" :disabled="tooMuch">Increment</button>
  <br />
  <hr />
  <br />
  <h2 style="color: red" v-if="tooMuch">You clicked TOO MUCH!!!!</h2>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

const count = ref(0)

const tooMuch = computed(() => {
  console.log('Count Increased: ', count.value)
  return count.value > 10
})

function increment() {
  count.value++
}
</script>

<style scoped lang="scss"></style>
