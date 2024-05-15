<template>
  <div class="todo-list">
    <div
      v-for="todo in todos"
      :key="todo.id"
      :class="['todo-item', { selected: todo.id === selectedTodo?.id }]"
      @click="selectTodo(todo)"
    >
      <div class="todo-title">{{ todo.title }}</div>
      <div class="todo-description">{{ todo.description }}</div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["todos", "selectedTodo"]);
const emit = defineEmits(["selectTodo"]);

const selectTodo = (todo) => {
  emit("selectTodo", todo);
};
</script>

<style scoped>
.todo-list {
  width: 100%;
  overflow-y: auto; /* Ensure scrolling if the list is long */
}

.todo-item {
  padding: 10px;
  margin: 5px 0;
  background: #555;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
}

.todo-item:hover {
  background: #666;
}

.selected {
  background: #888;
}

.todo-title {
  font-weight: bold;
}

.todo-description {
  font-size: 0.9em;
  color: #ccc;
}
</style>
