import React, { lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

// import Header from "./components/header/header";
// import Homepage from "./pages/homepage/homepage";
// import Details from "./pages/detailspage/detailspage";
// import Footer from "./components/footer/footer";

const Header = lazy(() => import("./components/header/header"));
const Homepage = lazy(() => import("./pages/homepage/homepage"));
const Details = lazy(() => import("./pages/detailspage/detailspage"));
const Footer = lazy(() => import("./components/footer/footer"));

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Suspense fallback={<div>loading</div>}>
          <Header />
          <Route exact path="/" component={Homepage} />
          <Route path="/:details" component={Details} />
          <Footer />
        </Suspense>
      </div>
    </BrowserRouter>
  );
};

export default App;
