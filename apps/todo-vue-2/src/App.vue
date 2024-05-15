<template>
  <div class="container">
    <div class="left-pane">
      <img class="logo" src="@/assets/logo.png" alt="Todo Logo" />
      <TodoList @selectTodo="selectTodo" :todos="todos" :selectedTodo="selectedTodo" />
    </div>
    <div class="right-pane">
      <TodoEditor v-if="selectedTodo" :todo="selectedTodo" @updateTodo="updateTodo" />
      <div v-else class="placeholder">
        Click on a todo item to edit.
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import TodoList from './components/TodoList.vue';
import TodoEditor from './components/TodoEditor.vue';

const todos = ref([
  { id: 1, title: 'Sample Todo 1', description: 'Description 1', dueDate: '2023-10-01' },
  { id: 2, title: 'Sample Todo 2', description: 'Description 2', dueDate: '2023-10-02' },
]);

const selectedTodo = ref(null);

const selectTodo = (todo) => {
  selectedTodo.value = todo;
};

const updateTodo = (updatedTodo) => {
  const index = todos.value.findIndex(todo => todo.id === updatedTodo.id);
  if (index !== -1) {
    todos.value[index] = updatedTodo;
  }
  // Ensure the selectedTodo is also updated with the new info
  selectedTodo.value = { ...updatedTodo };
};
</script>

<style scoped>
body, html, #app {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

.container {
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: #f0f0f0;
}

.left-pane {
  width: 30%;
  max-width: 400px; /* Set a max width for larger screens */
  background-color: #3a3a3a;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-sizing: border-box;
}

.right-pane {
  flex: 1; /* Use flex to fill the remaining space */
  padding: 20px;
  box-sizing: border-box;
  background-color: white;
}

.logo {
  max-width: 100px;
  margin-bottom: 20px;
}

.placeholder {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: #888;
  font-size: 18px;
}
</style>