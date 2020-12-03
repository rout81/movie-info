import React from "react";
import "./popular.css";
import PopularCard from "./popularCard";
import { connect } from "react-redux";

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

const Popular = ({ heroGallery, posterSize, baseUrl }) => {
  return (
    <div className="mt-10">
      <h2 className="font-semibold text-lg">Popular Now</h2>
      <div className="py-3 flex topCards">
        {heroGallery?.map((heroGallery) => (
          <PopularCard
            id={heroGallery.id}
            key={heroGallery.id}
            heroGallery={heroGallery}
            posterSize={posterSize}
            baseUrl={baseUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(Popular);
