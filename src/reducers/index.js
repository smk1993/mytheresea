import {
    combineReducers
  } from "redux";
  import TrendingMoviesReducer from "./TrendingMovieReducer";
  import secondGenreReducer from "./secondGenreReducer";
  import thirdGenreReducer from "./thirdGenreReducer";
  import wishListReducer from "./wishListReducer";
  
  export default combineReducers({
    trending: TrendingMoviesReducer,
    secondGenre  :secondGenreReducer,
    thirdGenre:thirdGenreReducer,
    wishList : wishListReducer


  });