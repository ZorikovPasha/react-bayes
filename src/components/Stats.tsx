import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

import download from "../images/icons/download.svg";
import face from "../images/player.png";

interface IStatsProps {
  features: number[];
}

const Stats: React.FC<IStatsProps> = ({ features }) => {
  ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

  const metrics: string[] = [];
  features &&
    features.map((_, idx) => {
      metrics.push(`matric_${idx}`);
    });

  const options = {
    indexAxis: "y" as const,
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: "right" as const,
      },
      title: {
        display: false,
      },
    },
    legend: {
      display: false
   }
  };

  const data = {
    labels: metrics,
    datasets: [
      {
        label: "",
        data: features,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <div className="content__stats stats">
      <div className="stats__top">
        <h4 className="stats__top-title">Значимость каждого показателя в расчете оценки игрока</h4>

        <div className="stats__card card">
          <span className="card__score">8.2</span>
          <div className="card__info">
            <p className="card__name">E. Ponce</p>
            <p className="card__country">LW</p>
          </div>
          <p className="card__num">19</p>
          <img src={face} alt="player's face" />
        </div>

        <button className="stats__download">
          <img src={download} alt="download" />
        </button>
      </div>

      <Bar options={options} data={data} />

    </div>
  );
};

export default Stats;
