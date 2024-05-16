<template>
  <div class="todo-editor">
    <div class="editor-header">
      <h2>{{ isNew ? "Add Todo" : "Edit Todo" }}</h2>
      <div>
        <button class="delete-button" v-if="!isNew" @click="deleteTodo">
          Delete
        </button>
        <button class="close-button" @click="closeEditor">Close</button>
      </div>
    </div>
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
import { reactive, watchEffect } from "vue";

const props = defineProps({
  todo: Object,
});

const emit = defineEmits(["updateTodo", "closeEditor", "deleteTodo"]);

const isNew = !props.todo.id;
const editTodo = reactive({ ...props.todo });

watchEffect(() => {
  Object.assign(editTodo, props.todo); // Ensure 'editTodo' gets updated when 'props.todo' changes
});

const updateTodo = () => {
  emit("updateTodo", { ...editTodo, id: isNew ? Date.now() : editTodo.id });
};

const closeEditor = () => {
  emit("closeEditor");
};

const deleteTodo = () => {
  emit("deleteTodo");
};
</script>

<style scoped>
.todo-editor {
  max-width: 600px;
  margin: auto;
  border: 1px solid #dcdcdc; /* Light grey border */
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.editor-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
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

.close-button {
  background-color: #ff5252;
  margin-left: 10px;
}

.close-button:hover {
  background-color: #ff1744;
}

.delete-button {
  background-color: #e57373;
  margin-left: 10px;
}

.delete-button:hover {
  background-color: #ef5350;
}
</style>
