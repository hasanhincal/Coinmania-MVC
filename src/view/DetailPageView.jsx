import millify from "millify";
import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Line } from "react-chartjs-2";

const DetailPageView = ({ model }) => {
  console.log(model);
  return (
    <div className="container p-3">
      <h3 className="text-center ">
        <span className="font-bold me-3">{model.coin?.name}</span>
        <span className="text-warning">{model.coin?.symbol}</span>
      </h3>
      <div className="row">
        <div className=" col-md-3 d-flex flex-column text-center ">
          {model?.infoFields.map((info, index) => (
            <div
              key={index}
              className="card bg-dark text-white border my-3 p-3"
            >
              <div>
                <h3>{info.icon}</h3>

                <h3 className="my-3">{info.label}</h3>
                <p>{millify(Number(info.value))}</p>
              </div>
            </div>
          ))}
        </div>
        <div className=" col-md-9 p-3">
          <Line className="mb-5" data={model.chartData} />
          <Bar data={model.chartData} />
        </div>
      </div>
    </div>
  );
};

export default DetailPageView;
