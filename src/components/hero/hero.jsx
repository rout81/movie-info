import React, { Fragment, useEffect } from "react";
import "./hero.css";
import "../detailsHero/detailsHero.css";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { getPopularMovie } from "../../redux/actions";

const mapStateToProps = (state) => {
  return {
    isPending: state.movieHero.isPending,
    error: state.movieHero.error,
    baseUrl: state.movieHero.heroAssets.baseUrl,
    posterSize: state.movieHero.heroAssets.posterSize,
    backdropSize: state.movieHero.heroAssets.backdropSize,
    heroGallery: state.movieHero.heroGallery?.[0]?.results,
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
      <Link to={"/" + heroGallery?.[0].id} className="imgcontainer item1">
        <img
          className="image img1"
          src={baseUrl + backdropSize[1] + heroGallery?.[0]?.backdrop_path}
          alt={heroGallery?.[0]?.title + ""}
        />
        <div className="title-hover">{heroGallery?.[0]?.title}</div>
      </Link>

      <Link to={"/" + heroGallery?.[1].id} className="imgcontainer item0">
        <img
          className="image img0"
          src={baseUrl + backdropSize[1] + heroGallery?.[1]?.backdrop_path}
          alt={heroGallery?.[1]?.title + ""}
        />
        <div className="title-hover">{heroGallery?.[1]?.title}</div>
      </Link>

      <Link to={"/" + heroGallery?.[2].id} className="imgcontainer item3">
        <img
          className="image img3"
          src={baseUrl + backdropSize[1] + heroGallery?.[2]?.backdrop_path}
          alt={heroGallery?.[2]?.title + ""}
        />
        <div className="title-hover">{heroGallery?.[2]?.title}</div>
      </Link>

      <Link to={"/" + heroGallery?.[4].id} className="imgcontainer item2">
        <img
          className="image img2"
          src={baseUrl + backdropSize[1] + heroGallery?.[4]?.backdrop_path}
          alt={heroGallery?.[4]?.title + ""}
        />
        <div className="title-hover">{heroGallery?.[4]?.title}</div>
      </Link>

      <Link to={"/" + heroGallery?.[3].id} className="imgcontainer item4">
        <img
          className="image img4"
          src={baseUrl + backdropSize[1] + heroGallery?.[3]?.backdrop_path}
          alt={heroGallery?.[3]?.title + ""}
        />
        <div className="title-hover">{heroGallery?.[3]?.title}</div>
      </Link>
    </Fragment>
  );

  console.log(heroGallery);

  useEffect(() => {
    requestPopularMovie();
  }, [requestPopularMovie]);

  return (
    <section className="grid-container mt-10">
      <div className="grid">
        {!isPending ? (
          cover
        ) : (
          <div className="spinner_div">
            <div className="spinner"></div>
          </div>
        )}
      </div>
    </section>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Hero);
