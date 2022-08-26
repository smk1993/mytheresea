import React from 'react'
import {  useSelector} from "react-redux";
import Layout from './Layout.jsx';
import { withRouter } from 'react-router-dom';
import "./WishList.scss";
import Card from './Card.jsx';
const WishList = () => {
    const { wishList } = useSelector(store => store.wishList);
        return (
           <Layout>

               <div className="wishList_container">
                 { wishList.length ? wishList.map((movie) => (
                     <div  className="show_list">
                         <Card movie={movie}  />
                         {movie.title}
                         </div>
                
                 )) : "Wishlist is Empty! Please add movies"}
               
               </div>
           </Layout>
        )
}
export default withRouter(WishList)
