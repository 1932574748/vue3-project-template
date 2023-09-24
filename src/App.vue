<script setup lang="ts">
</script>

<template>
  <!--    路由跳转-->
    <router-link to="/">首页</router-link>
    <br>
    <router-link to="/about">关于</router-link>
    <br>
    <router-link to="/dialog">弹出框</router-link>
    <br>
    <router-link to="/dashboard">Echart图</router-link>
    <br>
    <router-view></router-view>
</template>

<style scoped>

</style>
