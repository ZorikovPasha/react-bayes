import React from "react";

const Tabs: React.FC = () => {
  return (
    <div className="content__tabs tabs">
      <a href="" className="tabs__item active">
        Атака
      </a>
      <a href="" className="tabs__item">
        Оборона
      </a>
      <a href="" className="tabs__item">
        Пасы
      </a>
      <a href="" className="tabs__item">
        BT Score
      </a>
    </div>
  );
};

export default Tabs;
