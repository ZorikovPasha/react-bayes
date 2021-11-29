import React from "react";

import { tabsItemType } from "../types";

interface ITabsProps {
  tabs: tabsItemType[],
  currentTab: number,
  setcurrentTab: React.Dispatch<React.SetStateAction<number>>
}

const Tabs: React.FC<ITabsProps> = ({ tabs, currentTab, setcurrentTab }) => {

  const onClickTab: React.MouseEventHandler<HTMLLIElement> = (e: any): void => {
    setcurrentTab( Number(e.currentTarget.dataset.id) );
  };


  return (
    <div className="content__tabs tabs">
      {tabs.map((item) => (
        <li 
          className={currentTab === item.id ? "tabs__item active" : "tabs__item"} 
          onClick={onClickTab} 
          data-id={item.id}
          key={item.id}
          >
          {item.text}
        </li>
      ))}
    </div>
  );
};

export default Tabs;
