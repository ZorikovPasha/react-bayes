import React from "react";
import Plot from "react-plotlyjs-ts";


import download from "../images/icons/download.svg";
import face from "../images/player.png";

interface IStatsProps {
  features: number[]
}

const Stats: React.FC<IStatsProps> = ({ features }) => {

  const metrics: string[] = [];
  features &&
    features.map((_, idx) => {
      metrics.push(`matric_${idx}`);
    });

    // alert(features)

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
      {features &&  <div>{features}</div>}  
      {/* <div className="stats__chart" id="chart">
        {metrics && (
          <Plot
            data={[
              {
                type: "bar",
                x: [20, 15, -2],
                y: ["dd", "dd", "cc"],
                orientation: "h",
                width: 400,
                height: 400
              },
            ]}
          />
        )}
      </div> */}
    </div>
  );
};

export default Stats;
