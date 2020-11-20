import React from "react";
import "./top.css";

const TopCard = ({ baseUrl, heroGallery, posterSize }) => (
  <div className="indivisualCard p-3">
    <div className="top_card-img relative">
      <img
        className="rounded-lg"
        src={baseUrl + posterSize[3] + heroGallery?.poster_path}
        loading="lazy"
        alt={heroGallery?.title}
        width="200px"
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
  </div>
);

export default TopCard;
