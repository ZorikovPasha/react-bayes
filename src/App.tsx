import React, { FC } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";

import { Aside, Header, Tabs, PlayersBlock, Stats } from "./components";

import "./scss/style.scss";

const App: FC = () => {
  return (
    <div className="container">
      <div className="wrapper__inner">

        <Aside></Aside>

        <main className="main">

          <Header></Header>

          <div className="content">

          <Tabs></Tabs>
            <div className="content__info">

              <PlayersBlock></PlayersBlock>
              <Stats></Stats>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
