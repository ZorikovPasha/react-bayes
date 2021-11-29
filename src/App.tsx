import React, { FC } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";

import { Aside, Header, Statistics } from "./components";

import "./scss/style.scss";
import store from "./redux/store";

const App: FC = () => {
  return (
    <Provider store={store}>
    <div className="container">
      <div className="wrapper__inner">
        <Aside></Aside>

        <main className="main">
          <BrowserRouter>
            <Header></Header>

            <Route path="/Brief" render={() => <div></div>  } exact></Route>
            <Route path="/Lineups" render={() => <div></div>  } exact></Route>
            <Route path="/Statistics" component={Statistics}></Route>
            <Route path="/Analysys" render={() => <div></div>  } exact></Route>
          </BrowserRouter>
        </main>
      </div>
    </div>
    </Provider>
  );
};

export default App;
