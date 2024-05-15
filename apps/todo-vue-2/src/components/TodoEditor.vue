<template>
    <div class="todo-editor">
      <h2>Edit Todo</h2>
      <form @submit.prevent="updateTodo">
        <div class="form-group">
          <label>Title:</label>
          <input v-model="editTodo.title" required />
        </div>
        <div class="form-group">
          <label>Description:</label>
          <textarea v-model="editTodo.description" required></textarea>
        </div>
        <div class="form-group">
          <label>Due Date:</label>
          <input type="date" v-model="editTodo.dueDate" required />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { reactive, toRefs, watch } from 'vue';
  
  const props = defineProps(['todo']);
  const emit = defineEmits(['updateTodo']);
  
  const editTodo = reactive({ ...props.todo });
  
  watch(props.todo, (newTodo) => {
    Object.assign(editTodo, newTodo);
  });
  
  const updateTodo = () => {
    emit('updateTodo', { ...editTodo });
  };
  </script>
  
  <style scoped>
  .todo-editor {
    max-width: 600px;
    margin: auto;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input,
  textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
  }
  
  button {
    padding: 10px 20px;
    background-color: #3a3a3a;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #555;
  }
  </style>