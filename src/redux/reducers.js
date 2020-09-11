import {
  REQUEST_MOVIE_PENDING,
  REQUEST_MOVIE_SUCCESS,
  REQUEST_MOVIE_FAILED,
} from "./constants";

const initialStateHero = {
  isPending: false,
  backdropPath: [],
  posterPath: [],
  error: "",
  heroAssets: {
    baseUrl: "https://image.tmdb.org/t/p",
    posterSize: [
      "/w92",
      "/w154",
      "/w185",
      "/w342",
      "/w500",
      "/w780",
      "/original",
    ],
    backdropSize: ["/w300", "/w780", "/w1280", "/original"],
  },
  test: {
    test1: "hel",
    test2: "lo",
  },
};

export const movieHero = (state = initialStateHero, action = {}) => {
  switch (action.type) {
    case REQUEST_MOVIE_PENDING:
      return { ...state, isPending: true };
    case REQUEST_MOVIE_SUCCESS:
      return {
        ...state,
        backdropPath: action.payload.backdropPath,
        posterPath: action.payload.posterPath,
        isPending: false,
        test: { test1: "good", test2: "bye" },
      };
    case REQUEST_MOVIE_FAILED:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
