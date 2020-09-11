import {
  REQUEST_MOVIE_PENDING,
  REQUEST_MOVIE_SUCCESS,
  REQUEST_MOVIE_FAILED,
} from "./constants";

const movieHeroFetch =
  "https://api.themoviedb.org/3/discover/movie?api_key=b7be0351bf3b452a41f66ab64454e67c&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";

export const getPopularMovie = () => (dispatch) => {
  dispatch({ type: REQUEST_MOVIE_PENDING });
  fetch(movieHeroFetch)
    .then((response) => response.json())
    .then((user) => {
      const backdropPath = user.results
        .sort((a, b) => b.popularity - a.popularity)
        .slice(0, 10)
        .map((backdrop) => backdrop.backdrop_path);
      const posterPath = user.results
        .sort((a, b) => b.popularity - a.popularity)
        .slice(0, 10)
        .map((poster) => poster.poster_path);
      dispatch({
        type: REQUEST_MOVIE_SUCCESS,
        payload: { backdropPath: backdropPath, posterPath: posterPath },
      });
    })
    .catch((error) => dispatch({ type: REQUEST_MOVIE_FAILED, payload: error }));
};
