import React, { Fragment } from "react";
import "./homepage.css";
import Hero from "../../components/hero/hero";
import Popular from "../../components/popular/popular";
import TopRated from "../../components/toprated/toprated";
import Upcoming from "../../components/upcoming";

const Homepage = () => (
  <Fragment>
    <Hero />
    <Popular />
    <TopRated />
    <Upcoming />
  </Fragment>
);

export default Homepage;
