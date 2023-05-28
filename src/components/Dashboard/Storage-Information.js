import React from "react";
import PieChart from './Charts/PieChart';
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const Information= ({ chartData }) => {
  return (
    <>
        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 tm-block-col">
          <div className="tm-bg-primary-dark tm-block tm-block-taller">
            <h2 className="tm-block-title">Storage Information</h2>
            <div id="pieChartContainer">
              <Pie data={chartData} />
            </div>                        
          </div>
        </div>
    </>
  );
}

export default Information;