<template>
    <div>
      <form @submit.prevent="addTodo">
        <input v-model="newTodo" placeholder="New task" />
        <button type="submit">Add</button>
      </form>
      <ul>
        <TodoItem
          v-for="(todo, index) in todos"
          :key="index"
          :todo="todo"
          @remove="removeTodo(index)"
        />
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import TodoItem from './TodoItem.vue';
  
  const newTodo = ref('');
  const todos = ref([]);
  
  const addTodo = () => {
    if (newTodo.value.trim() !== '') {
      todos.value.push(newTodo.value.trim());
      newTodo.value = '';
    }
  };
  
  const removeTodo = (index) => {
    todos.value.splice(index, 1);
  };
  </script>
  
  <style scoped>
  form {
    margin-bottom: 1rem;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  </style>