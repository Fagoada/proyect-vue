<template>
    <h1>Hello</h1>
    <h2>Contador: {{ contador }}</h2>
    <button @click= "incrementar">+</button>
    <button @click= "contador--">-</button>
  </template>
  
  <script setup>
    import { ref } from "vue";
    const contador = ref(0);
  
    const incrementar = () => {
      contador.value++;
    }
  </script>
  
  <style scoped>
  </style>
  