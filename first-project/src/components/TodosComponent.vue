<script setup lang="ts">
import { computed, ref } from "vue";
import TodoComponent from "./TodoComponent.vue";

export type Todo = {
  id: number;
  description: string;
  isDone: boolean;
};

const showAll = ref<boolean>();
const enteredText = ref<string>("");
const todoList = ref<Todo[]>([]);

const filteredTodoList = computed(() => {
  return showAll.value
    ? todoList.value
    : todoList.value.filter((todo) => !todo.isDone);
});

function addTodo() {
  if (enteredText.value.trim() == "") {
    return;
  }

  todoList.value.push({
    id: Date.now(),
    description: enteredText.value,
    isDone: false,
  });
  enteredText.value = "";
}

function onTodoDone(updatedTodo: Todo) {
  todoList.value = todoList.value.map((todo) => {
    if (todo.id == updatedTodo.id) {
      return updatedTodo;
    }
    return todo;
  });
}
</script>

<template>
  <input type="checkbox" v-model="showAll" /> Show All
  <br />
  <input
    type="text"
    placeholder="Enter a task"
    v-model.trim="enteredText"
    @keydown.enter="addTodo"
  />
  <button @click="addTodo">Add</button>
  <br />
  <ul>
    <li v-for="todo in filteredTodoList" :key="todo.id">
      <TodoComponent :todo="todo" @todoDone="onTodoDone" />
    </li>
  </ul>
</template>
<style scoped>
ul {
  padding: 0;
  list-style-type: none;
}
</style>
