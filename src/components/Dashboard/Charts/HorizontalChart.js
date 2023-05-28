import React, { Component } from "react";
import Chart from "react-apexcharts";

class HorizontalChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: true,
            barHeight: "40%",
          },
        },
        chart: {
          id: "apexchart-example",
          toolbar: {
            show: false,
          },
          foreColor: "#fff",
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          categories: Object.keys(
            JSON.parse(localStorage.getItem("dashboardPage")).performance
          ),
        },
        fill: {
          colors: ["#ffffff", "#E91E63", "#9C27B0"],
        },
      },
      series: [
        {
          name: "featured",
          data: Object.values(
            JSON.parse(localStorage.getItem("dashboardPage")).performance
          ),
        },
      ],
    };
  }
  render() {
    return (
        <Chart options={this.state.options} series={this.state.series} type="bar"/>
    );
  }
}
export default HorizontalChart;