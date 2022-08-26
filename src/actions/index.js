

import movieApi from "../apis/movieapi";
import {

  FETCH_TRENDING_MOVIES,
  FETCH_SECOND_GENRE,
  FETCH_THIRD_GENRE,
  ADD_TO_WISHLIST
} from './types'



export const fetchTrendingMovies = () => async dispatch => {
  const response = await movieApi.get(
    `movie/top_rated?api_key=5fb27ee2362c619dc78fe12b56540c4e`
  );
  dispatch({
    type: FETCH_TRENDING_MOVIES,
    payload: response.data.results
  });
};
export const fetchsecondGenere = () => async dispatch => {
    const response = await movieApi.get(
      `discover/movie?api_key=5fb27ee2362c619dc78fe12b56540c4e&&with_genres=28`
    );
    dispatch({
      type: FETCH_SECOND_GENRE,
      payload: response.data.results
    });
  };
  export const fetchthirdGenere = () => async dispatch => {
    const response = await movieApi.get(
        `/trending/all/day?api_key=5fb27ee2362c619dc78fe12b56540c4e`
    );
    dispatch({
      type: FETCH_THIRD_GENRE,
      payload: response.data.results
    });
  };


