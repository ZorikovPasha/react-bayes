import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../redux/store";
import { playersThunkCreator } from "../redux/actions/players";

const PlayersBlock: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(playersThunkCreator());
  }, []);

  const players = useSelector((state: IRootState) => state.playersReducer.players);

  return (
    <div className="content__block-players players-block">
      <h5 className="players-block__title">Выбрать игрока</h5>
      <ul className="players-block__list list">
        {players.map((player) => (
          <li className="list__item" key={player}>
            <label className="players-block__label label" htmlFor="">
              <input className="label__radio-real" type="radio" name={player} />
              <span className="label__radio-fake"></span>
              <span className="label__radio-text">{player}</span>
            </label>
            <span className="list__item-time">00.00</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlayersBlock;
