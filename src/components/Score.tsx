import React from "react";

import PlayersBlock from "./PlayersBlock";
import Stats from "./Stats";

const Score: React.FC = () => {
  return (
    <div className="content__info">
      <PlayersBlock></PlayersBlock>
      <Stats></Stats>
    </div>
  );
};

export default Score;
