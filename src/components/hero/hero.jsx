import React, { Fragment, useEffect } from "react";
import "./hero.css";

import { connect } from "react-redux";
import { getPopularMovie } from "../../redux/actions";

const mapStateToProps = (state) => {
  return {
    isPending: state.movieHero.isPending,
    error: state.movieHero.error,
    baseUrl: state.movieHero.heroAssets.baseUrl,
    posterSize: state.movieHero.heroAssets.posterSize,
    backdropSize: state.movieHero.heroAssets.backdropSize,
    heroGallery: state.movieHero.heroGallery,
  };
};

const mapDispatchToProps = (dispatch) => {
  return { requestPopularMovie: () => dispatch(getPopularMovie()) };
};

const Hero = ({
  heroGallery,
  backdropPath,
  posterPath,
  isPending,
  error,
  baseUrl,
  posterSize,
  backdropSize,
  requestPopularMovie,
}) => {
  const cover = (
    <Fragment>
      <div className="imgcontainer item1">
        <img
          className="image img1"
          src={baseUrl + backdropSize[1] + heroGallery[0]?.backdrop_path}
          alt={heroGallery[0]?.title + ""}
        />
        <div className="title-hover">{heroGallery[0]?.title}</div>
      </div>

      <div className="imgcontainer item0">
        <img
          className="image img0"
          src={baseUrl + backdropSize[1] + heroGallery[1]?.backdrop_path}
          alt={heroGallery[1]?.title + ""}
        />
        <div className="title-hover">{heroGallery[1]?.title}</div>
      </div>

      <div className="imgcontainer item3">
        <img
          className="image img3"
          src={baseUrl + backdropSize[1] + heroGallery[2]?.backdrop_path}
          alt={heroGallery[2]?.title + ""}
        />
        <div className="title-hover">{heroGallery[2]?.title}</div>
      </div>

      <div className="imgcontainer item2">
        <img
          className="image img2"
          src={baseUrl + backdropSize[1] + heroGallery[4]?.backdrop_path}
          alt={heroGallery[4]?.title + ""}
        />
        <div className="title-hover">{heroGallery[4]?.title}</div>
      </div>

      <div className="imgcontainer item4">
        <img
          className="image img4"
          src={baseUrl + backdropSize[1] + heroGallery[3]?.backdrop_path}
          alt={heroGallery[3]?.title + ""}
        />
        <div className="title-hover">{heroGallery[3]?.title}</div>
      </div>
    </Fragment>
  );

  console.log(heroGallery);

  useEffect(() => {
    requestPopularMovie();
  }, [requestPopularMovie]);

  return (
    <section className="grid-container mt-10">
      <div className="grid">{cover}</div>
    </section>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Hero);
