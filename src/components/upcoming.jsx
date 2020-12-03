import React from "react";
import "./popular/popular.css";
import { connect } from "react-redux";
import PopularCard from "./popular/popularCard";

const mapStateToProps = (state) => {
  return {
    isPending: state.movieHero.isPending,
    error: state.movieHero.error,
    baseUrl: state.movieHero.heroAssets.baseUrl,
    posterSize: state.movieHero.heroAssets.posterSize,
    backdropSize: state.movieHero.heroAssets.backdropSize,
    heroGallery: state.movieHero.heroGallery?.[2]?.results,
  };
};

const Upcoming = ({ heroGallery, posterSize, baseUrl }) => {
  return (
    <div className="mt-10">
      <h2 className="font-semibold text-lg">Upcoming</h2>
      <div className="py-3 flex topCards">
        {heroGallery?.map((heroGallery) => (
          <PopularCard
            key={heroGallery.id}
            id={heroGallery.id}
            heroGallery={heroGallery}
            posterSize={posterSize}
            baseUrl={baseUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(Upcoming);
