<template>
    <div class="todo-list">
      <div
        v-for="todo in todos"
        :key="todo.id"
        :class="['todo-item', { selected: todo.id === selectedTodo?.id }]"
        @click="selectTodo(todo)"
      >
        {{ todo.title }}
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps(['todos', 'selectedTodo']);
  const emit = defineEmits(['selectTodo']);
  
  const selectTodo = (todo) => {
    emit('selectTodo', todo);
  };
  </script>
  
  <style scoped>
  .todo-list {
    width: 100%;
  }
  
  .todo-item {
    padding: 10px;
    margin: 5px 0;
    background: #555;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .todo-item:hover {
    background: #666;
  }
  
  .selected {
    background: #888;
  }
  </style>