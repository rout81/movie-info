import React, { Fragment, useEffect } from "react";
import "./hero.css";

import { connect } from "react-redux";
import { getPopularMovie } from "../../redux/actions";

const imglist = [
  {
    img:
      "https://images.pexels.com/photos/2441454/pexels-photo-2441454.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    id: "sdlf",
  },
  {
    img:
      "https://images.pexels.com/photos/3684544/pexels-photo-3684544.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    id: "sdfhlf",
  },
  {
    img:
      "https://images.pexels.com/photos/1545505/pexels-photo-1545505.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    id: "sfsdfdlf",
  },
  {
    img:
      "https://images.pexels.com/photos/1395074/pexels-photo-1395074.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    id: "sdhalf",
  },
  {
    img:
      "https://images.pexels.com/photos/1292241/pexels-photo-1292241.jpeg?cs=srgb&dl=pexels-steve-johnson-1292241.jpg&fm=jpg",
    id: "sdsflf",
  },
  {
    img:
      "https://images.pexels.com/photos/2528324/pexels-photo-2528324.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    id: "sdtrlf",
  },
  {
    img:
      "https://images.pexels.com/photos/3789871/pexels-photo-3789871.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    id: "sdxvlf",
  },
  {
    img:
      "https://images.pexels.com/photos/216597/pexels-photo-216597.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    id: "sdklf",
  },
  {
    img:
      "https://images.pexels.com/photos/3283186/pexels-photo-3283186.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    id: "sdyilf",
  },
  {
    img:
      "https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    id: "sdweryhglf",
  },
];

const mapStateToProps = (state) => {
  return {
    posterPath: state.movieHero.posterPath,
    backdropPath: state.movieHero.backdropPath,
    isPending: state.movieHero.isPending,
    error: state.movieHero.error,
    baseUrl: state.movieHero.heroAssets.baseUrl,
    posterSize: state.movieHero.heroAssets.posterSize,
    backdropSize: state.movieHero.heroAssets.backdropSize,
    test: state.movieHero.test,
  };
};

const mapDispatchToProps = (dispatch) => {
  return { requestPopularMovie: () => dispatch(getPopularMovie()) };
};

const Hero = ({
  test,
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
          src={baseUrl + posterSize[3] + posterPath[1]}
          alt={imglist[0].item}
        />
      </div>
      <div className="imgcontainer item1">
        <img
          className="image img1"
          src={baseUrl + backdropSize[1] + backdropPath[0]}
          alt={imglist[0].item}
        />
      </div>
      <div className="imgcontainer item2">
        <img
          className="image img2"
          src={baseUrl + backdropSize[1] + backdropPath[4]}
          alt={imglist[0].item}
        />
      </div>
      <div className="imgcontainer item3">
        <img
          className="image img3"
          src={baseUrl + posterSize[3] + posterPath[2]}
          alt={imglist[0].item}
        />
      </div>
      <div className="imgcontainer item4">
        <img
          className="image img4"
          src={baseUrl + posterSize[2] + posterPath[8]}
          alt={imglist[0].item}
        />
      </div>
      <div className="imgcontainer item5">
        <img
          className="image img5"
          src={baseUrl + posterSize[2] + posterPath[9]}
          alt={imglist[0].item}
        />
      </div>
      <div className="imgcontainer item6">
        <img
          className="image img6"
          src={baseUrl + posterSize[2] + posterPath[5]}
          alt={imglist[0].item}
        />
      </div>
      <div className="imgcontainer item7">
        <img
          className="image img7"
          src={baseUrl + posterSize[2] + posterPath[6]}
          alt={imglist[0].item}
        />
      </div>
      <div className="imgcontainer item8">
        <img
          className="image img8"
          src={baseUrl + backdropSize[1] + backdropPath[3]}
          alt={imglist[0].item}
        />
      </div>
      <div className="imgcontainer item9">
        <img
          className="image img9"
          src={baseUrl + posterSize[2] + posterPath[7]}
          alt={imglist[0].item}
        />
      </div>
    </Fragment>
  );

  useEffect(() => {
    requestPopularMovie();
  }, [requestPopularMovie]);

  console.log(test.test1);

  return (
    <div className="container">
      <div className="grid">{cover}</div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Hero);
