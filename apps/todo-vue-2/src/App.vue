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
};
</script>

<style scoped>
.container {
  display: flex;
  height: 100vh;
  background-color: #f0f0f0;
}

.left-pane {
  width: 30%;
  background-color: #3a3a3a;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-sizing: border-box;
}

.right-pane {
  width: 70%;
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