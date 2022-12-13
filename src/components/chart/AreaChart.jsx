import React from "react";
import ReactApexChart from "react-apexcharts";
import { useState } from "react";

function AreaChart() {
  const [data, setData] = useState({
    series: [
      {
        name: "STOCK ABC",
        data: [30, 40, 45, 50, 49, 60, 70, 91, 125],
        style: {
          color: "#F9FAFB",
        },
      },
    ],
    options: {
      chart: {
        type: "area",
        height: 350,
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },

      labels: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      xaxis: {
        type: "datetime",
      },
      yaxis: {
        opposite: true,
      },
      legend: {
        horizontalAlign: "left",
      },
    },
  });
  return (
    <div>
      <ReactApexChart
        className="text-dark bg-dark3 rounded-lg border border-dark4"
        options={data.options}
        series={data.series}
        type="area"
        height={350}
      />
    </div>
  );
}

export default AreaChart;
