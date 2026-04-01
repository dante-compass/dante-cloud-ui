<template>
  <div ref="chartRef" :style="{ height: height, width: width }"></div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts';

defineOptions({ name: 'ChartContainer' });

interface Props {
  options: echarts.EChartsOption;
  width?: string;
  height?: string;
}

const props = withDefaults(defineProps<Props>(), {
  width: '100%',
  height: '300px',
});

const chartRef = ref<HTMLElement>() as Ref<HTMLElement>;
const chart = ref<echarts.ECharts>() as Ref<echarts.ECharts>;

const setOptions = (options: echarts.EChartsOption) => {
  chart.value.setOption(options);
};

onMounted(() => {
  chart.value = echarts.init(chartRef.value as HTMLElement);
  chart.value.setOption(props.options);
});

watch(
  () => props.options,
  (newValue) => {
    setOptions(newValue);
  },
  {
    deep: true,
  },
);
</script>
