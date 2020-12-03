import React from "react";
import "./detailsHero.css";
import { useSelector } from "react-redux";

const DetailsHero = ({ movie }) => {
  const releaseYear = new Date(movie.release_date).getFullYear().toString();
  const assets = useSelector((state) => state.movieHero.heroAssets);
  const baseUrl = assets.baseUrl;
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });
  return Object.keys(movie).length > 0 ? (
    <div className="details_hero flex items-center">
      <div>
        <img
          className="rounded-lg"
          src={baseUrl + assets.posterSize[3] + movie.poster_path}
          width="300px"
          alt="sponge"
        />
      </div>

      <div className="details ml-12 flex-1">
        <div className="flex items-center">
          <h2 className="mr-1 font-extrabold text-4xl">{movie.title}</h2>
          <div className="text-3xl text-gray-900">({releaseYear})</div>
        </div>

        <div>
          {" "}
          <span className="text-gray-800">
            {movie.genres?.map((genre) => (
              <span className="mr-1" key={genre.id}>
                {genre.name}
              </span>
            ))}
          </span>
          <span className="runtime">{movie.runtime}m</span>
        </div>
        <div className="mt-6 italic text-xl text-gray-900">{movie.tagline}</div>
        <div className="mt-6 mb-2 text-2xl font-semibold">Overview</div>
        <div className="text-lg">{movie.overview}</div>
        <div className="mt-4">
          <span className="mr-3">
            <strong>Budget:</strong> {formatter.format(Number(movie.budget))}
          </span>
          <span className="mr-3">
            <strong>Revenue:</strong> {formatter.format(Number(movie.revenue))}
          </span>
          <span className="mr-3">
            <strong>Rating:</strong> {movie.vote_average}
            <i className="material-icons align-middle mb-1 leading-3 text-lg text-yellow-600 pr-1">
              grade
            </i>
          </span>
        </div>
        <div className="mt-4">
          <span className="mr-3">
            <strong>Release Date: </strong>
            {movie.release_date}
          </span>
          <span className="mr-3">
            <strong>Country: </strong>
            {movie.production_countries[0]?.name}
          </span>
          <span className="mr-3">
            <strong>Language: </strong>
            {movie.spoken_languages[0]?.english_name}
          </span>
        </div>
      </div>
    </div>
  ) : (
    <div className="spinner_div">
      <div className="spinner"></div>
    </div>
  );
};

export default DetailsHero;
