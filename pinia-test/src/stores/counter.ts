import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useCounterStore = defineStore('counter', () => {
  const count = ref<number>(0);
  const name = ref<string>('Eduardo');

  const doubleCount = computed<number>(() => count.value * 2);

  const doubleCountWithName = computed<string>(() => `${name.value} ${doubleCount.value}`);

  function increment(): void {
    count.value++;
  }

  return {
    count,
    name,
    doubleCount,
    doubleCountWithName,
    increment
  };
});
