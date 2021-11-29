import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { featuresThunkCreator } from "../redux/actions/features";
import { IRootState } from "../redux/store";

import PlayersBlock from "./PlayersBlock";
import Stats from "./Stats";

const Score: React.FC = () => {

  const dispatch = useDispatch();

  const [activePlayer, setActivePlayer] = useState(0)

  const onClickPlayer = (activePlayer: number) => {
    setActivePlayer(activePlayer)
    dispatch(featuresThunkCreator(activePlayer));
  }

  useEffect(() => {
    dispatch(featuresThunkCreator(activePlayer));
  })

  const features = useSelector((state: IRootState) => state.featuresReducer.features);


  return (
    <div className="content__info">
      <PlayersBlock activePlayer={activePlayer} onClickPlayer={onClickPlayer}></PlayersBlock>
      <Stats features={features}></Stats>
    </div>
  );
};

export default Score;
