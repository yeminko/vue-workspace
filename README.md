# Vue Short Notes

## Single-File Component(SFC) Structure

```html
<script setup></script>
<template></template>
<style scoped></style>
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

### `reactive()`

- only works on objects

### `ref()`

- can take any value type.
- Need to get value from `.value` property.
- No need to use `.value` when print out using string interpolation.

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

## Computed Property

- tracks other reactive state used in its computation as dependencies.
- caches the result and automatically updates it when its dependencies change.

```js
const filteredTodos = computed(() => {});
```

## Template Refs

### Declare template ref as below

```html
<p ref="pElementRef">hello</p>
```

### Access the ref like this

```js
//matching name as above
const pElementRef = ref(null);
```

## Lifecycle

- `onMounted` - like `ngOnInit`
- `onUnmounted` - like `ngOnDestroy`

## Watchers

- `watch()` can directly watch a ref
- fired whenever the value changes

```js
watch(count, (newCount) => {
  console.log(`new count is: ${newCount}`);
});
```

## Components

- just import and call like this `<ChildComp/>`

## Props

### Define props in child component

```js
// don't import defineProps()
const props = defineProps({
  msg: String,
});
```

### Pass props to child like this

```html
<ChildComp :msg="greeting" />
```

## Emits

### Declare emit in child component

```js
// declare emitted events
const emit = defineEmits(["response"]);
// emit with argument
emit("response", "hello from child");
```

### Listen from parent component

```html
<ChildComp @response="(msg) => childMsg = msg" />
```

## Slots

- Can be used to pass down content to child component

```html
<ChildComp> This is some slot content! </ChildComp>
```

- From the child component, accept like this:

```html
<!-- can add fallback message -->
<slot>Fallback content</slot>
```
