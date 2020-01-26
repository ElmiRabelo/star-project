import React from "react";
import { GlobalStyle } from "./styles/global";

import PeopleCard from "./components/PeopleCard/PeopleCard";
import PeopleOverview from "./components/PeopleOverview/PeopleOverview";

function App() {
  return (
    <div>
      <GlobalStyle />
      <PeopleOverview />
      {/* <PeopleCard
        name="Luke Feio"
        url="https://starwars-visualguide.com/assets/img/characters/2.jpg"
      /> */}
    </div>
  );
}

export default App;
