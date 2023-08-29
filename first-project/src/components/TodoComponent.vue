<script setup lang="ts">
import type { Todo } from "./TodosComponent.vue";

type Props = {
  todo: Todo;
};

const props = defineProps<Props>();
const emit = defineEmits<{ todoDone: [updatedTodo: Todo] }>();

function onCheckboxChange(event: Event) {
  const isChecked = (event.target as HTMLInputElement).checked;
  emit("todoDone", { ...props.todo, isDone: isChecked });
}
</script>
<template>
  <input type="checkbox" :checked="todo.isDone" @change="onCheckboxChange" />
  <span :class="{ done: todo.isDone }">{{ todo.description }} </span>
</template>
<style scoped>
p {
  font-size: 1.5em;
}

.done {
  text-decoration: line-through;
}
</style>
