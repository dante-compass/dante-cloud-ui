<template>
  <chart-container :options="options"></chart-container>
</template>

<script setup lang="ts">
import type { EChartsOption, EChartsCoreOption } from 'echarts';

import ChartContainer from './ChartContainer.vue';

defineOptions({
  name: 'HGraphChart',

  components: {
    ChartContainer,
  },
});

const axisData = ['周一', '周二', '周三', '很长很长的周四', '周五', '周六', '周日'];
const data = axisData.map(function (item, i) {
  return Math.round(Math.random() * 1000 * (i + 1));
});
const links = data.map(function (item, i) {
  return {
    source: i,
    target: i + 1,
  };
});
links.pop();

const options = ref<EChartsCoreOption>({
  title: {
    text: '笛卡尔坐标系上的 Graph',
  },
  tooltip: {},
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: axisData,
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      type: 'graph',
      layout: 'none',
      coordinateSystem: 'cartesian2d',
      symbolSize: 40,
      label: {
        show: true,
      },
      edgeSymbol: ['circle', 'arrow'],
      edgeSymbolSize: [4, 10],
      data: data,
      links: links,
      lineStyle: {
        color: '#2f4554',
      },
    },
  ],
}) as Ref<EChartsOption>;
</script>
