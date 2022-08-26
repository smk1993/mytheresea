
import React, { Component } from 'react'

import TrendingPage  from "./TrendingPage.jsx";
import Footer from "./Footer";
import { fetchTrendingMovies , fetchsecondGenere, fetchthirdGenere } from "../actions/index";
import { connect } from "react-redux";
import "./Home.scss";
import Layout from './Layout.jsx';
export class Home extends Component {

    componentDidMount = async () => {
       if(!this.props.trending.length) this.props.fetchTrendingMovies();
       if(!this.props.secondGenre.length) this.props.fetchsecondGenere();
       if(!this.props.thirdGenre.length) this.props.fetchthirdGenere();
      };
      shouldComponentUpdate(nextProps, nextState) {
        
        return  nextProps != nextState
      };
    render() {
        return (
            <Layout>
            <div className="container">
                 <TrendingPage trending= {this.props.trending} type="Top Rated" font="Georgia" btnText="Add TopRated"/>
                 <TrendingPage trending= {this.props.secondGenre} type="Favroutes" font="Courier New" btnText = "Add Favourites"/>
                 <TrendingPage trending= {this.props.thirdGenre} type="Trending" font="Brush Script MT" btnText = "Add Trending"/>
                 <Footer />
            </div>
            </Layout>
        )
    }
}

const mapStateToProps = state => {
    return {
      trending: state.trending,
      secondGenre : state.secondGenre,
    thirdGenre : state.thirdGenre
    };
  };

  export default connect(
    mapStateToProps,
    {
      fetchTrendingMovies,
      fetchsecondGenere,
      fetchthirdGenere
    }
  )(Home);
