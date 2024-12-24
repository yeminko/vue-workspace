<template>
  <section>
    <div style="height: 100px">
      <p>Input: {{ leftNum }} {{ operator }} {{ rightNum }}</p>
      <p>Result: {{ result }}</p>
    </div>
    <div>
      <button @click="appendNumber(1)">1</button>
      <button @click="appendNumber(2)">2</button>
      <button @click="appendNumber(3)">3</button>
      <button @click="setOperator('+')">+</button>
      <br />
      <button @click="appendNumber(4)">4</button>
      <button @click="appendNumber(5)">5</button>
      <button @click="appendNumber(6)">6</button>
      <button @click="setOperator('-')">-</button>
      <br />
      <button @click="appendNumber(7)">7</button>
      <button @click="appendNumber(8)">8</button>
      <button @click="appendNumber(9)">9</button>
      <button @click="setOperator('*')">*</button>
      <br />
      <button @click="clear">C</button>
      <button @click="appendNumber(0)">0</button>
      <button @click="calculate">=</button>
      <button @click="setOperator('/')">/</button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const leftNum = ref('')
const rightNum = ref('')
const operator = ref('')
const result = ref('')

const appendNumber = (num: number) => {
  if (!operator.value) {
    leftNum.value += num
  } else {
    rightNum.value += num
  }
}

const setOperator = (op: string) => {
  if (leftNum.value) operator.value = op
}

const calculate = () => {
  if (!leftNum.value || !rightNum.value || !operator.value) return

  const left = parseFloat(leftNum.value)
  const right = parseFloat(rightNum.value)

  switch (operator.value) {
    case '+':
      result.value = (left + right).toString()
      break
    case '-':
      result.value = (left - right).toString()
      break
    case '*':
      result.value = (left * right).toString()
      break
    case '/':
      if (right === 0) {
        result.value = 'Error'
        return
      }
      result.value = (left / right).toString()
      break
  }
}

const clear = () => {
  leftNum.value = ''
  rightNum.value = ''
  operator.value = ''
  result.value = ''
}
</script>

<style scoped>
button {
  width: 50px;
  height: 50px;
  margin: 2px;
}
</style>
