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
  padding: 15px;
  margin: 10px 0;
  background: #34495e; /* Slightly lighter blue */
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.todo-item:hover {
  background: #1abc9c; /* Hover effect with accent color */
}

.selected {
  background: #16a085; /* Highlight selected todo */
}

.todo-title {
  font-weight: bold;
  font-size: 1.1rem;
}

.todo-description {
  font-size: 0.9em;
  color: #ccc;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Number of lines to show */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
