import React,{useEffect} from "react";
import { useDispatch } from "react-redux";
import "./Trending.scss";
import { withRouter } from "react-router";
import Card from "./Card";
const TrendingMovies =({trending , type , history , font , btnText}) => {
  const dispatch = useDispatch();
  const navigateDetailsPage = (movie, font, btnText) => {
    history.push({ 
        pathname: '/details',
        state: movie,
        btnText: btnText,
        font: font
       });
  }
  
    return (
      <div className="container text-center">
        <div> {type} </div>
        <div
          className="row"
        >
          {trending.map((movie) => <Card movie={movie} key={movie.id} navigateDetailsPage= {navigateDetailsPage} btnText={btnText} font={font}/>)}
        </div>
        <hr className="cards-separator" />
      </div>
    );
}



export default withRouter(TrendingMovies);