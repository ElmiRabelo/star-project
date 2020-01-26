import React from "react";
import { GlobalStyle } from "./styles/global";
import { Switch, Route } from "react-router-dom";

import PeopleOverview from "./components/PeopleOverview/PeopleOverview";
import PeopleDetails from "./pages/PeopleDetails/PeopleDetails";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={PeopleOverview} />
        <Route exact path="/people/:id" component={PeopleDetails} />
      </Switch>
    </div>
  );
}

export default App;
