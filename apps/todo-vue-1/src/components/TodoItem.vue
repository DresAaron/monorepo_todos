<template>
    <li>
      {{ todo }}
      <button @click="onRemove">Remove</button>
    </li>
  </template>
  
  <script setup>
  const props = defineProps({
    todo: String,
  });
  const emit = defineEmits(["remove"]);
  const onRemove = () => {
    emit("remove");
  };
  </script>
  
  <style scoped>
  li {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    background: #f4f4f4;
    padding: 0.5rem;
    border-radius: 4px;
  }
  button {
    background: #e74c3c;
    border: none;
    color: white;
    padding: 0.3rem 0.6rem;
    border-radius: 3px;
    cursor: pointer;
  }
  button:hover {
    background: #c0392b;
  }
  </style>
  