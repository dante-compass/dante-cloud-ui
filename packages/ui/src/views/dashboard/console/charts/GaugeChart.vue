<template>
  <chart-container :options="options"></chart-container>
</template>

<script setup lang="ts">
import type { EChartsOption } from 'echarts';

import ChartContainer from './ChartContainer.vue';

defineOptions({
  name: 'GaugeChart',

  components: {
    ChartContainer,
  },
});

const options = ref<EChartsOption>({
  tooltip: {
    formatter: '{a} <br/>{b} : {c}%',
  },
  toolbox: {
    feature: {
      restore: {},
      saveAsImage: {},
    },
  },
  series: [
    {
      name: '业务指标',
      type: 'gauge',
      detail: { formatter: '{value}%' },
      data: [{ value: 50, name: '完成率' }],
    },
  ],
}) as Ref<EChartsOption>;
</script>
