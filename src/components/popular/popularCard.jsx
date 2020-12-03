import React from "react";
import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { setId } from "../../redux/actions";

import "./popular.css";

const PopularCard = ({ baseUrl, heroGallery, posterSize, id }) => {
  // const clicked = () => {
  //   test = id;
  //   console.log(id);
  // };
  // const dispatch = useDispatch();

  return (
    <Link
      to={`/${id}`}
      // onClick={() => dispatch(setId(id))}
      className="indivisualCard m-3"
    >
      <div className="top_card-img relative">
        <img
          className="rounded-lg"
          src={baseUrl + posterSize[3] + heroGallery?.poster_path}
          loading="lazy"
          alt={heroGallery?.title}
          width="180px"
          height="auto"
        />
        <div className="absolute bottom-0 right-0 p-2 flex items-center">
          <i className="material-icons text-lg text-yellow-600 pr-1">grade</i>
          <div className="text-white textShadowSmall">
            {heroGallery?.vote_average}
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center p-1">
        <div className="text-sm">{heroGallery?.title}</div>
      </div>
    </Link>
  );
};

export default PopularCard;
