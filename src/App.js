import React from "react";
import "./App.css";

import Header from "./components/header/header";
import Homepage from "./pages/homepage/homepage";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Homepage />
    </div>
  );
};

export default App;
