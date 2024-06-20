<template>
  <div>
    <h1>{{ data.lives[0].weather }}</h1>
  </div>
</template>

<script lang="ts" setup>
import { login, weatherInfo } from "@/api/login"

const getLogin = async () => {
  return await login({ userName: "123", password: "123" })
}
const getWeatherInfo = async () => {
  data.value = await weatherInfo({
    key: "364aab328918d220df0b59cac637e4f9",
    city: "武汉"
  })
}
const data: any = ref()
getWeatherInfo()
getLogin()
onMounted(() => {})
</script>

<style scoped lang="scss">
h1 {
  color: $panGreen;
}
</style>
