<template>
  <div class="contador">
    <h1>Contador</h1>
    <div>
      <h2>Valor: {{ contador }}</h2>
      <div>
        <button @click= "incrementar">+</button>
        <button @click= "contador--">-</button>
      </div>
    </div>
  </div>
  </template>
  
  <script setup>
    import { ref } from "vue";
    const contador = ref(0);
    
    const incrementar = () => {
      contador.value++;
    }
  </script>
  
  <style scoped>
  .contador {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    padding: 2rem 0;

  }
  .contador > div > div {
    display: flex;
    justify-content: space-between;
  }
  .contador > div > div  button {
    font-size: 1.5rem;

  }
  </style>
  