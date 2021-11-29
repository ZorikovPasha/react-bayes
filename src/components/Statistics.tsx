import React, { useState } from "react";

import Tabs from "./Tabs";
import Score from "./Score";

const Statistics: React.FC = () => {

  const tabs = [
    {
      id: 0,
      link: "Attack",
      text: "Атака",
    },
    {
      id: 1,
      link: "Defence",
      text: "Оборона",
    },
    {
      id: 2,
      link: "Passes",
      text: "Пасы",
    },
    {
      id: 3,
      link: "Score",
      text: "BT Score",
    },
  ];

  const contents = [
    <div></div>,
    <div></div>,
    <div></div>,
    <Score></Score>
  ]

  const [currentTab, setcurrentTab] = useState(-1);

  return (
    <div className="content">
        <Tabs 
          tabs={tabs} 
          currentTab={currentTab} 
          setcurrentTab={setcurrentTab} 
          ></Tabs>
        { tabs[currentTab] && contents[currentTab] }
    </div>
  );
};

export default Statistics;
