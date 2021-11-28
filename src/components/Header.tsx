import React from "react";

import avatar from "../images/avatar.png";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__left">
          <h1 className="header__title">Обзор матча</h1>
          <nav className="nav">
            <ul className="nav__list">
              <li className="nav__item">
                <a className="nav__link" href="#">
                  Сводка
                </a>
              </li>
              <li className="nav__item active">
                <a className="nav__link" href="#">
                  Составы
                </a>
              </li>
              <li className="nav__item">
                <a className="nav__link" href="#">
                  Подробная статистика
                </a>
              </li>
              <li className="nav__item">
                <a className="nav__link" href="#">
                  Анализ матча
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <a href="" className="profile">
          <img src={avatar} alt="avatar" />
        </a>
      </div>
    </header>
  );
};

export default Header;
