<script setup>
import * as echarts from "echarts"
import "echarts-gl"

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
// 为窗口加上宽度变化事件，当宽高发生改变时，调用echarts的resize()方法，调整图表尺寸
window.addEventListener("resize", function () {
  echartsInstance.resize()
})
</script>

<template>
  <div class="echartsContainer" :id="echartsId"></div>
</template>

<style scoped lang="scss">
.echartsContainer {
  min-width: 10px;
  min-height: 10px;
}
</style>
