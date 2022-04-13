interface StatChartType {
  series?: any;
  chart?: any;
  legend?: any;
  dataLabels?: any;
  stroke?: any;
  fill?: any;
  xaxis?: any;
  colors?: any;
}
const StatisticsChart: StatChartType = {
  series: [
    {
      type: "area",
      name: "Gross Revenue",
      data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47],
    },
    {
      type: "area",
      name: "Net Profit",
      data: [28, 41, 52, 42, 13, 18, 29, 18, 36, 51, 55, 35],
    },
    {
      type: "area",
      name: "Load Volume",
      data: [45, 52, 38, 24, 33, 65, 45, 75, 54, 18, 28, 10],
    },
  ],
  chart: {
    height: 350,
    type: "line",
    toolbar: {
      show: true,
    },

  },
  dataLabels: {
    enabled: false,
  },

  stroke: {
    curve: "smooth",
    width: 2,
    dashArray: [0, 0, 0],
  },
  fill: {
    type: "solid",
    opacity: [0.15, 0.05, 0.15],
  },
  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  },

  colors: ["#f1b44c", "#3452e1", "#1DA1F2"],
};

export { StatChartType, StatisticsChart };
