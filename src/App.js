import React from "react";
import { GlobalStyle } from "./styles/global";

import PeopleOverview from "./components/PeopleOverview/PeopleOverview";

function App() {
  return (
    <div>
      <GlobalStyle />
      <PeopleOverview />
    </div>
  );
}

export default App;
