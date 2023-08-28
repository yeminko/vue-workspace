# Vue Short Notes

### Single-File Component(SFC) Structure

```html
<script setup>
  ...
</script>
<template>...</template>
<style scoped>
  ...;
</style>
```

## Create a project

```bash
npm create vue@latest
<your-project-name>
npm install
npm run dev
```

## Declarative Rendering

- two ways to declate reactive state.
- `reactive()` and `ref()`

## Template Rendering

- use `{{ count }}`

## Attribute Bindings

```js
v-bind:id="dynamicId"
(or)
:id="dynamicId"
```

## Event Listeners

```js
v-on:click="increment"
(or)
@click="increment"
```

## Two-way bindings

- use `v-model="text"`

## Conditional Rendering

```html
<h1 v-if="awesome">Vue is awesome!</h1>
<h1 v-else>Oh no 😢</h1>
```

## List Rendering

```html
<ul>
  <li v-for="todo in todos" :key="todo.id">{{ todo.text }}</li>
</ul>
```
