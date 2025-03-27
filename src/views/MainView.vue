<template>
    <div class="container">
        <SideBar/>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script setup>
import SideBar from '../components/SideBar.vue';    
</script>

<style scoped>
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .content {
        flex: 1;
        padding: 20px;
    }
</style>