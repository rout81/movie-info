import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

import Header from "./components/header/header";
import Homepage from "./pages/homepage/homepage";
import Details from "./pages/detailspage/detailspage";
import Footer from "./components/footer/footer";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Route exact path="/" component={Homepage} />
        <Route path="/:details" component={Details} />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
