import React from "react";

import download from "../images/icons/download.svg";
import face from "../images/player.png";

const Stats: React.FC = () => {
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
      <div className="stats__chart" id="chart"></div>
    </div>
  );
};

export default Stats;
