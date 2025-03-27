<template>
    <div class="sidebar">
        <h2>Barra lateral</h2>
        <div class="links">
            <router-link to="/home">Inicio</router-link>
            <router-link to="/contador">Contador</router-link>
            <router-link to="/lista-de-tareas">Lista de tareas</router-link>
        </div>
    </div>
</template>

<script setup></script>

<style >
    .sidebar {
        width: 200px;
        background-color: var(--color-background-soft);
        padding: 20px;
    }
    .sidebar .links {
        display: flex;
        flex-direction: column;
    }
    .sidebar .links a { 
        margin-bottom: 5px;
        padding: 2px 10px;
        border-radius: .25rem;
        color: blanchedalmond;
         }
</style>