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
      <div className="imgcontainer item0">
        <img
          className="image img0"
          src={baseUrl + backdropSize[3] + heroGallery[1]?.backdrop_path}
          alt={heroGallery[1]?.title + ""}
        />
        <div className="title title1">
          <p>{heroGallery[1]?.title}</p>
        </div>
      </div>
      <div className="imgcontainer item1">
        <img
          className="image img1"
          src={baseUrl + backdropSize[1] + heroGallery[0]?.backdrop_path}
          alt={heroGallery[0]?.title + ""}
        />
        <div className="title title0">
          <p>{heroGallery[0]?.title}</p>
        </div>
      </div>
      <div className="imgcontainer item2">
        <img
          className="image img2"
          src={baseUrl + backdropSize[1] + heroGallery[4]?.backdrop_path}
          alt={heroGallery[4]?.title + ""}
        />
        <div className="title title4">
          <p>{heroGallery[4]?.title}</p>
        </div>
      </div>
      <div className="imgcontainer item3">
        <img
          className="image img3"
          src={baseUrl + posterSize[3] + heroGallery[2]?.poster_path}
          alt={heroGallery[2]?.title + ""}
        />
        <div className="title title2">
          <p>{heroGallery[2]?.title}</p>
        </div>
      </div>
      <div className="imgcontainer item4">
        <img
          className="image img4"
          src={baseUrl + backdropSize[1] + heroGallery[8]?.backdrop_path}
          alt={heroGallery[8]?.title + ""}
        />
        <div className="title title8">
          <p>{heroGallery[8]?.title}</p>
        </div>
      </div>
      <div className="imgcontainer item5">
        <img
          className="image img5"
          src={baseUrl + backdropSize[1] + heroGallery[9]?.backdrop_path}
          alt={heroGallery[9]?.title + ""}
        />
        <div className="title title9">
          <p>{heroGallery[9]?.title}</p>
        </div>
      </div>
      <div className="imgcontainer item6">
        <img
          className="image img6"
          src={baseUrl + posterSize[2] + heroGallery[5]?.poster_path}
          alt={heroGallery[5]?.title + ""}
        />
        <div className="title title5">
          <p>{heroGallery[5]?.title}</p>
        </div>
      </div>
      <div className="imgcontainer item7">
        <img
          className="image img7"
          src={baseUrl + posterSize[2] + heroGallery[6]?.poster_path}
          alt={heroGallery[6]?.title + ""}
        />
        <div className="title title6">
          <p>{heroGallery[6]?.title}</p>
        </div>
      </div>
      <div className="imgcontainer item8">
        <img
          className="image img8"
          src={baseUrl + backdropSize[1] + heroGallery[3]?.backdrop_path}
          alt={heroGallery[3]?.title + ""}
        />
        <div className="title title3">
          <p>{heroGallery[3]?.title}</p>
        </div>
      </div>
      <div className="imgcontainer item9">
        <img
          className="image img9"
          src={baseUrl + posterSize[2] + heroGallery[7]?.poster_path}
          alt={heroGallery[7]?.title + ""}
        />
        <div className="title title7">
          <p>{heroGallery[7]?.title}</p>
        </div>
      </div>
    </Fragment>
  );

  console.log(heroGallery);

  useEffect(() => {
    requestPopularMovie();
  }, [requestPopularMovie]);

  return (
    <div className="container">
      <div className="grid">{cover}</div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Hero);
