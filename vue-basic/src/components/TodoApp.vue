<template>
  <section class="todo-app">
    <h1>Todo App</h1>

    <div class="input-container">
      <input type="text" v-model="newTodo" @keyup.enter="addTodo" placeholder="Add a new todo..." />
    </div>

    <div class="lists-container">
      <div class="active-todos">
        <h2>Active Todos</h2>
        <ul>
          <li v-for="todo in activeTodos" :key="todo.id">
            <input type="checkbox" :checked="todo.completed" @change="toggleTodo(todo)" />
            <span>{{ todo.text }}</span>
            <button @click="deleteTodo(todo.id)">Delete</button>
          </li>
        </ul>
      </div>

      <div class="completed-todos">
        <h2>Completed Todos</h2>
        <ul>
          <li v-for="todo in completedTodos" :key="todo.id">
            <input type="checkbox" :checked="todo.completed" @change="toggleTodo(todo)" />
            <span class="completed">{{ todo.text }}</span>
            <button @click="deleteTodo(todo.id)">Delete</button>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface Todo {
  id: number
  text: string
  completed: boolean
}

const todos = ref<Todo[]>([])
const newTodo = ref('')

const activeTodos = computed(() => todos.value.filter((todo) => !todo.completed))

const completedTodos = computed(() => todos.value.filter((todo) => todo.completed))

function addTodo() {
  if (newTodo.value.trim()) {
    todos.value.push({
      id: Date.now(),
      text: newTodo.value,
      completed: false,
    })
    newTodo.value = ''
  }
}

function toggleTodo(todo: Todo) {
  todo.completed = !todo.completed
}

function deleteTodo(id: number) {
  const index = todos.value.findIndex((todo) => todo.id === id)
  if (index > -1) {
    todos.value.splice(index, 1)
  }
}
</script>

<style scoped lang="scss">
.todo-app {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;

  h1 {
    text-align: center;
    color: #333;
  }

  .input-container {
    margin-bottom: 20px;

    input {
      width: 100%;
      padding: 8px;
      font-size: 16px;
    }
  }

  .lists-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;

    h2 {
      color: #666;
      font-size: 1.2em;
    }

    ul {
      list-style: none;
      padding: 0;

      li {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 8px 0;

        .completed {
          text-decoration: line-through;
          color: #999;
        }

        button {
          margin-left: auto;
          padding: 4px 8px;
          background-color: #ff4444;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;

          &:hover {
            background-color: #cc0000;
          }
        }
      }
    }
  }
}
</style>
