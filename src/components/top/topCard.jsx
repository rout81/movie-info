import React from "react";

const TopCard = ({ baseUrl, heroGallery, posterSize }) => (
  <div>
    <img
      className="rounded-lg"
      src={baseUrl + posterSize[3] + heroGallery[0]?.poster_path}
      loading="lazy"
      alt="airplane"
      width="180px"
      height="auto"
    />
    <div className="flex justify-between items-center p-1">
      <div className="font-medium">{heroGallery[0]?.title}</div>
      <div className="flex items-center">
        <i className="material-icons text-lg text-yellow-600 pr-1">grade</i>
        <div className="mt-1">{heroGallery[0]?.vote_average}</div>
      </div>
    </div>
  </div>
);

export default TopCard;
