<template>
  <div class="q-gutter-y-md">
    <h-row gutter="md" gutter-col horizontal>
      <summary-box
        color="orange"
        icon="people"
        :numeric="onlineUserCount"
        description="实时在线用户"
        :percent="0.3"
      ></summary-box>
      <summary-box
        color="info"
        icon="shopping_cart"
        numeric="900"
        description="Total Orders"
        :percent="0.7"
      ></summary-box>
      <summary-box
        color="red"
        icon="account_balance_wallet"
        numeric="1050"
        description="Total Expenses"
        :percent="0.4"
      ></summary-box>
      <summary-box
        color="green"
        icon="account_balance"
        numeric="80 %"
        description="Total Profit"
        :percent="0.8"
      ></summary-box>
    </h-row>

    <h-row gutter="md" gutter-col horizontal>
      <link-box
        color="positive"
        icon="mdi-cog-play"
        description="服务管理配置中心"
        link="http://10.180.80.133:8848/nacos "
      ></link-box>
      <link-box
        color="accent"
        icon="mdi-compare"
        description="服务流控规则中心"
        link="http://10.180.80.133:8858"
      ></link-box>
      <link-box
        color="primary"
        icon="mdi-chart-line"
        description="服务运行监控中心"
        link="http://10.180.80.134:8845"
      ></link-box>
      <link-box
        color="info"
        icon="mdi-map-search"
        description="日志聚合分析中心"
        link="http://10.180.80.133:5601"
      ></link-box>
      <link-box
        color="negative"
        icon="mdi-source-branch-remove"
        description="链路追踪监控中心"
        link="http://10.180.80.133:8878"
      ></link-box>
      <link-box
        color="warning"
        icon="mdi-monitor-dashboard"
        description="接口开发文档中心"
        link="http://10.180.80.134:8847/swagger-ui.html "
      ></link-box>
    </h-row>

    <h-row gutter="md" gutter-col horizontal>
      <h-column lg="4" md="4" sm="6" xs="12">
        <h-chart-card title="效能分布">
          <pie-chart></pie-chart>
        </h-chart-card>
      </h-column>
      <h-column lg="4" md="4" sm="6" xs="12">
        <h-chart-card title="资源使用分析">
          <radar-chart></radar-chart>
        </h-chart-card>
      </h-column>
      <h-column lg="4" md="4" sm="6" xs="12">
        <h-chart-card title="运行分析">
          <bar-chart></bar-chart>
        </h-chart-card>
      </h-column>
    </h-row>

    <h-row gutter="md" gutter-col horizontal>
      <h-column lg="8" md="8" sm="12" xs="12">
        <h-chart-card title="资源使用趋势"><scatter-chart></scatter-chart></h-chart-card>
      </h-column>
      <h-column lg="4" md="4" sm="12" xs="12">
        <h-chart-card title="服务交互效能"><sankey-chart></sankey-chart></h-chart-card>
      </h-column>
    </h-row>

    <h-row gutter="md" gutter-col horizontal>
      <h-column lg="7" md="7" sm="6" xs="12">
        <h-chart-card title="链路终端"><rich-chart></rich-chart></h-chart-card>
      </h-column>
      <h-column lg="5" md="5" sm="6" xs="12">
        <h-chart-card title="操作类型"><funnel-chart></funnel-chart></h-chart-card>
      </h-column>
    </h-row>

    <h-row gutter="md" gutter-col horizontal>
      <h-column>
        <h-chart-card title="接口"><category-chart></category-chart></h-chart-card>
      </h-column>
    </h-row>
  </div>
</template>

<script setup lang="ts">
import { useRealTimeInformation } from '@/composables/hooks';

import {
  BarChart,
  CategoryChart,
  PieChart,
  FunnelChart,
  RadarChart,
  RichChart,
  ScatterChart,
  SankeyChart,
  SummaryBox,
  LinkBox,
} from './charts';

defineOptions({
  name: 'DashboardConsole',
  components: {
    BarChart,
    CategoryChart,
    FunnelChart,
    PieChart,
    RadarChart,
    RichChart,
    ScatterChart,
    SankeyChart,
    SummaryBox,
    LinkBox,
  },
});

const { onlineUserCount } = useRealTimeInformation();

/**
 * 初始化信息获取
 *
 * 用户登录成功后，需要首次获取的以及需要第一次初始化的信息，在此处进行处理。
 * 因为，Console 页面是登录成功后第一次展现的页面，所以在此处处理
 */
onMounted(() => {
  // onBeforeInitDictionary();
});
</script>
