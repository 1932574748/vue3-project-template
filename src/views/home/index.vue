<template>
    <div>
      <h1>{{ data.total }}</h1>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { login } from "@/api/login"
  const getLogin = async () => {
    return await login({ userName: "123", password: "123" })
  }
  const data = ref(1)
  onMounted(async () => {
    data.value = await getLogin()
  })
  </script>
  
  <style scoped></style>
  