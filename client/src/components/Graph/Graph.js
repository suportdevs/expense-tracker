import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { default as api } from "../../store/apiSlice";
import { getChartData, getTotal } from "../../utilies/functions";

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

const Graph = () => {
  const { data, isError, isFetching, isLoading, isSuccess } =
    api.useGetTransactionLabelsQuery();

  let graphData;
  if (isError) {
    graphData = <div>There was an error!</div>;
  } else if (isFetching || isLoading) {
    graphData = <div>Loading...</div>;
  } else if (isSuccess) {
    console.log(getChartData(data));
    graphData = <Doughnut {...getChartData(data)} />;
  }
  return (
    <div className="chart relative">
      {graphData}
      <h4 className="absolute mb-4 font-bold mx-auto left-0 right-0 top-36 text-center">
        Total{" "}
        <span className="block text-3xl text-emerald-400">
          ${getTotal(data)}
        </span>
      </h4>
    </div>
  );
};

export default Graph;
