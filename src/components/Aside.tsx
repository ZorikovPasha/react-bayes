import React from "react";

import { ClubBlock, Menu } from "./index";

import logo from "../images/logo.svg";
import logoMob from "../images/logo-mobile.svg";

const Aside: React.FC = () => {
  return (
    <aside className="aside">
      <div className="aside__body">
        <a href="#" className="logo">
          <picture>
            <source media="(max-width: 1279px)" srcSet={logoMob} />
            <source media="(min-width: 1280px)" srcSet={logo} />
            <img src="images/logo.svg" alt="logo" />
          </picture>
        </a>
        <Menu></Menu>
        <ClubBlock></ClubBlock>
        <button className="aside__feedback" type="button">
          <span>Дать обратную связь</span>
        </button>
      </div>
    </aside>
  );
};

export default Aside;
