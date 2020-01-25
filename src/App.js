import React from "react";
import { GlobalStyle } from "./styles/global";

import PeopleCard from "./components/PeopleCard/PeopleCard";

function App() {
  return (
    <div>
      <GlobalStyle />
      <PeopleCard />
    </div>
  );
}

export default App;
