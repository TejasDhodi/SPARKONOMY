import React, { useEffect, useRef } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement
);

const IncomeTrendChart: React.FC = () => {

  const chartRef = useRef<ChartJS<"bar"> | null>(null);

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Income",
        data: [0, 2000, 4000, 6000, 8000],
        type: 'bar',
        backgroundColor: "#8134AF",
        borderColor: "#8134AF",
        borderWidth: 1,
        yAxisID: "y-axis-1",
      },
      {
        label: "momGrowth",
        data: [-100, -50, 0, 50, 100, 50],
        type: "line",  
        borderColor: "maroon",
        backgroundColor: "transparent",
        fill: false,
        tension: 0.3,
        yAxisID: "y-axis-2",
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      "y-axis-1": {
        type: "linear",
        position: "left",
        ticks: { beginAtZero: true },
        title: { display: false, text: "Income ($)" },
      },
      "y-axis-2": {
        type: "linear",
        position: "right",
        ticks: { beginAtZero: true, callback: (value: number) => value + "%" },
        title: { display: false, text: "Growth (%)" },
      },
    },
    plugins: {
      legend: { position: "top" },
    },
  };

  useEffect(() => {
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg border border-[#F2F2F2] w-full">
      <h3 className="text-sm font-semibold text-[#6B7280] mb-1 lg:text-2xl">Income Trend</h3>
      <p className="text-xs text-[#6B7280] mb-2 lg:text-xl">
        Your monthly income and growth for the last 6 months.
      </p>
      <div className="w-full h-[auto] sm:h-[auto] lg:h-[500px] flex justify-center">
        {/* @ts-expect-error: Ignoring TypeScript error due to missing types for ChartJS props */}
        <Bar ref={chartRef} data={data} options={options} />
      </div>
    </div>
  );
};

export default IncomeTrendChart;
