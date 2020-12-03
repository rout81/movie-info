import {
  REQUEST_MOVIE_PENDING,
  REQUEST_MOVIE_SUCCESS,
  REQUEST_MOVIE_FAILED,
  GET_ID,
} from "./constants";

const movieHeroFetch =
  "https://api.themoviedb.org/3/discover/movie?api_key=b7be0351bf3b452a41f66ab64454e67c&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";

const topRatedFetch =
  "https://api.themoviedb.org/3/movie/top_rated?api_key=b7be0351bf3b452a41f66ab64454e67c&language=en-US&page=1";

const upcomingFetch =
  "https://api.themoviedb.org/3/movie/upcoming?api_key=b7be0351bf3b452a41f66ab64454e67c&language=en-US&page=1";

export const setId = (id) => ({
  type: GET_ID,
  payload: id,
});

export const getPopularMovie = () => (dispatch) => {
  dispatch({ type: REQUEST_MOVIE_PENDING });
  Promise.all([
    fetch(movieHeroFetch),
    fetch(topRatedFetch),
    fetch(upcomingFetch),
  ])
    .then((responses) =>
      Promise.all(responses.map((response) => response.json()))
    )
    .then((data) => {
      dispatch({
        type: REQUEST_MOVIE_SUCCESS,
        payload: {
          heroGallery: data,
        },
      });
    })
    .catch((error) => dispatch({ type: REQUEST_MOVIE_FAILED, payload: error }));
};

// export const getPopularMovie = () => (dispatch) => {
//   dispatch({ type: REQUEST_MOVIE_PENDING });
//   fetch(movieHeroFetch)
//     .then((response) => response.json())
//     .then((user) => {
//       const heroGallery = user.results;
//       dispatch({
//         type: REQUEST_MOVIE_SUCCESS,
//         payload: {
//           heroGallery: heroGallery,
//         },
//       });
//     })
//     .catch((error) => dispatch({ type: REQUEST_MOVIE_FAILED, payload: error }));
// };

// export const getTopRated = () => (dispatch) => {
//   dispatch({ type: REQUEST_MOVIE_PENDING });
//   fetch(topRatedFetch)
//     .then((response) => response.json())
//     .then((test) => {
//       dispatch({
//         type: REQUEST_MOVIE_SUCCESS,
//         payload: {
//           test: test,
//         },
//       });
//     })
//     .catch((error) => dispatch({ type: REQUEST_MOVIE_FAILED, payload: error }));
// };
