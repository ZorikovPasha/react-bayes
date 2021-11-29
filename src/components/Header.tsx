import React, { useState } from "react";

import { Link } from "react-router-dom";

import avatar from "../images/avatar.png";

const Header: React.FC = () => {
  const [currentNavItem, setCurrentNavItem] = useState<string>("");

  const onClickNavItem: React.MouseEventHandler<HTMLLIElement> = (e: any): void => {
    setCurrentNavItem(e.currentTarget.id);
  };

  const navItems = [
    {
      link: "Brief",
      text: "Сводка",
    },
    {
      link: "Lineups",
      text: "Составы",
    },
    {
      link: "Statistics",
      text: "Подробная статистика",
    },
    {
      link: "Analysys",
      text: "Анализ матча",
    },
  ];

  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__left">
          <h1 className="header__title">Обзор матча</h1>
          <nav className="nav">
            <ul className="nav__list">
              {navItems.map((item) => (
                <li 
                  className={currentNavItem === item.link ? "nav__item active" : "nav__item"} 
                  onClick={onClickNavItem} 
                  id={item.link}
                  key={item.link}
                  >
                  <Link to={`/${item.link}`}>{item.text}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <a className="profile" href="#">
          <img src={avatar} alt="avatar" />
        </a>
      </div>
    </header>
  );
};

export default Header;
