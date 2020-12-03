import React from "react";
import "../popular/popular.css";
import { connect } from "react-redux";
import PopularCard from "../popular/popularCard";
// import { getTopRated } from "../../redux/actions";

const mapStateToProps = (state) => {
  return {
    isPending: state.movieHero.isPending,
    error: state.movieHero.error,
    baseUrl: state.movieHero.heroAssets.baseUrl,
    posterSize: state.movieHero.heroAssets.posterSize,
    backdropSize: state.movieHero.heroAssets.backdropSize,
    heroGallery: state.movieHero.heroGallery?.[1]?.results,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return { requestTopRated: () => dispatch(getTopRated()) };
// };

const TopRated = ({ heroGallery, posterSize, baseUrl }) => {
  return (
    <div className="mt-10">
      <h2 className="font-semibold text-lg">Top Rated</h2>
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

export default connect(mapStateToProps)(TopRated);
