import React from "react";
import { useSelector } from "react-redux";
import "./detailsActors.css";

const TopActors = ({ peoples }) => {
  console.log(peoples);
  const assets = useSelector((state) => state.movieHero.heroAssets);

  return (
    <div className="mt-5">
      <h2 className="font-bold text-xl">Cast</h2>
      <div className="flex overflow-auto mt-2">
        {peoples?.cast?.map((people) => {
          const photo =
            people?.profile_path === null
              ? "https://picsum.photos/200/300"
              : assets.baseUrl + assets.posterSize[1] + people?.profile_path;
          return (
            <div
              key={people?.id}
              className="m-2 actor_card shadow-2xl rounded-lg"
            >
              <img
                className="object-cover rounded-t-lg"
                src={photo}
                width="100%"
                height="auto"
                alt={people?.name}
              />
              <p className="font-bold m-1 text-sm">{people?.name}</p>
              <p className="text-xs m-1 font-light">{people?.character}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopActors;
