<script setup>
import * as echarts from "echarts"

const emits = defineEmits(["onClick"])
const props = defineProps({
  option: {
    default: {},
    deep: true
  },
  isDispose: {
    default: false
  },
  type: {
    type: String,
    default: () => {
      return ""
    }
  }
})

let echartsInstance = null
const echartsId = "echarts_id_" + Math.floor(Math.random() * 100000)
watch(
  () => props.option,
  () => {
    echartsInit()
  },
  { immediate: true, deep: true }
)

// echarts初始化
async function echartsInit() {
  await nextTick()
  props.isDispose && echartsInstance?.dispose()
  if (!echartsInstance) {
    const echartsDom = document.querySelector(`#${echartsId}`)
    echartsInstance = echarts.init(echartsDom)
    echartsInstance.on("click", (params) => emits("onClick", params))
  }
  echartsInstance.setOption(props.option)
}
</script>

<template>
  123123123
  <div class="echartsContainer" :id="echartsId"></div>
</template>

<style scoped lang="scss">
.echartsContainer {
  min-width: 10px;
  min-height: 10px;
}
</style>
