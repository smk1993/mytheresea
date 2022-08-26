import React,{useState} from 'react'
import "./Details.scss";
import { useSelector, useDispatch } from "react-redux";
import Layout from './Layout.jsx';
import { withRouter } from 'react-router-dom';
import {ADD_TO_WISHLIST } from '../actions/types'
const Details = ({location : {state , btnText="Add to WishList" , font}}) => {
    const {data} = useSelector(store => store.wishList);
    const dispatch =useDispatch()
    const [isDisabled , setisDisabled] = useState(false);

    return (
        <Layout>
        <div className="movie_detail" style = {{
          fontFamily : font
        }}>
          <h2>{state.title}</h2>
          <div className="detail_container">
            <div>
                <img  src={`https://image.tmdb.org/t/p/w154${
                        state.poster_path
                      }`}
                      alt={state.title}/>
                      <h3>Released on : {state.release_date}</h3>
                      <h4>Language : {state.original_language}</h4>
                      <h4>Rating : {state.vote_average}</h4>
                      <h4>votes : {state.vote_count}</h4>
                    
            </div>
            <div className="movie_desc">
              {state.overview}
              <div>
                  <button style ={{
                    fontFamily: font
                  }}
                    disabled={isDisabled} onClick={() => {
                      setisDisabled(true)
                      dispatch({
                      type : ADD_TO_WISHLIST ,
                      payload : state
                  })
                }
                }> {btnText} </button>
              </div>
            </div>

          </div>
        </div>
        </Layout>
    )
}
export default withRouter( Details);
