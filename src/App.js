import React from "react";
import { GlobalStyle } from "./styles/global";
import { Switch, Route } from "react-router-dom";

import PeopleOverview from "./components/PeopleOverview/PeopleOverview";
import PeopleDetails from "./pages/PeopleDetails/PeopleDetails";
import Header from "./components/Header/Header";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/" component={PeopleOverview} />
        <Route exact path="/people/:id" component={PeopleDetails} />
      </Switch>
    </div>
  );
}

export default App;
