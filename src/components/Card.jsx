import React from 'react'
import './Card.scss';
 const Card = ({movie ,navigateDetailsPage , font , btnText }) => {
    return (
      <React.Fragment>
            <div
                className="card"
                style={{
                fontFamily: {font}
                }}
                key={movie.id}
                onClick={() => navigateDetailsPage(movie ,font, btnText)}
              >
                <div className="card-img-top">
                 
                    <img
                      src={`https://image.tmdb.org/t/p/w154${
                        movie.poster_path
                      }`}
                      alt={movie.title}
                    />
               
                </div>
              </div>
      </React.Fragment>
    )
}
export default Card
